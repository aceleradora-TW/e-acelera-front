"use client"

import { signOut } from "next-auth/react";

export default async function Logout() {

  return ( <button className="bg-gray-300 h-10 w-40" onClick={() => signOut()}>Sair</button>
);
}
