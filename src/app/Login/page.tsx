'use client'
import { CardLogin } from "@/components/CardLogin";
import { LayoutPage } from "@/components/PageElements/LayoutPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {

  const { data: session } = useSession()
  const router = useRouter()

  if(session){
    return router.push("/")
  }

  return (
    <LayoutPage>
      <CardLogin/>
    </LayoutPage>
  );
}
