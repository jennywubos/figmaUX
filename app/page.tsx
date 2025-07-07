'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Dashboard from '@/components/Dashboard'
import Analytics from '@/components/Analytics'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <Hero />
      
      <Services />
      
      <Dashboard />
      
      <Analytics />
      
      <Pricing />
      
      <Footer />
    </main>
  )
} 