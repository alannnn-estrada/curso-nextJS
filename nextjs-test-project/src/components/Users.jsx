"use client";
import { useEffect } from "react";

function Users() {
    useEffect(() => {
        // document.title = "Users | Next.js";
        alert('Loader!');
    }, []);

    return (
        <div>
            <h1>Users</h1>
        </div>
    );
}

export default Users;