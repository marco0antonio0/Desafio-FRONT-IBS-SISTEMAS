import ButtonTypeCad from "@/components/button";
import TextField, { TextFieldOptions } from "@/components/textField";
import { JwtTokenStorage } from "@/services/cokieesToken/FnToken";
import { fetcha } from "@/services/fetch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Ficha() {
  const [userToken, setUserToken] = useState('');
  const [useremail, setUseremail] = useState('');
  const [username, setUsername] = useState('');
  const [userdate, setUserdate] = useState<Date>();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [Load, setLoad] = useState(false);
  const r = useRouter()
  const { t } = r.query;
  const tokenStorage = new JwtTokenStorage('jwt_token');
  useEffect(() => {
    const t = tokenStorage.getToken()
    if (!t) {
      r.push('/')
    } else {
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // setLoad(true)
    event.preventDefault(); // Prevenir o comportamento padrão de recarregamento da página

    // Verificar se os campos estão vazios
    // if (!username || !password || !useremail || !userdate) {
    //   setLoad(false)
    //   setError('Por favor, preencha todos os campos.');
    //   return;
    // }

    // Se os campos estiverem preenchidos, limpar o erro e prosseguir com a lógica de login
    // setError('');

    // Lógica para lidar com a submissão do formulário
    // Você pode enviar os dados do formulário para o servidor aqui, se necessário
    // escreva aqui
    // ......
    // dados enviado
    // if (error.length == 0) {
    //   const payload = {
    //     email: useremail, senha: password, nome: username, data_nascimento: userdate
    //   }
    //   fetcha.CadastroAfter(payload).then((e) => {
    //     // verifica se ocorreu algum erro
    //     if (e) {
    //       // caso esteja tudo ok
    //       setLoad(false)
    //       r.push('/usuario')
    //     } else {
    //       // caso não
    //       // . . . 
    //       setLoad(false)
    //       setError('Ja existe uma conta este email')
    //       return;
    //     }
    //   }).catch((e) => {
    //     setLoad(false)
    //     setError('Ja existe uma conta este email')
    //     return;
    //   })
    // } else {
    //   setLoad(false)
    // }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-slate-50 ">
      <div className="flex flex-col m-auto w-[800px] min-h-[500px] bg-white rounded-sm shadow-md lg:w-[90%] smx:w-[100%] smx:mt-0 ">
        <div className="m-auto mb-0 mt-10 border-b-2 w-[70%] flex flex-col">
          <img className="w-[100px] h-[100px] m-auto mb-3" src="/images/logo.png" alt="" />
          <h1 className="m-auto mb-10 text-2xl text-center">Sistema de gerenciamento <br />Ficha de cadastro</h1>
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
          <TextField text={"Data de nascimento"} onchange={(e: Date) => {
            setUserdate(e);
            setError('');
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
          {/*     text  tittle */}
          <div className="m-auto mb-0 mt-10 border-b-2 w-[70%] flex flex-col">
            <h1 className="m-auto mb-10 text-2xl text-center">Endereçoe outros dados <br />Ficha de cadastro</h1>
          </div>
          {/* ============================================================== */}
          {/* Entrada do sexo */}
          <TextFieldOptions text={"sexo"} onchange={(e: any) => {
            // setUsername(e);
            setError('');
            console.log(e.target.value)

          }}
            data={['masculino', 'feminino', 'outros']}
          />
          {/* ============================================================== */}
          {/* Entrada do estado civil */}
          <TextFieldOptions text={"estado civil"} onchange={(e: any) => {
            // setUsername(e);
            setError('');
            console.log(e.target.value)

          }}
            data={['solteiro', 'casado', 'divorciado', 'uniao instavel']}
          />
          {/* ============================================================== */}
          {/* Entrada do cep*/}
          <TextField text={"cep"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do endereco*/}
          <TextField text={"endereco"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do numero*/}
          <TextField text={"numero"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do complemento*/}
          <TextField text={"complemento"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do bairro*/}
          <TextField text={"bairro"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do cidade*/}
          <TextField text={"cidade"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* Entrada do estado*/}
          <TextField text={"estado"} onchange={(e: string) => {
            // setUsername(e);
            setError('');
          }}
            type="text" />
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Botão de login */}
          {!Load ? <ButtonTypeCad text="Salva" /> :
            <div className="flex ">
              <div className="animate-spin rounded-full h-[50px] w-[50px] border-t-2 border-b-2 border-[#31837D] m-auto my-5"></div>
            </div>}
        </form>

      </div>
    </main>
  );
}


