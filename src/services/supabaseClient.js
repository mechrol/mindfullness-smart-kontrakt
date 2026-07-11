import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://oflomemrwwzukwwayfky.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbG9tZW1yd3d6dWt3d2F5Zmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NjMzNTIsImV4cCI6MjA5OTMzOTM1Mn0.F_2alTcu8cUGL1qJePhEic5jq2hTRfQauOrgsjD6Aoo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function saveReportToSupabase(report, userId = 'anonymous') {
  if (!report) return { error: 'no report' };
  const { data, error } = await supabase.from('mswrp_reports').upsert({
    user_id: userId,
    report_id: report.meta.report_id,
    factor_id: report.meta.factor_id,
    factor_name: report.meta.factor_name,
    payload: report,
  }, { onConflict: 'report_id' });
  return { data, error };
}

export async function saveChoiceToSupabase(choice, userId = 'anonymous') {
  const { data, error } = await supabase.from('mswrp_choices').insert({
    user_id: userId,
    report_id: choice.report_id,
    approach_id: choice.approach_id,
    approach_label: choice.approach_label,
    factor_name: choice.factor_name,
  });
  return { data, error };
}

export async function saveContextToSupabase(contextText, userId = 'anonymous') {
  const { data, error } = await supabase.from('user_contexts').upsert({
    user_id: userId,
    context: contextText,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'user_id' });
  return { data, error };
}

export async function loadContextFromSupabase(userId = 'anonymous') {
  const { data, error } = await supabase.from('user_contexts').select('context').eq('user_id', userId).maybeSingle();
  return { context: data?.context || '', error };
}
