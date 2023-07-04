
import { useContext } from "react";
import ListenerContext from "./ListenerContext";

function Logout({setListener}) {

    const listener = useContext(ListenerContext)
    console.log(listener)

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
        <button onClick={handleLogout}>Logout</button>
    )


}

export default Logout;