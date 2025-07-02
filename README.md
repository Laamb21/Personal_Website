# Personal Portfolio Website

A modern, responsive personal portfolio website built with React. This website showcases your skills, projects, and provides a way for potential employers and clients to get in touch with you.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Dynamic Content**: Easy to update projects, skills, and personal information
- **Blog Section**: Share your thoughts and insights with markdown support
- **Contact Form**: Professional contact form with validation
- **SEO Friendly**: Optimized for search engines
- **Fast Loading**: Optimized performance and loading times

## Pages

1. **Home**: Landing page with introduction and call-to-action buttons
2. **About**: Professional bio, skills, experience timeline, and interests
3. **Projects**: Showcase your work with filtering by category
4. **Blog**: Share articles and insights with markdown support
5. **Contact**: Contact form and social media links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Personal_Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

Update your personal information in the following files:

1. **About Page** (`src/pages/About.js`):
   - Update the bio text
   - Modify skills and technologies
   - Update experience and education
   - Change interests and hobbies

2. **Contact Page** (`src/pages/Contact.js`):
   - Update contact details (email, phone, location)
   - Modify social media links
   - Customize the contact form

3. **Home Page** (`src/pages/Home.js`):
   - Update your name and title
   - Modify the description
   - Change the features section

### Projects

Update your projects in `src/data/projects.json`:

```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "/images/project-image.jpg",
  "githubLink": "https://github.com/yourusername/project",
  "liveLink": "https://project-demo.com",
  "category": "Full-Stack"
}
```

### Blog Posts

Add new blog posts in `src/pages/Blog.js` by adding to the `blogPosts` array:

```javascript
{
  id: 4,
  title: "Your Blog Post Title",
  date: "2024-01-20",
  excerpt: "Brief description of the post...",
  content: `
# Your Blog Post

Your markdown content here...
  `
}
```

### Styling

The website uses a consistent color scheme with CSS custom properties. The main colors are:

- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Background: `#f8f9fa` (Light Gray)
- Text: `#333` (Dark Gray)

You can customize these colors in the CSS files or add CSS custom properties for easier theming.

### Images

1. Replace `public/images/my-headshot.png` with your profile picture
2. Add project images to `public/images/` and reference them in `projects.json`
3. Ensure images are optimized for web (recommended size: 400x400px for profile, 800x600px for projects)

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── ProjectCard.js  # Project display component
│   └── Footer.js       # Footer component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Projects.js     # Projects page
│   ├── Blog.js         # Blog page
│   └── Contact.js      # Contact page
├── data/               # Data files
│   └── projects.json   # Projects data
├── styles/             # Global styles
│   └── App.css         # Main stylesheet
└── App.js              # Main app component
```

## Technologies Used

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **CSS3**: Styling with modern features
- **JavaScript ES6+**: Modern JavaScript features
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images are lazy-loaded for better performance
3. **Code Splitting**: React Router provides automatic code splitting
4. **Minification**: Production build includes minified code

## SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- High contrast ratios
- Focus indicators

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🚀**
