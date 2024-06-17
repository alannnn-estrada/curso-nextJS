import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import PostsPage from '../page';

async function GetPostData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

export default async function PostPage({ params }) {
    const { id } = params;
    if (!id || isNaN(id)) {
        redirect('/post');
    }
    const post = await GetPostData(id);

    return (
        <>
            <div>
                <h1>Post #{post.id}</h1>
                <h2>{post.title}</h2>
                <p>"{post.body}"</p>
            </div>
            <br />
            <div>
                <h2>Otros Post</h2>
                <Suspense fallback={<div>
                    <p>Cargando Publicaciones...</p>
                </div>} >
                    <PostsPage />
                </Suspense>
            </div>
        </>
    );
}