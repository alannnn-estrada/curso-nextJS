import PostCards from "@/components/PostCard";

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 3000);
    // });
    return data;
}

export default async function PostsPage() {
    // useEffect
    // useState
    // render in client

    const post = await loadPost();

    return (
        <div>
            <h1>Post</h1>
            <ul style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))" }}>
                {post.map((post) => (
                    <PostCards key={post.id} post={post} />
                ))}
            </ul>
        </div>
    );
}