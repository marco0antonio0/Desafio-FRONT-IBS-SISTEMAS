# Sistema de gerenciamento de pessoas

![img](/imageReadme/loginPage.png)
Este é o repositório do projeto frontend desenvolvido em Next.js para consumir a API REST do Desafio API - Sistemas

### Diagrama

![img](/imageReadme/Captura%20de%20tela%20de%202024-04-15%2014-40-58.png)

### Detalhes do projeto api

projeto feito em next js onde consumi a api elaborada pelo autor

- [Acesse o repositorio da api](https://github.com/marco0antonio0/Desafio-API-SISTEMAS)

### Detalhamento projeto front

A interface front elaborada em next js onde é consumido as rotas com sua devida segurança.

- rotas
    -

  - "/" : login page
  - "/cadastro" : cadastro de usuario page
  - "/usuario/" : area do usuario page
  - "/usuario/cadastro" : cadastro de usuario page acesso rapido
  - "/usuario/ficha" : visualizar a ficha individual do usuario page

### Guia de acesso

1.accesse em <https://gerenciamento-pessoas.devs-app.tech/>
2.faça login com as credenciais de superUsuario
campo email: <marco@teste.com>
campo senha: 123456

3.explore as funcionalidades
4.projeto em adamento sendo esta versão um prototipo beta

### Segurança dos dados

No projeto Desafio-FRONT-SISTEMAS, foram implementados vários recursos de segurança para garantir a integridade e proteção dos dados dos usuários. Alguns desses recursos incluem:

**Autenticação com Token JWT**: A autenticação é realizada utilizando tokens JWT (JSON Web Tokens), fornecendo um método seguro e eficiente para autenticar usuários. Isso permite que o usuário seja autenticado de forma segura após o login, e o token JWT é armazenado no cliente para autorizar futuras requisições.

**Controle de Acesso de Usuários**: A API implementa controle de acesso baseado em papéis de usuário, permitindo diferentes níveis de permissões para diferentes tipos de usuários. Por exemplo, certas operações podem ser restritas apenas a superusuários, enquanto outras podem ser acessíveis a todos os usuários autenticados.

**Requisições Seguras**: Todas as requisições feitas à API são protegidas pelo protocolo HTTPS, garantindo que os dados sejam transmitidos de forma segura entre o cliente e o servidor. Além disso, as requisições que exigem autenticação devem incluir o token JWT no cabeçalho Authorization, seguindo as melhores práticas de segurança.

**Documentação Extensa via Swagger**: A API é documentada de forma extensa e detalhada usando o Swagger, uma ferramenta de documentação de API amplamente utilizada. Isso permite que os desenvolvedores compreendam facilmente como interagir com a API, quais endpoints estão disponíveis e quais parâmetros são necessários para cada requisição.

**Validações de Entrada**: A API implementa validações de entrada em todas as requisições para garantir que os dados fornecidos pelos usuários sejam válidos e seguros. Isso ajuda a prevenir ataques de injeção de SQL, XSS (Cross-Site Scripting) e outros tipos de ataques comuns.

### Servidores Hospedados

- O servidor backend da API está hospedado no Heroku.
- O servidor frontend está hospedado no Netlify.
- O servidor DBaaS está hospedado na Hostinger.

Repositório Utilizado:

O repositório utilizado para o projeto foi hospedado no GitHub.
