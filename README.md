# Personal Portfolio

A modern, responsive portfolio website showcasing projects from 42 Malaga and AI Agent development.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Two Project Categories**: 
  - 42 Malaga Projects: System programming and algorithm projects
  - AI Agent Projects: Machine learning and automation solutions
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, and Vite
- **Smooth Navigation**: Animated scrolling and intuitive user interface
- **Project Showcase**: Detailed project cards with technologies, links, and descriptions

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Development**: Hot reload and fast builds

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ProjectCard.tsx # Individual project display
│   ├── ProjectSection.tsx # Project category sections
│   └── Footer.tsx      # Footer with contact info
├── data/               # Project data
│   ├── projects42.ts   # 42 Malaga projects
│   └── aiProjects.ts   # AI Agent projects
├── types/              # TypeScript type definitions
│   └── project.ts      # Project interface types
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Customization

To customize the portfolio for your own projects:

1. **Update project data**: Modify the files in `src/data/` to include your projects
2. **Personal information**: Update contact details in `src/components/Footer.tsx`
3. **Styling**: Customize colors and design in Tailwind CSS classes
4. **Content**: Update descriptions and titles throughout the components

## Deployment

This portfolio is built as a static site and can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply build the project and deploy the `dist` folder contents.

## License

This project is open source and available under the [MIT License](LICENSE).