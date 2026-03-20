/**
 * Chat Interface Component
 * Main legal Q&A interface with AI-powered responses
 * Implements the chatbot frontend as per system architecture
 */

import { useState, useRef, useEffect } from 'react'
import { Send, Scale, AlertCircle, ChevronDown, ChevronUp, FileText, Building2, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { askLegalQuestion, type LegalQueryResponse } from '@/lib/api'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  response?: LegalQueryResponse
  timestamp: Date
}

const CATEGORY_COLORS: Record<string, string> = {
  'Labour Law': 'bg-blue-100 text-blue-700 border-blue-200',
  'Consumer Rights': 'bg-orange-100 text-orange-700 border-orange-200',
  'Cybercrime': 'bg-red-100 text-red-700 border-red-200',
  'Harassment': 'bg-purple-100 text-purple-700 border-purple-200',
  'Tenancy': 'bg-green-100 text-green-700 border-green-200',
  'General Legal Query': 'bg-gray-100 text-gray-700 border-gray-200',
}

const SUGGESTED_QUESTIONS = [
  'My employer has not paid my salary for two months. What can I do?',
  'I received a defective product from an online store and they refuse to refund.',
  'Someone hacked my UPI account and transferred money without my consent.',
  'My landlord is threatening to throw me out without notice.',
  'I am facing sexual harassment at my workplace. What are my rights?',
]

function TypingIndicator() {
  return (
    <div className="flex gap-1.5 items-center px-4 py-3">
      <div className="w-2 h-2 rounded-full bg-primary/40 typing-dot" />
      <div className="w-2 h-2 rounded-full bg-primary/40 typing-dot" />
      <div className="w-2 h-2 rounded-full bg-primary/40 typing-dot" />
    </div>
  )
}

