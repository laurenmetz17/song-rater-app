
import { useContext } from "react";
import ListenerContext from "./ListenerContext";

function Logout({setListener}) {

    const listener = useContext(ListenerContext)

    function handleLogout(e) {
        e.preventDefault();

        fetch('logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(null), 
        })
        .then(resp => console.log(resp))
        .then(() => {
            setListener(null)
        })
    }

    return (
        <div>
            <h1>See you later!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )


}

export default Logout;