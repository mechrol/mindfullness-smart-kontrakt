import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_SUPABASE_URL || 'https://oflomemrwwzukwwayfky.supabase.co';
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbG9tZW1yd3d6dWt3d2F5Zmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NjMzNTIsImV4cCI6MjA5OTMzOTM1Mn0.F_2alTcu8cUGL1qJePhEic5jq2hTRfQauOrgsjD6Aoo';

export const supabase = createClient(URL, ANON, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: { headers: { 'x-application-name': 'smart-kontrakt-wellness' } },
});

export const SUPABASE_URL = URL;
export const SUPABASE_ANON_KEY = ANON;
