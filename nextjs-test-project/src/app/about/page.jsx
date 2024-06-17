'use client';
import { useRouter } from "next/navigation";

// export const metadata = {
//     title: 'Acerca de Nosotros',
// }

function AboutPage() {
    const router = useRouter();

    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quia rem blanditiis fuga animi nam iste molestiae officiis tenetur exercitationem, iure porro accusantium magni. Quis totam enim earum quod atque provident temporibus unde commodi nisi officia officiis perspiciatis ab quos aliquam beatae numquam perferendis quaerat consequatur animi dolore, accusantium necessitatibus repudiandae sint dolores. Dolorum dignissimos rerum earum optio quod possimus esse eum quisquam nam repellendus? Laudantium quod minus ab delectus eaque culpa sequi nulla temporibus tempora illum possimus tenetur placeat dolore blanditiis, quasi nemo illo rerum aut non error consequatur libero aperiam reiciendis. Similique repellat autem ad molestias, consequuntur repudiandae.</p>
            <button
                style={{ padding: "1rem", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
                onClick={() => {
                    // query to the server
                    alert("Executing a query to the server")
                    router.push("/post");
                }}
            >
                Click
            </button>
        </div>
    );
}

export default AboutPage;