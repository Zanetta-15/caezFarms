// Main App Component - Root component for the React application
// Sets up routing and renders pages with header and footer

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Community from './pages/Community'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './styles/tailwind.css'

export default function App() {
  return (
    // Router enables navigation between pages
    <Router>
      <div className="app">
        {/* Header displays navigation on all pages */}
        <Header />
        <ScrollToTop />
        
        {/* Routes define which page component to show based on URL */}
        <Routes>
          {/* Home page route - shows when at root (/) */}
          <Route path="/" element={<Home />} />
          
          {/* About page route */}
          <Route path="/about" element={<About />} />
          
          {/* Products page route */}
          <Route path="/products" element={<Products />} />
          
          {/* Community page route */}
          <Route path="/community" element={<Community />} />
          
          {/* Blog page route */}
          <Route path="/blog" element={<Blog />} />
          
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer displays on all pages */}
        <Footer />
      </div>
    </Router>
  )
}
