"use client";

import Link from "next/link";
import "./postCard.css";
import { redirect } from "next/navigation";

function PostCards({ post }) {
    const handleClick = () => {
        redirect(`/post/${post.id}`);
    };

    return (
        <li className="card">
            <Link href={`/post/${post.id}`} className="linkPost">
                {post.id}. {post.title}
            </Link>
            <p>
                "{post.body}"
            </p>
            <button
                onClick={handleClick}
                className="btn-post"
            >
                Ver más
            </button>
        </li>
    );
}

export default PostCards;