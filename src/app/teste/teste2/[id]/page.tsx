'use client'
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";


export default function Page ({ params }: { params: { id: any } }){
  const [response, setResponse] = useState<any>()

      useEffect(()=> {
        const fetchData = async () => {
          const res = await fetch("/api/stackbyApi/topic")

          console.log(res)

          if(!res.ok){
            return undefined
          }

          return setResponse(await res.json())
        }
        fetchData()
      }, [params.id])

      console.log(response)
      
      if(!response){
        notFound()
      }

      return(
        <>
        
        </>
    )
  
}