import { JwtTokenStorage } from "./cokieesToken/FnToken";


export const fetcha = {
    Login: (payload: { email: string, senha: string }) => {
        const data = JSON.stringify({ email: payload.email, senha: payload.senha })
        return new Promise((resolve, reject) => {
            fetch('https://api-desafio-d87c8746780f.herokuapp.com/auth/login', {

                method: 'POST', // Definir o método como "POST"
                headers: {
                    'Content-Type': 'application/json' // Especificar o tipo de conteúdo como JSON
                },
                body: data

            }).then((e) => e.json()).then((e) => {
                // caso os valores entregues sejam validos
                try {
                    // valido
                    if (e['token']) {
                        // digite sua ação aqui
                        const tokenStorage = new JwtTokenStorage('jwt_token');

                        // Definir um token
                        tokenStorage.setToken(e['token']);
                        resolve(true)
                    } else {
                        // não valido

                        reject(false)
                    }

                } catch (error) {
                    // não valido
                    reject(false)
                }
            }).catch((e) => {
                // caso os valores NÂO entregues sejam invalidos
                reject(false)
            })

        })
    },

    Cadastro: (payload: { nome: string, email: string, senha: string, data_nascimento: Date }) => {
        var dataCompleta = new Date(payload.data_nascimento);
        var addMes = ""
        var addDia = ""
        var dia = dataCompleta.getDate();
        var mes = dataCompleta.getMonth() + 1; // Adiciona 1 porque os meses são indexados a partir de 0
        var ano = dataCompleta.getFullYear();
        let dataFormatada = ``;
        // caso o mes seja inferior a 10, adicione string '0' no data formatada
        if (mes < 10) {
            addMes = '0';
        }
        // caso o dia seja inferior a 10, adicione string '0' no data formatada
        if (dia < 10) {
            addDia = '0'
        }
        dataFormatada = `${ano}-${addMes}${mes}-${addDia}${dia}`;
        const data = JSON.stringify({ nome: payload.nome, email: payload.email, senha: payload.senha, data_nascimento: dataFormatada })
        console.log({ nome: payload.nome, email: payload.email, senha: payload.senha, data_nascimento: dataFormatada })
        return new Promise((resolve, reject) => {
            fetch('https://api-desafio-d87c8746780f.herokuapp.com/auth/register', {

                method: 'POST', // Definir o método como "POST"
                headers: {
                    'Content-Type': 'application/json' // Especificar o tipo de conteúdo como JSON
                },
                body: data

            }).then((e) => e.json()).then((e) => {
                // caso os valores entregues sejam validos
                try {
                    // valido
                    if (e['token']) {
                        // digite sua ação aqui
                        const tokenStorage = new JwtTokenStorage('jwt_token');

                        // Definir um token
                        tokenStorage.setToken(e['token']);
                        resolve(true)
                    } else {
                        // não valido

                        reject(false)
                    }

                } catch (error) {
                    // não valido
                    reject(false)
                }
            }).catch((e) => {
                // caso os valores NÂO entregues sejam invalidos
                reject(false)
            })

        })
    },
    CadastroAfter: (payload: { nome: string, email: string, senha: string, data_nascimento: Date }) => {
        var dataCompleta = new Date(payload.data_nascimento);
        var addMes = ""
        var addDia = ""
        var dia = dataCompleta.getDate();
        var mes = dataCompleta.getMonth() + 1; // Adiciona 1 porque os meses são indexados a partir de 0
        var ano = dataCompleta.getFullYear();
        let dataFormatada = ``;
        // caso o mes seja inferior a 10, adicione string '0' no data formatada
        if (mes < 10) {
            addMes = '0';
        }
        // caso o dia seja inferior a 10, adicione string '0' no data formatada
        if (dia < 10) {
            addDia = '0'
        }
        dataFormatada = `${ano}-${addMes}${mes}-${addDia}${dia}`;
        const data = JSON.stringify({ nome: payload.nome, email: payload.email, senha: payload.senha, data_nascimento: dataFormatada })
        console.log({ nome: payload.nome, email: payload.email, senha: payload.senha, data_nascimento: dataFormatada })
        return new Promise((resolve, reject) => {
            fetch('https://api-desafio-d87c8746780f.herokuapp.com/auth/register', {

                method: 'POST', // Definir o método como "POST"
                headers: {
                    'Content-Type': 'application/json' // Especificar o tipo de conteúdo como JSON
                },
                body: data

            }).then((e) => e.json()).then((e) => {
                // caso os valores entregues sejam validos
                try {
                    // valido
                    if (e['token']) {
                        // digite sua ação aqui
                        // const tokenStorage = new JwtTokenStorage('jwt_token');

                        // Definir um token
                        // tokenStorage.setToken(e['token']);
                        resolve(true)
                    } else {
                        // não valido

                        reject(false)
                    }

                } catch (error) {
                    // não valido
                    reject(false)
                }
            }).catch((e) => {
                // caso os valores NÂO entregues sejam invalidos
                reject(false)
            })

        })
    },
    AllUsers: () => {
        const tokenStorage = new JwtTokenStorage('jwt_token');
        const Token = tokenStorage.getToken()
        return new Promise((resolve, reject) => {
            fetch('https://api-desafio-d87c8746780f.herokuapp.com/auth/all', {

                method: 'GET', // Definir o método como "POST"
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`
                },

            }).then((e) => e.json()).then((e) => {
                // caso os valores entregues sejam validos
                try {
                    if (e['content']) {
                        resolve(e['content'])
                    } else {
                        reject(false)
                    }

                } catch (error) {
                    console.log(error)
                    // não valido
                    reject(false)
                }
            }).catch((e) => {
                // caso os valores NÂO entregues sejam invalidos
                reject(false)
            })

        })
    },
    OnlyUsers: (query: string) => {
        const tokenStorage = new JwtTokenStorage('jwt_token');
        const Token = tokenStorage.getToken()
        return new Promise((resolve, reject) => {
            fetch('https://api-desafio-d87c8746780f.herokuapp.com/user/search-email?email=' + query, {

                method: 'GET', // Definir o método como "POST"
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`
                },

            }).then((e) => e.json()).then((e) => {
                // caso os valores entregues sejam validos
                try {
                    if (e['content']) {
                        resolve(e['content'])
                    } else {
                        reject(false)
                    }

                } catch (error) {
                    console.log(error)
                    // não valido
                    reject(false)
                }
            }).catch((e) => {
                // caso os valores NÂO entregues sejam invalidos
                reject(false)
            })

        })
    }


}