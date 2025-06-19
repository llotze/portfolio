# Portfolio Website

A modern, responsive portfolio website built with Next.js and deployed on GitHub Pages.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast loading with Next.js static export
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🚀 Optimized for GitHub Pages deployment

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
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

## Customization

### Personal Information

Update the following files with your personal information:

- `app/layout.js` - Update the metadata
- `app/components/Hero.js` - Update name and description
- `app/components/About.js` - Update about section
- `app/components/Skills.js` - Update skills and stats
- `app/components/Projects.js` - Update projects
- `app/components/Contact.js` - Update contact information

### Configuration

Update `next.config.js` with your GitHub repository name:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to your repository Settings > Pages
3. Select "GitHub Actions" as the source
4. The site will automatically deploy on every push to the main branch

### Manual Build

To build the static files manually:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## License

This project is open source and available under the [MIT License](LICENSE).
