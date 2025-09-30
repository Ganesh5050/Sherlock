import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface SearchResult {
  site: string;
  url: string;
  found: boolean;
}

interface OSINTSearchProps {
  onSearch?: (query: string) => void;
}

export const OSINTSearch = ({ onSearch }: OSINTSearchProps) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [currentSite, setCurrentSite] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    // Auto-focus the search bar on load
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      toast.error('Please enter a username to search');
      return;
    }

    setIsSearching(true);
    setResults([]);
    setIsComplete(false);
    setCurrentSite('');

    // Close any existing EventSource
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    // Simple scroll to results after a delay
    setTimeout(() => {
      const searchResultsElement = document.getElementById('search-results');
      if (searchResultsElement) {
        // Scroll to results but keep some content above visible
        const navbarHeight = 80;
        const elementPosition = searchResultsElement.offsetTop;
        const offsetPosition = elementPosition - navbarHeight - 50; // Extra 50px to keep title visible
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 1000);

    try {
      // Create EventSource connection to Flask backend
      const eventSource = new EventSource(
        `http://localhost:5000/search?username=${encodeURIComponent(query.trim())}`
      );
      
      eventSourceRef.current = eventSource;

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          if (data.error) {
            toast.error(`Error: ${data.error}`);
            setIsSearching(false);
            eventSource.close();
            return;
          }

          if (data.is_complete) {
            setIsSearching(false);
            setIsComplete(true);
            setCurrentSite('');
            eventSource.close();
            toast.success(`Search completed! Found ${results.filter(r => r.found).length} matches.`);
            return;
          }

          // Update current site being checked
          setCurrentSite(data.site);

          // Add result to the list
          const newResult: SearchResult = {
            site: data.site,
            url: data.url,
            found: data.found
          };

          setResults(prev => [...prev, newResult]);
          onSearch?.(query.trim());

        } catch (error) {
          console.error('Error parsing SSE data:', error);
        }
      };

      eventSource.onerror = (error) => {
        console.error('EventSource failed:', error);
        toast.error('Search failed. Please try again.');
        setIsSearching(false);
        setCurrentSite('');
        eventSource.close();
      };

    } catch (error) {
      console.error('Search error:', error);
      toast.error('Failed to start search. Make sure the backend is running.');
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isSearching) {
      handleSearch();
    }
  };

  const clearResults = () => {
    setResults([]);
    setIsComplete(false);
    setCurrentSite('');
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }
  };

  const foundCount = results.filter(r => r.found).length;
  const totalCount = results.length;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="glass rounded-2xl p-2">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Search className="w-6 h-6 text-primary" />
            </div>
            
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter username to search across 50+ platforms..."
              className="flex-1 text-lg bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-muted-foreground/60"
              disabled={isSearching}
            />
            
            <Button
              onClick={handleSearch}
              disabled={isSearching || !query.trim()}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 glow-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Search className="w-5 h-5 mr-2" />
              )}
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Status */}
      {(isSearching || isComplete) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {isSearching && currentSite && (
            <p className="text-muted-foreground">
              Checking <span className="text-primary font-semibold">{currentSite}</span>... 
              ({totalCount} checked)
            </p>
          )}
          {isComplete && (
            <div className="flex items-center justify-center space-x-4">
              <Badge variant="outline" className="text-lg px-4 py-2">
                Search Complete
              </Badge>
              <Badge variant="default" className="text-lg px-4 py-2">
                Found: {foundCount}/{totalCount}
              </Badge>
              <Button
                onClick={clearResults}
                variant="outline"
                size="sm"
              >
                Clear Results
              </Button>
            </div>
          )}
        </motion.div>
      )}

      {/* Scroll anchor point */}
      <div id="search-results" className="scroll-mt-20 pt-4"></div>

      {/* Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-3 mt-4 pt-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Search Results</span>
                  <Badge variant="outline">
                    {foundCount} found / {totalCount} checked
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 max-h-96 overflow-y-auto">
                  {results.map((result, index) => (
                    <motion.div
                      key={`${result.site}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                        result.found 
                          ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' 
                          : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {result.found ? (
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        )}
                        <span className={`font-medium ${
                          result.found 
                            ? 'text-green-800 dark:text-green-200' 
                            : 'text-red-800 dark:text-red-200'
                        }`}>
                          {result.site}
                        </span>
                      </div>
                      
                      {result.found && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(result.url, '_blank')}
                          className="text-primary hover:text-primary-foreground"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Visit
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
