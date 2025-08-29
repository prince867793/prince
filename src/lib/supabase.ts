import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormData = {
  name: string
  email: string
  message: string
  created_at?: string
}

export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  features: string[]
  github?: string
  demo?: string
  image?: string
  category: string
  created_at?: string
}