// function get post put delete
import { NextResponse } from "next/server"
export async function GET() {
    // query database
    // extract params
    // comunicate with other services
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return NextResponse.json({ message: "GET method", data: data })
}

export async function POST(req = request) {
    const { name, lastname } = await req.json();
    console.log(process.env.API_KEY)
    if (!name || !lastname) return NextResponse.json({ message: "POST method", error: "Name and lastname are required" })
    return NextResponse.json({ message: "POST method", data: { name, lastname } })
}

export function PUT() {
    return NextResponse.json({ message: "PUT method" })
}

export function DELETE() {
    return NextResponse.json({ message: "DELETE method" })
}