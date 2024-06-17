"use client";

import { useParams } from "next/navigation";

function UserPage() {
    const params = useParams();
    
    return (
        <div>
            <h1>User</h1>
            <p>This is the user page</p>
            <button style={{ padding: "1rem", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }} onClick={() => {
                console.log(params);
            }}>Click</button>
        </div>
    )
}

export default UserPage;