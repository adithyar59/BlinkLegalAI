/**
 * NGO Analytics Dashboard
 * Shows legal awareness statistics and query analytics
 * Designed for NGOs and administrators to understand community legal needs
 */

import { useState, useEffect } from 'react'
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { BarChart3, TrendingUp, Users, MessageSquare, Scale, BookOpen, Layers } from 'lucide-react'
import { legalDataset, LEGAL_CATEGORIES, getAnalyticsData } from '@/data/legalDataset'
import { learningModules } from '@/data/learningModules'

// ── Mock query analytics (simulated session data) ──────────────────────────
// In a real deployment, these would come from the backend analytics API
function generateAnalyticsData() {
  // Category query distribution (simulated based on typical legal aid center data)
  const categoryQueryData = [
    { category: 'Labour Law', queries: 42, percentage: 28 },
    { category: 'Consumer Rights', queries: 35, percentage: 23 },
    { category: 'Harassment', queries: 28, percentage: 19 },
    { category: 'Cybercrime', queries: 24, percentage: 16 },
    { category: 'Tenancy', queries: 21, percentage: 14 },
  ]

  // Monthly trend data
  const monthlyData = [
    { month: 'Oct', queries: 45, users: 38 },
    { month: 'Nov', queries: 62, users: 51 },
    { month: 'Dec', queries: 58, users: 47 },
    { month: 'Jan', queries: 78, users: 63 },
    { month: 'Feb', queries: 91, users: 74 },
    { month: 'Mar', queries: 107, users: 89 },
  ]

  // Top legal issues
  const topIssues = [
    { issue: 'Salary Not Paid', count: 18, category: 'Labour Law' },
    { issue: 'UPI / Online Fraud', count: 15, category: 'Cybercrime' },
    { issue: 'Defective Product', count: 13, category: 'Consumer Rights' },
    { issue: 'Domestic Violence', count: 12, category: 'Harassment' },
    { issue: 'Illegal Eviction', count: 10, category: 'Tenancy' },
    { issue: 'Workplace Harassment', count: 9, category: 'Harassment' },
    { issue: 'Wrongful Termination', count: 8, category: 'Labour Law' },
    { issue: 'Builder Fraud', count: 7, category: 'Consumer Rights' },
  ]

  return { categoryQueryData, monthlyData, topIssues }
}

const CHART_COLORS = {
  'Labour Law': 'hsl(210, 60%, 45%)',
  'Consumer Rights': 'hsl(38, 80%, 50%)',
  'Cybercrime': 'hsl(0, 65%, 55%)',
  'Harassment': 'hsl(270, 50%, 50%)',
  'Tenancy': 'hsl(158, 55%, 40%)',
}

const CATEGORY_ICONS: Record<string, string> = {
  'Labour Law': '⚖️',
  'Consumer Rights': '🛒',
  'Cybercrime': '🔐',
  'Harassment': '🛡️',
  'Tenancy': '🏠',
}

// ── Stat Card ─────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, subtext, color }: {
  icon: React.ElementType; label: string; value: string | number; subtext?: string; color: string
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm animate-slide-up">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
        <div className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="text-3xl font-serif font-bold text-foreground">{value}</div>
      {subtext && <div className="text-xs text-muted-foreground mt-1">{subtext}</div>}
    </div>
  )
}

// ── Custom Tooltip ─────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-card border border-border rounded-lg shadow-md p-3 text-xs">
      <p className="font-bold text-foreground mb-1.5">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-muted-foreground capitalize">{p.name}:</span>
          <span className="font-semibold text-foreground">{p.value}</span>
        </div>
      ))}
    </div>
  )
}

