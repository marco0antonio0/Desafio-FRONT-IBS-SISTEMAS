import { useEffect, useState } from "react";
import TextField from "@/components/textField";
import ButtonTypeCad from "@/components/button";
import { useRouter } from "next/router";
import { JwtTokenStorage } from "@/services/cokieesToken/FnToken";
import { fetcha } from "@/services/fetch";
import { WidgetUsuario } from "@/components/componentUser";

export default function AreaDoUsuario() {
    const [Data, setData] = useState([]);
    const [Search, setSearch] = useState('');
    const [Token, setToken] = useState('');
    const tokenStorage = new JwtTokenStorage('jwt_token');
    useEffect(() => {
        const t = tokenStorage.getToken()
        if (!t) {
            r.push('/')
        } else {
            setToken(t)
        }
        if (Data.length == 0) {

            fetcha.AllUsers().then((e: any) => {
                if (e) {
                    setData(e ? e : []);
                }
            })
        }
    }, [])

    // =============================================
    // =============================================
    // =============================================
    const r = useRouter()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between  bg-slate-50 ">
            {/*  */}
            <div className="h-auto w-[700px] bg-white flex flex-col lg:w-[100%] ">
                {/* ============================================================ */}
                {/* logo e text logo */}
                <div className="flex flex-row items-center content-center align-middle mt-10">
                    <img
                        className="w-[80px] h-[80px] m-auto mr-0"
                        src="/images/logo.png" alt="" />
                    <h1 className="m-auto ml-5 text-xl">Sistema de gerenciamento</h1>
                </div>
                {/* ============================================================ */}
                {/*         campo pesquisa + botão de ativação */}
                <div className="w-[80%] m-auto mt-10 flex flex-row">
                    {/* =================================*/}
                    {/*  campo de pesquisa */}
                    <input
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        className="w-[100%] h-[60px] p-5 border-gray-200 border-2" type="text" placeholder="Procure pelo email de cadastro" />
                    {/* =================================*/}
                    {/*  botão para ativar a pesquisa */}
                    <div
                        onClick={() => {
                            // digite aqui para acionar uma ação
                        }}
                        className="w-[80px] h-[60px] bg-[#31CAA2] ml-5 flex rounded-md shadow-md select-none cursor-pointer active:scale-[105%]">
                        <img className="m-auto w-[30px] h-[30px]" src="/images/search.png" alt="" />
                    </div>
                    {/* =================================*/}
                </div>
                {/* ============================================================ */}
                {/*      botão de cadastro de usuario */}
                <Buttom text="Cadastrar usuario" onClick={() => {
                    r.push('/usuario/cadastro')
                }} />
                {/* ============================================================ */}
                {/*      botão de sair de usuario */}
                <Buttom text="Sair" onClick={() => {
                    tokenStorage.cleanToken()
                    r.push('/')
                }} />


                {/* ============================================================ */}

                <div className="flex flex-col gap-3 mt-10 mb-10 md:mt-5">
                    <h1 className="text-xl m-auto my-5 md:my-2">Ficha de usuarios</h1>
                    {Data.map((e: { nome: string, data_nascimento: Date, email: string, id: number }, i) => {

                        return (
                            <div
                                onClick={() => { r.push('usuario/ficha?email=LoremIpsum') }}
                                className="flex flex-row w-[80%] h-[200px] bg-[#f9f9f97f] m-auto 0 rounded-lg select-none cursor-pointer shadow-sm active:scale-[102%] md:w-[95%] md:h-[150px]" key={i}>
                                <WidgetUsuario data={{ nome: e.nome, idade: e.data_nascimento, email: e.email }} />
                            </div>
                        );
                    })}



                </div>
            </div>
        </main>
    );
}






function Buttom({ onClick, text }: { onClick: Function, text: string }) {
    return <div
        onClick={() => {
            // digite aqui para acionar uma ação
            onClick();
        }}
        className="flex w-[80%] h-[100px] bg-[#31CAA2] m-auto mt-5 rounded-lg select-none cursor-pointer shadow-sm active:scale-[102%] md:h-[70px] md:mt-5">
        <h1 className="m-auto text-white text-lg md:text-sm">{text}</h1>
    </div>
}