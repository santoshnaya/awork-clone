# aWork Clone

A pixel-perfect, front-end-only Next.js clone of the aWork marketing website. This project recreates the beautiful design and animations of aWork's landing page with modern web technologies.

## 🚀 Features

- **Pixel-Perfect Design**: Meticulously crafted to match the original aWork website
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Smooth Animations**: Enhanced with Framer Motion for delightful user interactions
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Deployed and optimized for Vercel
- **Component-Based**: Clean, modular React components for easy maintenance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Font**: Geist Sans & Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd webflow-26-awork
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page assembling all components
└── components/
    ├── Header.tsx                    # Navigation header with dropdowns
    ├── HeroSection.tsx              # Hero section with main CTA
    ├── ProjectManagementSection.tsx # Project management showcase
    ├── CoreBusinessSection.tsx      # Core business features
    ├── FeaturesSection.tsx          # Feature highlights
    ├── PlanningSection.tsx          # Planning tools section
    ├── SimplicitySection.tsx        # Simplicity and company logos
    ├── CollaborationSection.tsx     # Collaboration features
    ├── CTASection.tsx               # Call-to-action with support options
    ├── TestimonialsSection.tsx      # FAQ section
    ├── CustomerTestimonialsSection.tsx # Customer reviews
    └── Footer.tsx                   # Footer with app links
```

## 🎨 Components

The project includes 12 main components that recreate the aWork landing page:

1. **Header**: Sticky navigation with logo, dropdowns, and CTA button
2. **HeroSection**: Main hero with animated dashboard mockup
3. **ProjectManagementSection**: Timeline view with project progress
4. **CoreBusinessSection**: 3D characters with floating animations
5. **FeaturesSection**: Feature showcase with team navigation
6. **PlanningSection**: Interactive dashboard with task management
7. **SimplicitySection**: Company logos and feature cards
8. **CollaborationSection**: Floating feature cards around character
9. **CTASection**: Support options with 3D illustrations
10. **TestimonialsSection**: FAQ with expandable questions
11. **CustomerTestimonialsSection**: Dark section with customer reviews
12. **Footer**: Email signup and comprehensive footer links

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your app

### Manual Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Features Implemented

- ✅ Responsive design across all screen sizes
- ✅ Smooth scroll animations with Framer Motion
- ✅ Interactive hover effects and micro-animations
- ✅ Modern gradient backgrounds and glassmorphism effects
- ✅ Custom scrollbar styling
- ✅ SEO-optimized with proper meta tags
- ✅ TypeScript for type safety
- ✅ Modular component architecture
- ✅ Performance optimized for fast loading

## 📱 Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

To start developing:

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build
```

## 📄 License

This project is for educational and demonstration purposes only. The original design belongs to aWork.

## 🙏 Acknowledgments

- Original design by [aWork](https://www.awork.com)
- Built with love using Next.js and modern web technologies
- Animations inspired by the beautiful original aWork website
