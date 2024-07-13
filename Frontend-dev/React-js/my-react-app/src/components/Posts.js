import { useEffect, useState } from "react";

// API calls with useEffect Hook
function Posts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data)
        }

        fetchPosts()
    }, [])

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Posts;