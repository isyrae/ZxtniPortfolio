# 🚀 ZxtniPortfolio

A modern, space-themed portfolio website built with Next.js 14, featuring stunning animations, 3D elements, and a responsive design.

![ZxtniPortfolio Preview](preview.gif)

## ✨ Features

- 🌌 **Space Theme**: Immersive cosmic design with animated starfield background
- 🎨 **Modern UI/UX**: Clean, professional interface with smooth animations
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js 14 for optimal speed and SEO
- 🎭 **3D Animations**: Interactive elements using Three.js and Framer Motion
- 🔒 **Security Showcase**: Dedicated section highlighting security features
- 📊 **Skills Display**: Animated tech stack with hover effects
- 🚀 **Project Showcase**: Interactive project cards with smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Heroicons, React Icons
- **Deployment**: Vercel/Netlify Ready

## 📁 Project Structure

```
ZxtniPortfolio/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Main page component
│   ├── favicon.ico              # Site favicon
│   ├── apple-icon.png           # Apple touch icon
│   ├── icon1.png                # Additional icons
│   └── icon2.png
├── components/                   # React Components
│   ├── main/                    # Main page components
│   │   ├── navbar.tsx           # Navigation bar
│   │   ├── hero.tsx             # Hero section
│   │   ├── skills.tsx           # Skills showcase
│   │   ├── projects.tsx         # Projects section
│   │   ├── encryption.tsx       # Security section
│   │   ├── footer.tsx           # Footer component
│   │   └── star-background.tsx  # 3D starfield background
│   └── sub/                     # Sub-components
│       ├── hero-content.tsx     # Hero content
│       ├── skill-text.tsx       # Skills text
│       ├── skill-data-provider.tsx # Skills data provider
│       └── project-card.tsx     # Project card component
├── config/                      # Configuration files
│   └── index.ts                 # Site configuration
├── constants/                   # Constants and data
│   └── index.ts                 # Portfolio data, social links
├── lib/                         # Utility libraries
│   ├── motion.ts                # Framer Motion animations
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   ├── projects/                # Project images
│   │   ├── project-1.png
│   │   ├── project-2.png
│   │   └── project-3.png
│   ├── skills/                  # Technology icons
│   │   ├── html.png
│   │   ├── css.png
│   │   ├── js.png
│   │   ├── react.png
│   │   ├── next.png
│   │   └── ... (more tech icons)
│   ├── videos/                  # Background videos
│   │   ├── blackhole.webm
│   │   ├── encryption-bg.webm
│   │   └── skills-bg.webm
│   ├── hero-bg.svg              # Hero background
│   ├── logo.png                 # Site logo
│   ├── lock-main.png            # Security icons
│   └── lock-top.png
├── package.json                 # Dependencies
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
├── postcss.config.js            # PostCSS config
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/isyrae/ZxtniPortfolio.git
   cd ZxtniPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Other Platforms

- **GitHub Pages**: Use `next export` for static hosting
- **AWS S3**: Upload build files to S3 bucket
- **DigitalOcean**: Deploy using App Platform


## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Built-in Next.js SEO optimization
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rahul Mondal (Zxtni)**
- GitHub: [@isyrae](https://github.com/isyrae)
- Telegram: [@zxtni](https://t.me/zxtni)
- Email: zxtni@proton.me

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons

## 📞 Support

If you have any questions or need help, feel free to reach out:

- 📧 Email: zxtni@proton.me
- 💬 Telegram: [@zxtni](https://t.me/zxtni)
- 🐛 Issues: [GitHub Issues](https://github.com/isyrae/ZxtniPortfolio/issues)

---

⭐ **Star this repository if you found it helpful!**
