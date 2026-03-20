/**
 * Legal Learning Module Page
 * Provides structured legal education with lessons and quizzes
 */

import { useState } from 'react'
import { BookOpen, ChevronRight, Clock, CheckCircle, XCircle, ArrowLeft, Award } from 'lucide-react'
import { cn } from '@/lib/utils'
import { learningModules, type LearningModule, type LearningLesson } from '@/data/learningModules'

// ── Quiz Component ─────────────────────────────────────────────────────────
function QuizSection({ quiz }: { quiz: NonNullable<LearningLesson['quiz']> }) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const question = quiz[0]
  if (!question) return null

  return (
    <div className="mt-6 border-2 border-primary/20 rounded-xl p-5 bg-primary/5">
      <div className="flex items-center gap-2 mb-3">
        <Award className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold text-primary uppercase tracking-wider">Quick Check</span>
      </div>
      <p className="font-semibold text-sm text-foreground mb-3">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((opt, i) => (
          <button
            key={i}
            disabled={submitted}
            onClick={() => setSelected(i)}
            className={cn(
              'w-full text-left text-sm px-3.5 py-2.5 rounded-lg border transition-all duration-200',
              !submitted && selected === i ? 'border-primary/60 bg-primary/10' : '',
              !submitted && selected !== i ? 'border-border bg-background hover:border-primary/30 hover:bg-primary/5' : '',
              submitted && i === question.answer ? 'border-green-500 bg-green-50 text-green-800 font-semibold' : '',
              submitted && selected === i && i !== question.answer ? 'border-red-400 bg-red-50 text-red-700' : '',
              submitted && i !== question.answer && i !== selected ? 'border-border bg-background text-muted-foreground' : ''
            )}
          >
            <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span> {opt}
          </button>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={selected === null}
          className="mt-3 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg disabled:opacity-40 hover:bg-primary/90 transition-colors"
        >
          Submit Answer
        </button>
      ) : (
        <div className={cn('mt-3 flex items-center gap-2 text-sm font-medium', selected === question.answer ? 'text-green-700' : 'text-red-600')}>
          {selected === question.answer ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
          {selected === question.answer ? 'Correct! Well done.' : `Incorrect. The right answer is: ${question.options[question.answer]}`}
        </div>
      )}
    </div>
  )
}

// ── Lesson View ───────────────────────────────────────────────────────────
function LessonView({ lesson, onBack }: { lesson: LearningLesson; onBack: () => void }) {
  const paragraphs = lesson.content.split('\n').filter((p) => p.trim())

  return (
    <div className="animate-slide-up">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to module
      </button>

      <h2 className="text-xl font-serif font-bold text-primary mb-4">{lesson.title}</h2>

      <div className="prose prose-sm max-w-none space-y-3">
        {paragraphs.map((para, i) => {
          if (para.startsWith('**') && para.endsWith('**') && para.replace(/\*\*/g, '').length > 0) {
            return <h3 key={i} className="font-bold text-foreground text-base mt-5 mb-2 first:mt-0">{para.replace(/\*\*/g, '')}</h3>
          }
          if (para.startsWith('**') && para.includes('**')) {
            // Inline bold
            const parts = para.split(/\*\*(.*?)\*\*/)
            return (
              <p key={i} className="text-sm text-foreground/90 leading-relaxed">
                {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part)}
              </p>
            )
          }
          if (para.match(/^\d+\.\s/)) {
            return (
              <div key={i} className="flex items-start gap-2.5 ml-2">
                <span className="font-bold text-primary shrink-0 text-sm">{para.match(/^(\d+)/)?.[1]}.</span>
                <p className="text-sm text-foreground/90 leading-relaxed">{para.replace(/^\d+\.\s/, '')}</p>
              </div>
            )
          }
          if (para.startsWith('-') || para.startsWith('•')) {
            return (
              <div key={i} className="flex items-start gap-2 ml-2">
                <span className="text-primary shrink-0 mt-1.5">•</span>
                <p className="text-sm text-foreground/90 leading-relaxed">{para.replace(/^[-•]\s/, '')}</p>
              </div>
            )
          }
          return <p key={i} className="text-sm text-foreground/90 leading-relaxed">{para}</p>
        })}
      </div>

      {/* Key Points */}
      {lesson.keyPoints.length > 0 && (
        <div className="mt-6 border border-accent/30 rounded-xl p-4 bg-accent/5">
          <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Key Takeaways</p>
          <ul className="space-y-2">
            {lesson.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.quiz && <QuizSection quiz={lesson.quiz} />}
    </div>
  )
}

// ── Module View ───────────────────────────────────────────────────────────
function ModuleView({ module, onBack }: { module: LearningModule; onBack: () => void }) {
  const [activeLesson, setActiveLesson] = useState<LearningLesson | null>(null)

  if (activeLesson) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <LessonView lesson={activeLesson} onBack={() => setActiveLesson(null)} />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-slide-up">
      <button onClick={onBack} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        All modules
      </button>

      <div className={cn('border rounded-xl p-5 mb-6', module.color)}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{module.icon}</span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{module.category}</span>
        </div>
        <h2 className="text-xl font-serif font-bold text-foreground mb-1">{module.title}</h2>
        <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          ~{module.estimatedMinutes} minutes · {module.lessons.length} lessons
        </div>
      </div>

      <div className="space-y-2">
        {module.lessons.map((lesson, i) => (
          <button
            key={lesson.id}
            onClick={() => setActiveLesson(lesson)}
            className="w-full flex items-center gap-3 p-4 border border-border rounded-xl bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group text-left"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span className="text-sm font-bold text-primary">{i + 1}</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{lesson.title}</p>
              {lesson.quiz && <p className="text-xs text-muted-foreground mt-0.5">Includes quiz</p>}
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────
export function LearnPage() {
  const [activeModule, setActiveModule] = useState<LearningModule | null>(null)

  if (activeModule) {
    return <ModuleView module={activeModule} onBack={() => setActiveModule(null)} />
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          <BookOpen className="w-4 h-4" />
          Legal Learning Centre
        </div>
        <h1 className="text-3xl font-serif font-bold text-primary mb-3">Build Your Legal Awareness</h1>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
          Structured learning modules covering key areas of Indian law — written in plain language for every citizen.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Modules', value: learningModules.length },
          { label: 'Total Lessons', value: learningModules.reduce((a, m) => a + m.lessons.length, 0) },
          { label: 'Legal Topics', value: 5 },
        ].map(({ label, value }) => (
          <div key={label} className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-serif font-bold text-primary">{value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Module Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {learningModules.map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveModule(module)}
            className="text-left border border-border rounded-xl bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 overflow-hidden group"
          >
            <div className={cn('p-4 border-b border-border/60', module.color)}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl">{module.icon}</span>
                <span className="text-xs font-medium text-muted-foreground bg-background/60 px-2 py-0.5 rounded-full">{module.category}</span>
              </div>
              <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">{module.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{module.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {module.estimatedMinutes} min · {module.lessons.length} lessons
                </div>
                <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  Start <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
