import { use } from "react";

export default function Users ({fetchUsers}){
    const counterStyle = {
        border: '1px solid yellow',
        marginBottom: '10px',
        paddingBottom: "20px",
        borderRadius: '15px'
    };

    const users = use(fetchUsers);

    return (
        <div style={counterStyle}>
            <h1> Users : {users.length}</h1>
        </div>
    )
}