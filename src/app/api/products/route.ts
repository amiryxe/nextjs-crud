import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

// Fetch Products
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        const products = await prisma.product.findMany({
            where: {
                price: 30
            }
        })
    } catch (error) {

    }
}