export function DashboardPage() {
  const [sessionQueries, setSessionQueries] = useState(0)
  const analytics = getAnalyticsData()
  const { categoryQueryData, monthlyData, topIssues } = generateAnalyticsData()

  // Simulate live query counter
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setSessionQueries((prev) => prev + 1)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            NGO Analytics Dashboard
          </div>
          <h1 className="text-3xl font-serif font-bold text-primary">Legal Awareness Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Understanding community legal needs — powered by query analysis
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium text-green-700">System Active</span>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={MessageSquare} label="Total Queries" value="150" subtext="All time queries" color="bg-primary" />
        <StatCard icon={Users} label="Session Queries" value={sessionQueries} subtext="This session (live)" color="bg-accent" />
        <StatCard icon={Scale} label="Legal Entries" value={legalDataset.length} subtext="In knowledge base" color="bg-orange-500" />
        <StatCard icon={BookOpen} label="Learn Modules" value={learningModules.length} subtext="Educational content" color="bg-purple-500" />
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Monthly Trend */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-serif font-bold text-foreground">Query Trend</h3>
              <p className="text-xs text-muted-foreground">Monthly queries & unique users (6 months)</p>
            </div>
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="queries" name="Queries" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="users" name="Users" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="4 4" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Pie */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="font-serif font-bold text-foreground">Category Distribution</h3>
              <p className="text-xs text-muted-foreground">Query breakdown by legal domain</p>
            </div>
            <Layers className="w-4 h-4 text-primary" />
          </div>
          <div className="flex items-center gap-4">
            <ResponsiveContainer width={180} height={200}>
              <PieChart>
                <Pie data={categoryQueryData} cx="50%" cy="50%" innerRadius={45} outerRadius={80} dataKey="queries" stroke="none">
                  {categoryQueryData.map((entry, i) => (
                    <Cell key={i} fill={CHART_COLORS[entry.category as keyof typeof CHART_COLORS] || '#ccc'} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => [`${val} queries`, '']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2">
              {categoryQueryData.map((entry) => (
                <div key={entry.category} className="flex items-center gap-2">
                  <span className="text-sm">{CATEGORY_ICONS[entry.category]}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs text-foreground font-medium">{entry.category}</span>
                      <span className="text-xs font-bold text-foreground">{entry.percentage}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${entry.percentage}%`, backgroundColor: CHART_COLORS[entry.category as keyof typeof CHART_COLORS] }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Top Issues Bar Chart */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="mb-5">
            <h3 className="font-serif font-bold text-foreground">Top Legal Issues</h3>
            <p className="text-xs text-muted-foreground">Most frequently asked about legal topics</p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topIssues} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis type="category" dataKey="issue" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} width={120} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Queries" radius={[0, 4, 4, 0]}>
                {topIssues.map((entry, i) => (
                  <Cell key={i} fill={CHART_COLORS[entry.category as keyof typeof CHART_COLORS] || 'hsl(var(--primary))'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Knowledge Base Stats */}
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="mb-5">
            <h3 className="font-serif font-bold text-foreground">Knowledge Base Coverage</h3>
            <p className="text-xs text-muted-foreground">Legal entries available per category</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={analytics.topCategories}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Entries" radius={[4, 4, 0, 0]}>
                {analytics.topCategories.map((entry, i) => (
                  <Cell key={i} fill={CHART_COLORS[entry.category as keyof typeof CHART_COLORS] || 'hsl(var(--primary))'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* System Info */}
          <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3">
            {[
              { label: 'Knowledge Base', value: `${legalDataset.length} entries` },
              { label: 'Legal Categories', value: `${LEGAL_CATEGORIES.length} domains` },
              { label: 'Learn Modules', value: `${learningModules.length} modules` },
              { label: 'AI Model', value: 'OpenRouter RAG' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-secondary/60 rounded-lg p-2.5">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-xs font-bold text-foreground mt-0.5">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awareness Gap Insights */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
        <h3 className="font-serif font-bold text-foreground mb-1">Community Awareness Insights</h3>
        <p className="text-xs text-muted-foreground mb-4">Key findings from query analysis for NGO action planning</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: '📈', title: 'Growing Awareness', detail: 'Query volume increased 140% over 6 months, indicating rising awareness of legal rights.' },
            { icon: '⚠️', title: 'High Priority Area', detail: 'Labour Law and Consumer Rights are the most common queries — indicating gaps in awareness of worker and consumer rights.' },
            { icon: '🔍', title: 'Emerging Concern', detail: 'Cybercrime queries growing fastest — outreach programs on digital safety are critically needed.' },
          ].map(({ icon, title, detail }) => (
            <div key={title} className="bg-card/80 border border-border/60 rounded-lg p-4">
              <span className="text-2xl mb-2 block">{icon}</span>
              <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
