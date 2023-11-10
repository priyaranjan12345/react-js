import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()

        // set data to global user
        setUser({ username, password })
    }

    return (
        <>
            <div>Login</div>
            <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            {" "}
            <input type="text" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login