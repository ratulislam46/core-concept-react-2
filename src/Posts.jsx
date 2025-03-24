import { use } from "react"
import Post from "./post";

export default function Posts ({postPromise}){

    const posts = use(postPromise);
    
    return (
        <div className="box">
            <h2>All Post here : {posts.length} </h2>

            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}