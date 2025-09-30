import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ 
  onSearch, 
  placeholder = "Search everything..." 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus the search bar on load
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className={`glass rounded-2xl p-2 transition-all duration-300 ${
        isFocused ? 'glow-primary scale-105' : ''
      }`}>
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
            <Command className="w-6 h-6 text-primary" />
          </div>
          
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="flex-1 text-lg bg-transparent border-none focus:ring-0 focus:outline-none placeholder:text-muted-foreground/60"
          />
          
          <Button
            onClick={handleSearch}
            size="lg"
            className="bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 glow-primary"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
      
      {/* Search suggestions hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isFocused ? 1 : 0 }}
        className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground"
      >
        Try searching for packages, APIs, or documentation
      </motion.div>
    </motion.div>
  );
};