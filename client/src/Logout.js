import {useNavigate} from 'react-router-dom'

function Logout({setListener}) {

    const navigate = useNavigate()

    function handleLogout(e) {
        e.preventDefault();

        fetch('logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(null), 
        })
        .then(resp => resp)
        .then(() => {
            setListener(null)
            navigate('/login')
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