// Imports
import React from 'react'

// App Imports
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import BlogListContainer from '../components/blog/BlogListContainer'
import BlogContainer from '../components/blog/BlogContainer'
import BlogAddContainer from '../components/blog/BlogAddContainer'

// Routes
const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/blogs',
    component: BlogListContainer
  },
  {
    path: '/blog/:id',
    component: BlogContainer
  },
  {
    path: '/blog-add',
    component: BlogAddContainer
  }
]

export default routes