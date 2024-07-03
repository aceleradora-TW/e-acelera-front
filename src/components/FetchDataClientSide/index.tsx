"use client"
import { useEffect, useState } from "react";

export const FetchDataClientSide = () => {
  const [renderData, setRenderData] = useState<any>()

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const apiKey = process.env.STACKBY_SECRET_KEY || "jOELi8SJTNSw0qVy";
  const res = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
      method: "GET",
      headers: {
          "x-api-key": "jOELi8SJTNSw0qVy",
          "Content-Type": "application/json"
      }
  });
        const parseData = await res.json()
        setRenderData(parseData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])
  
  console.log(renderData)
    
    return(
        <>
            <div>
            {/* {data.map((element: any, index: any) => ( 
                <div key={index}>
                  <CardContent>
                    <Typography variant="h5" component="div" color="black">
                     {element.field.Title}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {element.field.Description}
                    </Typography>

                    <Typography variant="body2" color="black">
                      {element.field.createdAt}
                    </Typography>
                  </CardContent>
                </div>
              ))} */}
            </div>
        </>
    )
}
