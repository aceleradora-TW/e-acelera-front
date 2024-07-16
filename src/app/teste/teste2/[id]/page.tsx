'use client'
import * as React from "react";

export default function Page ({ params }: { params: { id: any } }){
  const [ idExsite, setIdExiste ] = React.useState(false)

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            
            const dataId = await fetch("/api/stackbyApi/topics", {
              method: "GET"
            }) 
            const dataParci = await dataId.json()
            const findName = dataParci.data.find((row: any) => row.id == params.id).field.Title
            console.log(findName)
            setIdExiste(findName ? true : false)
             
          } catch (error) {
            console.log(error)
          }
        }
        fetchData()
      }, [])

      console.log(idExsite)
    if(idExsite){
      return(
        <>
        
        </>
    )
  }
  else{
    return false
  }
}