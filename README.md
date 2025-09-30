# 🔍 Sherlock Nexus - OSINT Username Search Engine

A modern, fast, and accurate OSINT tool that searches for usernames across 50+ platforms instantly. Built with React, TypeScript, and Python Flask.

## ✨ Features

- **Lightning Fast**: Real-time username search across 50+ platforms
- **OSINT Ready**: Built for cybersecurity professionals and digital investigators  
- **50+ Platforms**: Comprehensive coverage including GitHub, Twitter, Reddit, Instagram, and more
- **Accurate Results**: Advanced detection algorithms to minimize false positives
- **Beautiful UI**: Modern design with typewriter animations and smooth interactions
- **Responsive**: Works perfectly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python 3.x** - [Download here](https://python.org/)
- **Git** - [Download here](https://git-scm.com/)

### Installation & Setup

**Step 1: Clone the repository**
```bash
git clone https://github.com/Ganesh5050/Sherlock.git
```

**Step 2: Navigate to the project directory**
```bash
cd Sherlock
```

**Step 3: Install frontend dependencies**
```bash
npm install
```

**Step 4: Install backend dependencies**
```bash
cd OSINT_Project-main
pip install Flask requests flask-cors
cd ..
```

### 🎯 Running the Application

**Option 1: Run Both Services (Recommended)**

**Terminal 1 - Start Backend:**
```bash
cd OSINT_Project-main
python app.py
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

**Option 2: Run Services Separately**

**Backend only:**
```bash
cd OSINT_Project-main
python app.py
```
*Backend runs on: http://localhost:5000*

**Frontend only:**
```bash
npm run dev
```
*Frontend runs on: http://localhost:8080 (or similar port)*

## 🌐 Access URLs

- **Frontend Application**: http://localhost:8080
- **Backend API**: http://localhost:5000
- **Original OSINT Interface**: http://localhost:5000

## 🛠️ Technologies Used

### Frontend
- **Vite** - Fast build tool and dev server
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing

### Backend
- **Python Flask** - Lightweight web framework
- **Requests** - HTTP library for API calls
- **Flask-CORS** - Cross-origin resource sharing

## 👥 Team

- **Ganesh Panigrahi** - Full Stack Lead
- **Archi Patel** - UI/UX Engineer
- **Ashish Mishra** - Cyber Expert
- **Abhishek Pal** - DevOps Engineer

## 📱 Usage

1. **Enter Username**: Type any username in the search box
2. **Real-time Search**: Watch as the tool checks 50+ platforms
3. **View Results**: See which platforms have the username
4. **Visit Profiles**: Click "Visit" to open found profiles

## 🔧 Development

### Project Structure
```
Sherlock/
├── src/                    # Frontend React app
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── assets/            # Images and static files
│   └── lib/               # Utilities
├── OSINT_Project-main/    # Backend Flask app
│   ├── app.py            # Main Flask application
│   ├── sites.py          # Platform configurations
│   └── index.html        # Original OSINT interface
└── public/               # Static assets
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the original [Sherlock](https://github.com/sherlock-project/sherlock) project
- Built with modern web technologies for enhanced user experience
- Designed for OSINT professionals and cybersecurity experts

---

**Made with ❤️ by the Sherlock Nexus Team**
