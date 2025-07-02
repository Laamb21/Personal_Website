import React, { useState } from 'react';
import './Blog.css';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "2024-01-15",
      excerpt: "Learn how to use React Hooks to manage state and side effects in functional components...",
      content: `
# Getting Started with React Hooks

React Hooks were introduced in React 16.8 and have revolutionized how we write React components. They allow you to use state and other React features without writing a class.

## Why Hooks?

- **Simpler Components**: No more complex class components
- **Better Reusability**: Custom hooks can be shared across components
- **Easier Testing**: Functional components are easier to test
- **Better Performance**: Hooks can be optimized better by React

## Basic Hooks

### useState
The most basic hook for managing state:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect
For handling side effects:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means run once

  return <div>{data ? data.title : 'Loading...'}</div>;
}
\`\`\`

## Best Practices

1. **Always call hooks at the top level**
2. **Only call hooks from React functions**
3. **Use the dependency array in useEffect**
4. **Create custom hooks for reusable logic**

Hooks have made React development more enjoyable and efficient. Start using them today!
      `
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better UX",
      date: "2024-01-10",
      excerpt: "Explore modern CSS techniques that can significantly improve user experience...",
      content: `
# Modern CSS Techniques for Better UX

Modern CSS has evolved significantly, offering powerful features that can enhance user experience without relying on JavaScript.

## CSS Grid Layout

CSS Grid is a powerful layout system that allows you to create complex layouts with ease:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
\`\`\`

## CSS Custom Properties

Custom properties (CSS variables) make your styles more maintainable:

\`\`\`css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
}

.button {
  background: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
\`\`\`

## Smooth Animations

CSS transitions and animations can make your interface feel more responsive:

\`\`\`css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
\`\`\`

## Responsive Design

Modern CSS makes responsive design easier than ever:

\`\`\`css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
}
\`\`\`

These techniques can significantly improve the user experience of your web applications.
      `
    },
    {
      id: 3,
      title: "Building a Portfolio Website",
      date: "2024-01-05",
      excerpt: "A guide to creating an effective developer portfolio that showcases your skills...",
      content: `
# Building a Portfolio Website

Your portfolio website is often the first impression potential employers or clients have of your work. Here's how to create an effective one.

## Planning Your Portfolio

Before you start coding, consider:

- **Your Audience**: Who will be viewing your portfolio?
- **Your Goals**: What do you want to achieve?
- **Your Brand**: How do you want to present yourself?

## Essential Sections

### 1. Hero Section
Make a strong first impression with a clear value proposition:

\`\`\`html
<section class="hero">
  <h1>Hi, I'm [Your Name]</h1>
  <p>Full-Stack Developer passionate about creating amazing web experiences</p>
  <button>View My Work</button>
</section>
\`\`\`

### 2. About Section
Share your story and what drives you:

- Professional background
- What you're passionate about
- Your approach to problem-solving

### 3. Projects Section
Showcase your best work:

- High-quality screenshots
- Clear descriptions
- Technologies used
- Live demos and GitHub links

### 4. Skills Section
Highlight your technical abilities:

- Programming languages
- Frameworks and libraries
- Tools and technologies
- Soft skills

### 5. Contact Section
Make it easy for people to reach you:

- Email address
- Social media links
- Contact form (optional)

## Design Principles

- **Keep it simple**: Don't overwhelm visitors
- **Make it fast**: Optimize for performance
- **Be responsive**: Work on all devices
- **Show personality**: Let your style shine through

## Technical Considerations

- **Performance**: Optimize images and code
- **SEO**: Use proper meta tags and structure
- **Accessibility**: Follow WCAG guidelines
- **Analytics**: Track visitor behavior

Remember, your portfolio is a living document. Update it regularly with new projects and skills!
      `
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdown = (content) => {
    // Simple markdown rendering
    return content
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      .replace(/\n/gim, '<br>');
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on coding, design, and technology</p>
      </div>

      <div className="blog-content">
        {!selectedPost ? (
          <div className="blog-posts">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-post-card">
                <div className="post-meta">
                  <span className="post-date">{formatDate(post.date)}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <button 
                  className="read-more-btn"
                  onClick={() => setSelectedPost(post)}
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="blog-post-full">
            <button 
              className="back-btn"
              onClick={() => setSelectedPost(null)}
            >
              ← Back to Posts
            </button>
            <article className="post-content">
              <div className="post-meta">
                <span className="post-date">{formatDate(selectedPost.date)}</span>
              </div>
              <h1 className="post-title">{selectedPost.title}</h1>
              <div 
                className="post-body"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(selectedPost.content) }}
              />
            </article>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog; 