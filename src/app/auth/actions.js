"use server";

import { createClient } from "@/utils/supabase/server";

export async function loginAction(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signupAction(formData) {
  const supabase = await createClient();

  const email = formData.get("email");
  const password = formData.get("password");
  const displayName = formData.get("displayName");

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: displayName,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}