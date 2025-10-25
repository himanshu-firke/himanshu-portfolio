# 🚀 Himanshu Firke - Portfolio

A modern, full-stack portfolio website built with React, TypeScript, MongoDB, and Express. Features real-time view tracking, animated UI components, and a fully functional contact form.

🔗 **Live Demo:** [https://himanshu-portfolio.vercel.app](https://himanshu-portfolio.vercel.app)

---

## 📸 Preview

![Portfolio Screenshot](./screenshot.png)

---

## ✨ Features

- 🎨 **Modern UI** - Built with React, TailwindCSS, and shadcn/ui components
- 📊 **Real-time Views** - MongoDB-powered view counter that syncs across all devices
- 📧 **Contact Form** - Fully functional contact form with MongoDB storage
- 🎓 **Auto-rotating Certificates** - Smooth 3D carousel showcase
- 🏆 **LeetCode Integration** - Live stats from LeetCode profile
- 📱 **Fully Responsive** - Optimized for all screen sizes
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🎭 **Smooth Animations** - Framer Motion for beautiful transitions

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Server framework
- **MongoDB** - Database
- **Mongoose** - ODM

### Deployment
- **Vercel** - Frontend & Serverless functions
- **MongoDB Atlas** - Cloud database

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (free tier works)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/himanshu-firke/himanshu-portfolio.git
   cd himanshu-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

   Get your MongoDB connection string from [MongoDB Atlas](https://cloud.mongodb.com)

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   
   Visit [http://localhost:8080](http://localhost:8080)

---

## 🗄️ MongoDB Setup

1. Create a free account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster (M0 Free tier)
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for development)
5. Get your connection string
6. Add to `.env` file

**Collections created automatically:**
- `viewcounters` - Stores profile view count
- `contacts` - Stores contact form submissions

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variable:
   - `MONGODB_URI` = Your MongoDB connection string
4. Deploy!

**Build Settings:**
- Framework: Vite
- Build Command: `npm run build:client`
- Output Directory: `dist/spa`

---

## 📂 Project Structure

```
portfolio/
├── api/                    # Vercel serverless functions
│   ├── views.ts           # View counter API
│   └── contact.ts         # Contact form API
├── client/                # Frontend code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom hooks
│   └── lib/              # Utilities
├── server/               # Backend code (local dev)
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── config/           # Configuration
├── public/               # Static assets
└── index.html           # Entry HTML
```

---

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production
npm run build:client     # Build frontend only
npm run build:server     # Build backend only

# Other
npm run preview          # Preview production build
npm test                 # Run tests
npm run typecheck        # Type checking
```

---

## 🤝 Connect With Me

- **Portfolio:** [himanshu-portfolio.vercel.app](https://himanshu-portfolio.vercel.app)
- **GitHub:** [@himanshu-firke](https://github.com/himanshu-firke)
- **LinkedIn:** [Himanshu Firke](https://www.linkedin.com/in/himanshufirke/)
- **LeetCode:** [@Himanshu-Firke01](https://leetcode.com/u/Himanshu-Firke01/)
- **Email:** himanshufirke04@gmail.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Hosting platform
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Database hosting

---

**Made with ❤️ by Himanshu Firke**
