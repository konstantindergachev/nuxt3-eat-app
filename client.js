import { createClient } from '@supabase/supabase-js';

const { NUXT_SUPABASE_URL, NUXT_SUPABASE_KEY } = process.env;

export const supabase = createClient(NUXT_SUPABASE_URL, NUXT_SUPABASE_KEY);
