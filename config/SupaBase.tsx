import { createClient } from '@supabase/supabase-js'

const url = process.env.EXPO_PUBLIC_SUPABASE_URL
const key = process.env.EXPO_PUBLIC_SUPABASE_KEY

export const Supabase = createClient(
    'https://cglrbnomxyuvdbjnejax.supabase.co',
    'sb_publishable_W7q5yTqumHP8MuB0YvHuOw_DLt0fVLD'
)
