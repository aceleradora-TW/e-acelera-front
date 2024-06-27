// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Baaaaaaaaah')
//         }, 2000)
//     })
// }

export default async function ListServerSide() {
    const fetchData = async () => {
        try {
            const apiKey = process.env.STACKBY_SECRET_KEY || ""
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
    
    return renderData
}