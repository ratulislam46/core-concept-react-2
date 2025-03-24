
export default function Post ({post}){
    const {id, title, body} = post;
    return (
        <div className="box">
            <p>This is title : {title}</p>
            <p>This is body : {body}</p>
        </div>
    )
}