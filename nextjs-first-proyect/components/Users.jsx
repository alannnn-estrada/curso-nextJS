// "use client";
import Image from "next/image"
import Link from "next/link";

export function Users({ users }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {users.map(user => (
                <Link
                    key={user.id}
                    className="bg-slate-400/50 mb-2 p-4 rounded-md flex justify-between gap-5 hover:bg-slate-500/100 cursor-pointer transition-colors duration-300 ease-in-out"
                    href={`/users/${user.id}`}
                    passHref
                >
                    <div className="flex flex-col items-center justify-center">
                        <h5 className="text-xl font-bold">
                            {user.id}. {user.first_name} {user.last_name}
                        </h5>
                        <p className="text-sm text-slate-200">{user.email}</p>
                    </div>
                    <Image src={user.avatar} width={80} height={80} alt={user.first_name} title={"Avatar de " + user.first_name} loading="lazy" className="rounded-full w-20 h-20" /> 
                </Link>
            ))}
        </ul>
    )
}