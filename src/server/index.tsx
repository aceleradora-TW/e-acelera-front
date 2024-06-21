// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Baaaaaaaaah')
//         }, 2000)
//     })
// }
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";

export default async function ListServerSide() {
    const fetchData = async () => {
        try {
            const apiKey = process.env.STACKBY_SECRET_KEY || ""
            console.log(apiKey)
            const fetchData = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
                method: "GET",
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json"
                }
            })
            const data = fetchData.json()
            return data
        } catch(error) {
            console.log(error)
        }
    } 
    const renderData = await fetchData()
    console.log(renderData)
    return (
        <>
            <div>
            {renderData.data.map((element: any, index: any) => ( 
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
              ))}
            </div>
        </>
    )
    
}