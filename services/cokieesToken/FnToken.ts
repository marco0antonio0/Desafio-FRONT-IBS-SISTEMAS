import { parseCookies, setCookie, destroyCookie } from 'nookies';

export class JwtTokenStorage {
    private tokenKey: string;

    constructor(tokenKey: string) {
        this.tokenKey = tokenKey;
    }

    // Define o token JWT em cookies
    setToken(token: string): void {
        setCookie(null, this.tokenKey, token, {
            maxAge: 30 * 24 * 60 * 60, // 30 dias de expiração do cookie
            path: '/', // O cookie estará disponível em todo o site
        });
    }

    // Obtém o token JWT dos cookies
    getToken(): string | null {
        const cookies = parseCookies();
        return cookies[this.tokenKey] || null;
    }

    // Limpa o token JWT dos cookies
    cleanToken(): void {
        destroyCookie(null, this.tokenKey);
    }
}

// // Exemplo de uso
// const tokenStorage = new JwtTokenStorage('jwt_token');

// // Definir um token
// tokenStorage.setToken('seu_token_jwt_aqui');

// // Obter o token
// const token = tokenStorage.getToken();
// console.log('Token JWT:', token);

// // Limpar o token
// tokenStorage.cleanToken();
// console.log('Token JWT após limpeza:', tokenStorage.getToken());
