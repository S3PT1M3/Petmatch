// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ============================================================
   GET ALL PET SUBMISSIONS (ADMIN)
   ============================================================ */
export const getPetSubmissions = async () => {
  const { data, error } = await supabase
    .from("pet_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

/* ============================================================
   APPROVE PET SUBMISSION
   ============================================================ */
export const approvePetSubmission = async (submissionId: string) => {
  const { error } = await supabase
    .from("pet_submissions")
    .update({ status: "approved" })
    .eq("id", submissionId);

  if (error) throw error;
};

/* ============================================================
   REJECT PET SUBMISSION
   ============================================================ */
export const rejectPetSubmission = async (submissionId: string) => {
  const { error } = await supabase
    .from("pet_submissions")
    .update({ status: "rejected" })
    .eq("id", submissionId);

  if (error) throw error;
};
