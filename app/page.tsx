'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Figma, 
  Palette, 
  Users, 
  Zap, 
  ArrowRight, 
  Star,
  CheckCircle,
  Play,
  Download,
  Share2
} from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DesignSystem from '@/components/DesignSystem'
import FigmaIntegration from '@/components/FigmaIntegration'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <Hero />
      
      <Features />
      
      <DesignSystem />
      
      <FigmaIntegration />
      
      <Footer />
    </main>
  )
} 