/**
 * Legal Topic Explorer Page
 * Browse all legal categories and their entries
 */

import { useState } from 'react'
import { Search, ChevronRight, ArrowLeft, Scale, FileText, Building2, CheckSquare } from 'lucide-react'
import { cn } from '@/lib/utils'
import { legalDataset, LEGAL_CATEGORIES, type LegalEntry, type LegalCategory } from '@/data/legalDataset'

const CATEGORY_CONFIG: Record<LegalCategory, { icon: string; color: string; bgColor: string; description: string }> = {
  'Labour Law': {
    icon: '⚖️',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50 border-blue-200',
    description: 'Wages, termination, PF, maternity, overtime and worker rights',
  },
  'Consumer Rights': {
    icon: '🛒',
    color: 'text-orange-700',
    bgColor: 'bg-orange-50 border-orange-200',
    description: 'Defective products, online fraud, banking issues, RERA',
  },
  'Cybercrime': {
    icon: '🔐',
    color: 'text-red-700',
    bgColor: 'bg-red-50 border-red-200',
    description: 'UPI fraud, hacking, cyberbullying, data privacy, phishing',
  },
  'Harassment': {
    icon: '🛡️',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50 border-purple-200',
    description: 'Domestic violence, workplace harassment, stalking, dowry',
  },
  'Tenancy': {
    icon: '🏠',
    color: 'text-green-700',
    bgColor: 'bg-green-50 border-green-200',
    description: 'Rent agreements, eviction, security deposit, landlord disputes',
  },
}

function EntryDetail({ entry, onBack }: { entry: LegalEntry; onBack: () => void }) {
  const config = CATEGORY_CONFIG[entry.category]
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-slide-up">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to topics
      </button>

      <div className={cn('border rounded-xl p-4 mb-6', config.bgColor)}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{config.icon}</span>
          <span className={cn('text-xs font-bold uppercase tracking-wider', config.color)}>{entry.category}</span>
        </div>
        <h1 className="text-xl font-serif font-bold text-foreground mb-1">{entry.title}</h1>
        <p className="text-xs text-muted-foreground font-medium">📜 {entry.law_reference}</p>
      </div>

      <div className="space-y-4">
        {/* Simple Explanation */}
        <div className="border border-primary/20 rounded-xl p-4 bg-primary/5">
          <div className="flex items-center gap-2 mb-2">
            <Scale className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">In Simple Terms</span>
          </div>
          <p className="text-sm text-foreground leading-relaxed">{entry.simplified_explanation}</p>
        </div>

        {/* Full Description */}
        <div className="border border-border rounded-xl p-4 bg-card">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Legal Description</p>
          <p className="text-sm text-foreground/90 leading-relaxed">{entry.description}</p>
        </div>

        {/* Documents Required */}
        {entry.documents_required.length > 0 && (
          <div className="border border-border rounded-xl p-4 bg-card">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground uppercase tracking-wider">Documents Required</span>
            </div>
            <ul className="space-y-1.5">
              {entry.documents_required.map((doc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckSquare className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Authority */}
        <div className="border border-border rounded-xl p-4 bg-card">
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Authority to Approach</span>
          </div>
          <p className="text-sm font-medium text-foreground">{entry.authority}</p>
        </div>

        {/* Procedure Steps */}
        {entry.procedure_steps.length > 0 && (
          <div className="border border-border rounded-xl p-4 bg-card">
            <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Step-by-Step Procedure</p>
            <ol className="space-y-2">
              {entry.procedure_steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
          ⚠️ This information is provided for legal awareness purposes only. Please consult a qualified legal professional for advice specific to your situation.
        </div>
      </div>
    </div>
  )
}

export function TopicsPage() {
  const [activeCategory, setActiveCategory] = useState<LegalCategory | null>(null)
  const [selectedEntry, setSelectedEntry] = useState<LegalEntry | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  if (selectedEntry) {
    return <EntryDetail entry={selectedEntry} onBack={() => setSelectedEntry(null)} />
  }

  const filteredEntries = activeCategory
    ? legalDataset.filter((e) => e.category === activeCategory)
    : legalDataset.filter((e) => {
        if (!searchQuery.trim()) return false
        const q = searchQuery.toLowerCase()
        return (
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.keywords.some((k) => k.includes(q))
        )
      })

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Legal Topic Explorer</h1>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Browse {legalDataset.length} verified legal topics across 5 categories of Indian law.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-lg mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search legal topics…"
          value={searchQuery}
          onChange={(e) => { setSearchQuery(e.target.value); setActiveCategory(null) }}
          className="w-full pl-9 pr-4 py-2.5 border border-border rounded-xl bg-card text-sm focus:outline-none focus:border-primary/50 focus:shadow-sm transition-all"
        />
      </div>

      {/* Category Grid */}
      {!searchQuery.trim() && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {LEGAL_CATEGORIES.map((cat) => {
            const config = CATEGORY_CONFIG[cat]
            const count = legalDataset.filter((e) => e.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={cn(
                  'flex flex-col items-center gap-2 p-4 border rounded-xl transition-all duration-200 text-center',
                  activeCategory === cat
                    ? 'border-primary bg-primary text-primary-foreground shadow-md scale-105'
                    : cn('border-border bg-card hover:border-primary/30 hover:shadow-sm hover:scale-[1.02]', config.bgColor)
                )}
              >
                <span className="text-2xl">{config.icon}</span>
                <span className={cn('text-xs font-bold leading-tight', activeCategory === cat ? 'text-primary-foreground' : config.color)}>
                  {cat}
                </span>
                <span className={cn('text-xs', activeCategory === cat ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {count} topics
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Results */}
      {(activeCategory || searchQuery.trim()) && (
        <div className="animate-fade-in">
          {activeCategory && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{CATEGORY_CONFIG[activeCategory].icon}</span>
                <h2 className="font-serif font-bold text-foreground text-lg">{activeCategory}</h2>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{filteredEntries.length} topics</span>
              </div>
              <button onClick={() => setActiveCategory(null)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Clear filter
              </button>
            </div>
          )}

          {searchQuery.trim() && (
            <p className="text-sm text-muted-foreground mb-4">
              {filteredEntries.length === 0 ? 'No results found.' : `${filteredEntries.length} result${filteredEntries.length !== 1 ? 's' : ''} for "${searchQuery}"`}
            </p>
          )}

          <div className="space-y-2">
            {filteredEntries.map((entry) => {
              const config = CATEGORY_CONFIG[entry.category]
              return (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className="w-full text-left flex items-center gap-3 p-4 border border-border rounded-xl bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-xl shrink-0">{config.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">{entry.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={cn('text-xs font-medium', config.color)}>{entry.category}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground truncate">{entry.law_reference}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-all group-hover:translate-x-1" />
                </button>
              )
            })}
          </div>
        </div>
      )}

      {!activeCategory && !searchQuery.trim() && (
        <p className="text-center text-sm text-muted-foreground mt-4">
          Select a category above or search to browse legal topics
        </p>
      )}
    </div>
  )
}
