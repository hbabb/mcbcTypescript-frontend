// mcbcTypescript/frontend/src/routes/router.tsx
/** @type {import('react-router').RouteObject} */

import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// lazy loading
const Home = React.lazy(() => import('../pages/home'))
const About = React.lazy(() => import('../pages/about'))
const Staff = React.lazy(() => import('../pages/staff'))
const Prayer = React.lazy(() => import('../pages/prayer'))
const Missions = React.lazy(() => import('../pages/missions'))
const Events = React.lazy(() => import('../pages/events'))
const Blogs = React.lazy(() => import('../pages/blogs'))
const EventPost = React.lazy(() => import('../pages/eventPost'))
const BlogPost = React.lazy(() => import('../pages/blogPost'))
const Contact = React.lazy(() => import('../pages/contact'))

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/eventPost" element={<EventPost />} />
        <Route path="/blogPost" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
