import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Not Found</h1>
            <p>Page not found</p>
            <Link href="/"> Go back to home</Link>
        </div>
    );
}