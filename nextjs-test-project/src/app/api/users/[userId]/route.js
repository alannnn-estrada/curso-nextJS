import { NextResponse } from "next/server";
export async function GET(req = request, { params }) {
    const { userId } = params;
    // const { searchParams } = new URL(req.url);
    // const name = searchParams.get("name");
    // const lastname = searchParams.get("lastname");
    // console.log(name, lastname);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await res.json();
    return NextResponse.json({ message: "GET method", data: data });
}