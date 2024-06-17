// "use client";
import Users from "@/components/Users";
// import { useState } from "react";

export const metadata = {
    title: "Mi pagina especial Home",
    description: "Generated by Next.js",
    keywords: "next.js, react",
}

export default function HomePage() {
    // server component
    return (
        <div>
            <h1>Welcome to Next.js!</h1>
            <p>Generated by Next.js</p>
            {/* client component */}
            <Users />
            {/* <button onClick={() => alert('Hello!')}>Click me!</button> */}
        </div>
    )
}
