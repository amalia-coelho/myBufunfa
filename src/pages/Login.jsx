import '../styles/Login.css';

export default function Login() {
    return (
        <div className="container">
            <h1 className="title">$ MyBufunfa</h1>
            <input className="inp-email" placeholder="Insira seu email..."></input>
            <button>Entrar</button>
        </div>
    );
}