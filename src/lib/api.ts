/**
 * API service layer — communicates with Blink Edge Functions
 * Implements the REST API interface defined in the architecture
 */

const LEGAL_AI_URL = 'https://0b2dghtz--legal-ai.functions.blink.new'

export interface LegalQueryResponse {
  question: string
  category: string
  answer: string
  disclaimer: string
  sources: {
    title: string
    law_reference: string
    authority: string
    documents_required: string[]
    procedure_steps: string[]
  }[]
  retrieved_count: number
}

/**
 * POST /ask_question
 * Sends a legal question to the AI pipeline
 */
export async function askLegalQuestion(question: string): Promise<LegalQueryResponse> {
  const response = await fetch(LEGAL_AI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message || `Request failed with status ${response.status}`)
  }

  return response.json()
}
