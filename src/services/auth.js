import axios from 'axios';

const API_URL = 'http://local.mybufunfa:8080/';

// Função para verificar o email
export const checkEmail = async (email) => {
    const response = await axios.post(`${API_URL}/check_email`, { email });
    return response.data.exists;  // Retorna se o email existe ou não
};

// Função para verificar a senha
export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.success) {
        // Armazena o token no localStorage
        localStorage.setItem('authToken', response.data.token);
        return true;
    }
    return false;
};

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
};

// Função para fazer logout
export const logout = () => {
    localStorage.removeItem('authToken');
};