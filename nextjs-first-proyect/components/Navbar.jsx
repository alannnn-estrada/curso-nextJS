import Link from "next/link";

export function Navbar() {
    return (
        <nav className="bg-blue-400/50 p-4 flex justify-between items-center">
            <Link className="text-2xl font-bold text-slate-50" href="/">Next.js First Proyect</Link>
            <ul className="flex gap-5">
                <li>
                    <Link href="/" className="text-slate-50 hover:text-slate-100 hover:bg-blue-500/50 p-2 rounded-md">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-slate-50 hover:text-slate-100 hover:bg-blue-500/50 p-2 rounded-md">About</Link>
                </li>
            </ul>
        </nav>
    )
}