import { createClient } from "@supabase/supabase-js";
const URL = "https://vzcyajehhcayvgwibtpo.supabase.co";
const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6Y3lhamVoaGNheXZnd2lidHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMDQyMjUsImV4cCI6MjAxMzc4MDIyNX0.FhSotn0iQ04FoiySf5LHAEbAMIvUnzVF94761NByQUo";

export const supabase = createClient(URL, API_KEY);
