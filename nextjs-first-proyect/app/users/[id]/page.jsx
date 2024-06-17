async function getUserFetch(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
}

async function UserPage({ params }) {
    const { id } = params;
    const user = await getUserFetch(id);

    return (
        <div className="container mx-auto p-4 text-center gap-5 h-[calc(100vh-7rem)] flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">User Page from {user.first_name} {user.last_name}:</h1>
            <div className="bg-slate-400/50 p-4 rounded-md flex justify-between gap-5">
                <div className="flex flex-col items-center justify-center">
                    <h5 className="text-xl font-bold">
                        {user.id}. {user.first_name} {user.last_name}
                    </h5>
                    <p className="text-sm text-slate-200">{user.email}</p>
                </div>
                <img src={user.avatar} alt={user.first_name} title={"Avatar de " + user.first_name} className="rounded-full w-20 h-20" width={80} height={80} />
            </div>
        </div>
    )
}

export default UserPage