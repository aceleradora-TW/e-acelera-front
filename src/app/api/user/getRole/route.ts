import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(req: NextRequest) {
    const header = headers()
    try {

        const baseUrl = process.env.BACKEND_BASE_URL

        const response = await fetch(`${baseUrl}/user/role`, {
            headers: {
                email: header.get('email') || '',
            },
        })
        const userData = await response.json()


        return NextResponse.json({ role: userData.role }, { status: 200 })


    } catch (error) {

        console.error("Error fetching user role:", error)
        return NextResponse.json({ error }, { status: 500 })

    }
}
