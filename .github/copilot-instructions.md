# FUIROX Gaming Portal - Development Guide

## Project Overview

FUIROX is a modern, neon-themed gaming portal built with React, Vite, and Framer Motion. The site showcases web games with stunning animations and a futuristic aesthetic.

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite 8+
- **Animation Library**: Framer Motion
- **Styling**: CSS3 with custom animations
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with particle effects
│   ├── FeaturedGames.jsx # Game showcase grid
│   ├── GameCard.jsx    # Individual game card
│   ├── Stats.jsx       # Statistics section
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx            # React entry point
├── App.css             # Main styling
└── index.css           # Global styles
```

## Quick Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development Guidelines

### Component Development
- Use functional components with React hooks
- Leverage Framer Motion for animations
- Keep components modular and reusable
- Use CSS classes for styling (CSS modules or global styles)

### Styling
- Edit `App.css` for main component styles
- Edit `index.css` for global styles
- Use CSS variables for consistent coloring
- Maintain the neon red/orange/black theme

### Colors (Neon Theme)
- Primary Orange: `#ff4500`
- Hot Red: `#ff1744`
- Rose Pink: `#ff6b9d`
- Dark Background: `#0a0e27`
- Light Text: `#fff`

### Animations
- Use Framer Motion for React component animations
- Use CSS keyframes for pure CSS animations
- Keep animations smooth and performant
- Add glow effects for neon aesthetic

### Customization
1. **Adding Games**: Edit the games array in `components/FeaturedGames.jsx`
2. **Changing Colors**: Update hex values in `App.css` and `index.css`
3. **Modifying Stats**: Update stats array in `components/Stats.jsx`
4. **Adding Sections**: Create new components and import them in `App.jsx`

## Deployment

### Build Process
```bash
npm run build
```

### Deploy To
- **Vercel**: Direct Git integration or manual upload of `dist` folder
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Push `dist` to gh-pages branch

## Performance Tips

- Use production builds for better performance
- Optimize images before adding to the site
- Lazy load components if the site grows
- Monitor bundle size with Vite's built-in tools

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Common Tasks

### Add a New Game
1. Add game object to games array in `FeaturedGames.jsx`
2. Include: id, title, genre, description, image URL, rating, players

### Change Theme Colors
1. Find all color hex values in `App.css`
2. Replace `#ff4500` with your primary color
3. Replace `#ff1744` with your secondary color
4. Update `#0a0e27` for background if needed

### Add New Section
1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to JSX return statement
4. Create CSS in `App.css` with section class

## Troubleshooting

- **Dev server not starting**: Clear node_modules and reinstall with `npm install`
- **Styles not applying**: Check CSS class names match component className props
- **Animations stuttering**: Reduce number of active animations or optimize particle count
- **Build fails**: Check for console errors, ensure all imports are correct

## Future Enhancements

- Add game detail pages
- Implement user authentication
- Create leaderboard system
- Add game upload functionality
- Implement payment system for monetization
- Add dark/light theme toggle

## Resources

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

---

For questions or contributions, feel free to update this documentation!
