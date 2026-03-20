/**
 * LegalEase AI Platform
 * Main application router and layout
 *
 * Architecture:
 * - Chat Interface → AI-powered legal Q&A
 * - Learn Page → Legal education modules
 * - Topics Page → Legal topic explorer
 * - Dashboard Page → NGO analytics
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { ChatInterface } from '@/components/chat/ChatInterface'
import { LearnPage } from '@/pages/LearnPage'
import { TopicsPage } from '@/pages/TopicsPage'
import { DashboardPage } from '@/pages/DashboardPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ChatInterface />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
