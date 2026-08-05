# CAEZ Farms Website

A modern, sustainable agricultural website for CAEZ Farms - premium organic farming on 200 acres of fertile farmland in Kwame Danso, Ghana.

## Project Overview

CAEZ Farms is built with a modern tech stack featuring:
- **Frontend**: React 18 + Vite (fast build tool)
- **Backend**: Node.js + Express.js
- **Email**: Nodemailer for contact form submissions
- **Styling**: Custom CSS with responsive design

## Project Structure

```
CAEZ farms/
├── index.html                 # Main HTML entry point
├── vite.config.js            # Vite configuration
├── package.json              # Frontend dependencies
├── src/
│   ├── main.jsx              # React app entry point
│   ├── App.jsx               # Root component with routing
│   ├── components/           # Reusable React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Hero.jsx          # Hero banner section
│   │   ├── About.jsx         # About company section
│   │   ├── Products.jsx      # Products showcase
│   │   ├── Community.jsx     # Community impact section
│   │   ├── Contact.jsx       # Contact form component
│   │   └── Footer.jsx        # Footer component
│   ├── pages/                # Full page components
│   │   ├── Home.jsx          # Home page
│   │   ├── About.jsx         # About page
│   │   ├── Blog.jsx          # Blog page
│   │   └── Contact.jsx       # Contact page
│   ├── styles/               # Global styles
│   │   └── global.css        # Design system and utilities
│   └── assets/               # Images and media files
├── backend/                  # Node.js backend
│   ├── server.js             # Express server entry point
│   ├── package.json          # Backend dependencies
│   ├── .env.example          # Environment variables template
│   ├── .gitignore            # Git ignore rules
│   ├── routes/               # API route handlers
│   │   ├── contact.js        # Contact form routes
│   │   └── api.js            # General API routes
│   └── utils/                # Utility functions
│       ├── validation.js     # Form and data validation
│       └── email.js          # Email sending functionality
└── images/                   # Company images and photos

```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

#### 1. Frontend Setup

```bash
# Navigate to project root
cd "CAEZ farms"

# Install frontend dependencies
npm install

# This installs:
# - React 18
# - React Router for navigation
# - Vite for fast development and building
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# This installs:
# - Express.js for API server
# - CORS for cross-origin requests
# - Nodemailer for email functionality
# - Dotenv for environment variables
```

#### 3. Environment Configuration

```bash
# In backend directory, create .env file from template
cp .env.example .env

# Edit .env and add your configuration:
# - EMAIL_SERVICE: Email provider (gmail, outlook, etc.)
# - EMAIL_USER: Your email address
# - EMAIL_PASSWORD: Your email password or app password
# - EMAIL_TO: Where contact form emails are sent
# - PORT: Backend server port (default 5000)
# - FRONTEND_URL: Frontend URL for CORS (default http://localhost:3000)
```

### Running the Application

#### Development Mode

**Terminal 1 - Frontend (from project root):**
```bash
npm run dev
# Frontend runs on http://localhost:3000
```

**Terminal 2 - Backend (from backend directory):**
```bash
npm run dev
# Backend runs on http://localhost:5000
```

Visit http://localhost:3000 in your browser to see the website.

#### Production Build

```bash
# From project root, build frontend
npm run build
# Creates optimized build in dist/ folder

# Backend runs with
cd backend
npm start
```

## Features

### Frontend Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Navigation**: Header with mobile-friendly menu
- **Home Page**: Hero section, about, products, community info
- **About Page**: Company mission, vision, and values
- **Products Page**: Showcase of crops (coconut, cashew, mango)
- **Contact Page**: Form with validation
- **Blog Page**: News and updates
- **Footer**: Links and company info

### Backend Features
- **Contact Form API**: Handles form submissions and validation
- **Email Notifications**: Sends confirmation emails to users
- **Product API**: Returns list of products
- **Blog API**: Provides blog post data
- **Company Info API**: Returns general company information
- **Health Check**: Endpoint to verify server status

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/health` - Check contact service status

### General
- `GET /api/health` - Server health check
- `GET /api/products` - Get list of products
- `GET /api/blog` - Get blog posts
- `GET /api/blog/:id` - Get single blog post
- `GET /api/company-info` - Get company information

## Code Organization & Comments

All code includes comprehensive comments explaining:
- Component purpose and structure
- Function parameters and return values
- Why certain approaches were chosen
- How to extend functionality

Example comment style:
```javascript
// Component name - What it does
// Additional context about the component

export default function MyComponent() {
  // State explanation
  const [state, setState] = useState('')
  
  // Function explanation
  const handleClick = () => {
    // Logic explanation
  }
  
  return (
    // JSX explanation
  )
}
```

## Styling System

The website uses CSS custom properties (variables) for easy theming:

```css
/* Colors */
--color-primary: #1b5e20        /* Deep green */
--color-secondary: #ff6b35      /* Coral orange */
--color-accent: #ffd700         /* Gold */

/* Spacing */
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
/* ... and more */
```

To customize colors/spacing, edit `src/styles/global.css`

## Email Configuration

### Gmail Setup (Recommended for Development)

1. Enable 2-factor authentication on your Google account
2. Create an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `.env`:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

### Other Email Services

- Update `EMAIL_SERVICE` in `.env` to your provider
- Nodemailer supports: gmail, outlook, yahoo, sendgrid, etc.
- See [Nodemailer documentation](https://nodemailer.com/smtp/) for setup

## Troubleshooting

### Frontend Issues

**Port 3000 already in use:**
```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Backend Issues

**Port 5000 already in use:**
```bash
# Kill process on port 5000
# macOS/Linux:
lsof -ti:5000 | xargs kill -9

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Contact form not sending emails:**
1. Check `.env` file is configured correctly
2. Verify email credentials are correct
3. Check backend console for error messages
4. Ensure backend is running (`npm run dev` in backend folder)

**Frontend can't reach backend:**
1. Ensure backend is running on port 5000
2. Check CORS is enabled in `backend/server.js`
3. Verify `FRONTEND_URL` in backend `.env` matches your frontend URL

## Adding Images

1. Place images in the `/images` folder
2. Reference them in components:
   ```jsx
   <img src="/images/photo.jpg" alt="Description" />
   ```

## Extending the Website

### Add a New Page

1. Create new file in `src/pages/NewPage.jsx`
2. Add route to `src/App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Header.jsx`

### Add a New API Endpoint

1. Create function in `backend/routes/api.js`
2. Call from frontend using fetch:
   ```javascript
   const response = await fetch('http://localhost:5000/api/endpoint')
   const data = await response.json()
   ```

### Customize Colors

Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... */
}
```

## Deployment

### Frontend Deployment (Vercel, Netlify, GitHub Pages)

```bash
# Build the frontend
npm run build

# Upload dist/ folder to your hosting provider
```

### Backend Deployment (Heroku, Railway, Render)

```bash
# Push backend folder to your hosting provider
# Set environment variables on hosting platform
# Backend will run with: npm start
```

## Performance Tips

- Frontend uses Vite for fast development and optimized builds
- Components are modular and reusable
- CSS is organized and lightweight
- Images should be optimized before adding to `/images`

## Support

For questions about the code structure or setup, refer to comments throughout the codebase. Each file includes detailed explanations of its purpose and functionality.

## License

CAEZ Farms Website © 2025

---

**Built with ❤️ for sustainable agriculture in Ghana**
# caezFarms
