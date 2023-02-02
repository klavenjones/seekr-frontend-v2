import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (supabaseUrl == null || supabaseKey == null) {
  throw new Error('Missing supabaseUrl or supabaseKey');
}

export const supabaseClient = async (supabaseToken: string) => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${supabaseToken}` } },
  });

  return supabase;
};
