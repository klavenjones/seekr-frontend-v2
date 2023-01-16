import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://wknqjtjkmplaowlulqdu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrbnFqdGprbXBsYW93bHVscWR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1ODU1MTIsImV4cCI6MTk4OTE2MTUxMn0.aM1A2_bwOiNGQ2faE3DBIEV6rB4Im8vXnPGhRc9iyIM'
);
