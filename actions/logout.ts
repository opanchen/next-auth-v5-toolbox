"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // some server stuff if necessary
  await signOut();
};

// ! not working as expected, so just use signOut() inside LogoutButton component.
