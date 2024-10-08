import '../styles/Login.css';

export default function Check_email() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Função que será chamada ao clicar no botão
    const check_email = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        setError(''); // Limpa o erro anterior

        // Chama a função para checar se o email existe
        const emailExists = await checkEmail(email);
        
        if (emailExists) {
            navigate('/login');
        } else {
            navigate('/register');
        }
    };

    return (
        <div className="container">
            <h1 className="title">$ MyBufunfa</h1>
            <input className="inp-email" onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu email..."></input>
            <button onClick={check_email}>Entrar</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}