// npm install --save @supabase/supabase-js (connecting supabase to project)

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://klaxcklnibrbaycnmuve.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsYXhja2xuaWJyYmF5Y25tdXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NDgxNzAsImV4cCI6MjA0MTAyNDE3MH0.WoPs6AFLkM4kfKcqzSZY9p_YWTTag8PgITl_6riYTTc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
