import { API_BASE_URL } from '../../services/api'

const Login = () => {
    const handleLogin = () => {
        window.location.href = `${API_BASE_URL}/auth/login`
    }

    return <button onClick={() => handleLogin}>Login</button>
}

export default Login;