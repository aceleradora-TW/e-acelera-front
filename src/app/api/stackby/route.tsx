import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.STACKBY_SECRET_KEY || "";
    console.log("Fetching data from Stackby API");
    const response = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
        method: "GET",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
            cache: "no-store",
            
        }
    });
    const data = await response.json();
    console.log("Data fetched:", data);

    const res = NextResponse.json(data);
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }
  

// export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any } } }) {
//     if (req.method === 'GET') {
//     // Using a fetch here but could be any async operation to an external source
//     const apiKey = process.env.STACKBY_SECRET_KEY || ""
//             const response = await fetch("https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/Themes", {
//                 method: "GET",
//                 headers: {
//                     "x-api-key": apiKey,
//                     "Content-Type": "application/json"
//                 }
//             })
//     const jsonData = await response.json()
//     res.status(200).json({message: "Oi"})
//         }
// }