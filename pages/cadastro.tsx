import { useState } from "react";
import TextField from "@/components/textField";
import ButtonTypeCad from "@/components/button";
import { fetcha } from "@/services/fetch";
import { JwtTokenStorage } from "@/services/cokieesToken/FnToken";
import { useRouter } from "next/router";

export default function Cadastro() {
  const [userToken, setUserToken] = useState('');
  const [useremail, setUseremail] = useState('');
  const [username, setUsername] = useState('');
  const [userdate, setUserdate] = useState<string>();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const tokenStorage = new JwtTokenStorage('jwt_token');
  const [Load, setLoad] = useState(false);
  const r = useRouter()

  // validate date
  function isValideDate(argss: string) {
    const date = new Date(argss)
    return !isNaN(date.getTime())
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoad(true)
    event.preventDefault(); // Prevenir o comportamento padrão de recarregamento da página

    // Verificar se os campos estão vazios
    if (!username || !password || !useremail || !userdate) {
      setError('Por favor, preencha todos os campos.');
      setLoad(false)
      return;
    }
    setError("")

    if (error.length == 0) {
      // Lógica para lidar com a submissão do formulário
      // Você pode enviar os dados do formulário para o servidor aqui, se necessário
      // escreva aqui
      // ......
      // dados enviado
      const payload = {
        email: useremail, senha: password, nome: username, data_nascimento: new Date(userdate)
      }
      fetcha.Cadastro(payload).then((e) => {
        // verifica se ocorreu algum erro
        if (e) {
          // caso esteja tudo ok
          const token = tokenStorage.getToken()
          setUserToken(token ? token : "")
          setLoad(false)
          r.push('usuario')
        } else {
          // caso não
          // . . . 
          setLoad(false)
          setError('Ja existe uma conta este email')
          return;
        }
      }).catch((e) => {
        setLoad(false)
        setError('Ja existe uma conta este email')
        return;
      })
    } else {
      setLoad(false)
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-slate-50 ">
      <div className="flex flex-col m-auto w-[800px] min-h-[500px] bg-white rounded-sm shadow-md lg:w-[90%] smx:w-[100%] smx:mt-0 ">
        <div className="m-auto mb-0 mt-10 border-b-2 w-[70%] flex flex-col">
          <img className="w-[100px] h-[100px] m-auto mb-3" src="/images/logo.png" alt="" />
          <h1 className="m-auto mb-10 text-2xl text-center">Sistema de gerenciamento <br />Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit} className="m-auto mt-0 w-[80%] h-auto py-5 flex flex-col smx:w-[85%]">
          {/* ============================================================== */}
          {/* Entrada do nome */}
          <TextField text={"Nome"} onchange={(e: string) => {
            setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do data de nascimento */}
          <TextField text={"Data de nascimento"} onchange={(e: string) => {
            setUserdate(e);
          }}
            type="date" />
          {/* ============================================================== */}
          {/* Entrada do email */}
          <TextField text={"Email"} onchange={(e: string) => {
            setUseremail(e);
            setError('');
          }}
            type="email" />
          {/* ============================================================== */}
          {/* Entrada da senha */}
          <TextField text={"Senha"} onchange={(e: string) => {
            setPassword(e);
            setError('');
          }}
            type="password" />

          {/* ============================================================== */}
          {/* Exibir erro, se houver */}
          <div className="w-[65%] m-auto mt-5 md:w-[80%] md:mt-2">
            {error && <p className=" text-red-500 text-sm ">{error}</p>}
          </div>
          {/* ============================================================== */}
          {/* Botão de login */}
          {!Load ? <ButtonTypeCad text="Cadastrar" /> :
            <div className="flex ">
              <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-2 border-[#31837D] m-auto my-5"></div>
            </div>}
        </form>
      </div>
    </main>
  );
}


