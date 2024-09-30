import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Logout from "@/components/Logout/page";

export default async function Logado() {
  const session = await getServerSession()
  if(!session){
    redirect("/")
  }
  
  return (
    <main className="h-screen flex justify-center	items-center">
      <div>
        
      </div>
      {session.user?.image && (
        <div>
        <Image width={100} height={100} src={session.user?.image} alt="avatar github"/>
        </div>
      )}
      <p>{session.user?.email}</p>
      <Logout/>
    </main>
  );
}
