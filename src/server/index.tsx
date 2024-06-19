

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Baaaaaaaaah')
        }, 2000)
    })
}

export default async function ListServerSide() {
    const fetchData = async () => {
        try {
            const apiKey = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
                method: "GET",
                headers: {
                    "x-api-key": "jOELi8SJTNSw0qVy",
                    "Content-Type": "application/json"
                }
            })
            return apiKey.json()
        } catch(error) {
            console.log(error)
        }
    } 
    const nivelamento = await fetchData()
    console.log(nivelamento)
    return (
        <>

        </>
    )
}