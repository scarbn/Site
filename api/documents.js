// api/documents.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  const { data, error } = await supabase.from('documents').select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
