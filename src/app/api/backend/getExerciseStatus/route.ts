import { headers } from 'next/headers';

export async function GET(req: Request) {
    const header = headers()
    // console.log(`${params.getExerciseStatus}`)
    console.log(header.get(`topicId`))
    console.log(header.get(`item`))


    // if (!topicId || !itemId) {
    //   return res.status(400).json({ error: 'topicId and itemId are required' });
    // }

    // try {
    //   const baseUrl = process.env.BACKEND_BASE_URL;
    //   const response = await fetch(`${baseUrl}/topic/${topicId}/item/${itemId}`, {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': `Bearer ${accessToken}`,
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   if (!response.ok) {
    //     throw new Error(`Error fetching status: ${response.status} - ${response.statusText}`);
    //   }

    //   const data = await response.json();
    //   const statusData = data[0].itemStatus;

    //   return res.status(200).json({ status: statusData });

    // } catch (error) {
    //   console.error('Error fetching status:', error);
    //   return res.status(500).json({ error: 'Internal server error' });

    // }
}