function SourceCard({ source }: { source: LegalQueryResponse['sources'][0] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-secondary/50 hover:bg-secondary/80 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-foreground">{source.title}</span>
        </div>
        {expanded ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
      </button>
      {expanded && (
        <div className="p-3 space-y-2 text-xs animate-fade-in">
          <div>
            <span className="font-medium text-muted-foreground">Law Reference: </span>
            <span className="text-foreground">{source.law_reference}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <Building2 className="w-3 h-3 text-accent mt-0.5 shrink-0" />
            <div>
              <span className="font-medium text-muted-foreground">Authority: </span>
              <span className="text-foreground">{source.authority}</span>
            </div>
          </div>
          {source.documents_required.length > 0 && (
            <div>
              <span className="font-medium text-muted-foreground block mb-1">Documents Required:</span>
              <ul className="space-y-0.5">
                {source.documents_required.map((doc, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {source.procedure_steps.length > 0 && (
            <div>
              <span className="font-medium text-muted-foreground block mb-1">Steps:</span>
              <ol className="space-y-0.5">
                {source.procedure_steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-foreground">
                    <span className="text-primary font-bold shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function AssistantMessage({ message }: { message: Message }) {
  const { response } = message
  const paragraphs = message.content.split('\n').filter((p) => p.trim())

  return (
    <div className="animate-slide-up space-y-3">
      {/* Category Badge */}
      {response && (
        <span className={cn('inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border', CATEGORY_COLORS[response.category] || CATEGORY_COLORS['General Legal Query'])}>
          <Scale className="w-3 h-3" />
          {response.category}
        </span>
      )}

      {/* Answer */}
      <div className="bg-card border border-border rounded-xl rounded-tl-sm p-4 shadow-sm max-w-2xl">
        <div className="prose prose-sm max-w-none">
          {paragraphs.map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <p key={i} className="font-semibold text-foreground mt-3 mb-1 first:mt-0">{para.replace(/\*\*/g, '')}</p>
            }
            if (para.startsWith('- ') || para.startsWith('• ')) {
              return <p key={i} className="flex items-start gap-1.5 text-sm text-foreground/90 ml-2 mb-0.5"><span className="text-primary mt-1.5 shrink-0">•</span>{para.replace(/^[•-]\s/, '')}</p>
            }
            if (/^\d+\.\s/.test(para)) {
              const num = para.match(/^(\d+)\./)?.[1]
              return <p key={i} className="flex items-start gap-2 text-sm text-foreground/90 ml-2 mb-1"><span className="font-bold text-primary shrink-0 mt-0.5">{num}.</span>{para.replace(/^\d+\.\s/, '')}</p>
            }
            return <p key={i} className="text-sm text-foreground/90 leading-relaxed mb-2 last:mb-0">{para.replace(/\*\*/g, '')}</p>
          })}
        </div>
      </div>

      {/* Sources */}
      {response && response.sources.length > 0 && (
        <div className="max-w-2xl space-y-1.5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Legal References Used</p>
          {response.sources.map((source, i) => (
            <SourceCard key={i} source={source} />
          ))}
        </div>
      )}

      {/* Disclaimer */}
      {response && (
        <div className="max-w-2xl flex gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5 text-xs text-amber-800">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
          {response.disclaimer}
        </div>
      )}

      <span className="text-xs text-muted-foreground">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  )
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSubmit = async (question: string) => {
    if (!question.trim() || isLoading) return
    setError(null)

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: question.trim(),
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    try {
      const response = await askLegalQuestion(question.trim())
      const assistantMsg: Message = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: response.answer,
        response,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMsg])
    } catch (err) {
      setError('Failed to get a response. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(input)
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Welcome / Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          /* Welcome Screen */
          <div className="flex flex-col items-center justify-center min-h-full px-4 py-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary mb-2">LegalEase AI Assistant</h1>
            <p className="text-muted-foreground text-sm max-w-md mb-2">
              Ask any legal question in plain English. I'll explain your rights using verified Indian law.
            </p>
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs px-3 py-1.5 rounded-full mb-8">
              <AlertCircle className="w-3 h-3" />
              This is legal information only — not legal advice
            </div>

            {/* Suggested Questions */}
            <div className="w-full max-w-lg space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Try asking:</p>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSubmit(q)}
                  className="w-full text-left flex items-start gap-2.5 p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <Sparkles className="w-4 h-4 text-primary/50 group-hover:text-primary mt-0.5 shrink-0 transition-colors" />
                  <span className="text-sm text-foreground/80 group-hover:text-foreground">{q}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary ml-auto shrink-0 mt-0.5 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Conversation */
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                {msg.role === 'user' ? (
                  <div className="animate-slide-up max-w-sm">
                    <div className="bg-primary text-primary-foreground px-4 py-3 rounded-xl rounded-tr-sm text-sm leading-relaxed shadow-sm">
                      {msg.content}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-start gap-2.5 max-w-full">
                    <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Scale className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <AssistantMessage message={msg} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-sm">
                  <Scale className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-xl rounded-tl-sm shadow-sm">
                  <TypingIndicator />
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 text-destructive text-sm px-4 py-3 rounded-lg animate-fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card/95 backdrop-blur-sm p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end gap-2 bg-background border border-border rounded-xl p-2 shadow-sm focus-within:border-primary/50 focus-within:shadow-md transition-all duration-200">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your legal situation or ask a question… (Enter to send)"
              rows={1}
              className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none focus:outline-none focus:ring-0 placeholder:text-muted-foreground max-h-32 min-h-[36px]"
              style={{ height: 'auto' }}
              onInput={(e) => {
                const t = e.target as HTMLTextAreaElement
                t.style.height = 'auto'
                t.style.height = Math.min(t.scrollHeight, 128) + 'px'
              }}
              disabled={isLoading}
            />
            <button
              onClick={() => handleSubmit(input)}
              disabled={!input.trim() || isLoading}
              className={cn(
                'flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 shrink-0',
                input.trim() && !isLoading
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:scale-105 active:scale-95'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              )}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            LegalEase AI provides legal awareness only. Always consult a qualified lawyer for your specific situation.
          </p>
        </div>
      </div>
    </div>
  )
}
