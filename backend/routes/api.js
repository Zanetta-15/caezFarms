// ===================================
// GENERAL API ROUTES
// ===================================
// Handles general API endpoints for the website

import express from 'express'

const router = express.Router()

// GET /api/products - Get list of products
router.get('/products', (req, res) => {
  // Array of products that CAEZ Farms offers
  const products = [
    {
      id: 1,
      name: 'Elite Hybrid Coconut',
      description: 'Premium hybrid coconut varieties cultivated on our fertile farmland.',
      highlights: ['High Yield', 'Disease Resistant', 'Premium Quality']
    },
    {
      id: 2,
      name: 'Commercial Cashew',
      description: 'Sustainably grown cashew nuts using advanced farming techniques.',
      highlights: ['Sustainable', 'Advanced Techniques', 'Export Quality']
    },
    {
      id: 3,
      name: 'Premium Mango',
      description: 'Delicious and nutritious mangoes grown with environmental responsibility.',
      highlights: ['Organic Farming', 'Nutritious', 'Seasonal Fresh']
    }
  ]

  res.json({
    status: 'success',
    data: products
  })
})

// GET /api/blog - Get list of blog posts
router.get('/blog', (req, res) => {
  // Array of blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Farming: The Future of Agriculture in Ghana',
      author: 'CAEZ Farms Team',
      date: '2025-08-01',
      category: 'Sustainability',
      excerpt: 'Explore how sustainable farming practices are revolutionizing agriculture in Ghana.'
    },
    {
      id: 2,
      title: 'Elite Hybrid Coconut: Premium Quality from CAEZ Farms',
      author: 'Agricultural Team',
      date: '2025-07-25',
      category: 'Products',
      excerpt: 'Learn about our premium hybrid coconut varieties and what makes them stand out.'
    },
    {
      id: 3,
      title: 'Community Healthcare Initiative Reaches 500 Residents',
      author: 'Community Team',
      date: '2025-07-20',
      category: 'Community',
      excerpt: 'Our free healthcare outreach program has successfully screened over 500 community members.'
    }
  ]

  res.json({
    status: 'success',
    data: blogPosts
  })
})

// GET /api/blog/:id - Get a single blog post by ID
router.get('/blog/:id', (req, res) => {
  // Parse the ID from the URL parameter
  const blogId = parseInt(req.params.id)

  // Mock blog post data - in a real app, this would come from a database
  const blogPost = {
    id: blogId,
    title: 'Sustainable Farming: The Future of Agriculture in Ghana',
    author: 'CAEZ Farms Team',
    date: '2025-08-01',
    category: 'Sustainability',
    content: 'This is the full blog post content. In a real application, this would be stored in a database and retrieved based on the blog ID.'
  }

  res.json({
    status: 'success',
    data: blogPost
  })
})

// GET /api/company-info - Get general company information
router.get('/company-info', (req, res) => {
  // Company information
  const companyInfo = {
    name: 'CAEZ Farms',
    location: 'Kwame Danso, Bono East Region, Ghana',
    founded: 2025,
    founders: ['Jen Afful', 'Ed Afful'],
    acres: 200,
    mission: 'To produce premium agricultural products through sustainable farming practices while promoting food security, environmental stewardship, and economic growth.',
    vision: 'To become one of Africa\'s leading sustainable agricultural enterprises.',
    contact: {
      email: 'info@caezfarms.com',
      phone: '+233 XXX XXX XXX'
    }
  }

  res.json({
    status: 'success',
    data: companyInfo
  })
})

export default router
