"use client";
import { CardLogin } from "@/components/CardLogin";
import { LayoutPage } from "@/components/PageElements/LayoutPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loading } from "@/components/Loading";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <LayoutPage>
      <CardLogin />
    </LayoutPage>
  );
}
