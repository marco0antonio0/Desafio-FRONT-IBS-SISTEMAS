import { useRouter } from "next/router";

export function WidgetUsuario({ data }: { data: { nome: string | "", idade: Date | "", email: string | "" } }) {
    var dataCompleta = new Date(data.idade);
    var dia = dataCompleta.getDate();
    var mes = dataCompleta.getMonth() + 1; // Adiciona 1 porque os meses são indexados a partir de 0
    var ano = dataCompleta.getFullYear();
    let dataFormatada = ``;
    if (dia != 30 && mes != 11 && ano != 1899) {
        dataFormatada = `${dia}/${mes}/${ano}`;
    } else {
        dataFormatada = `não registrado`;

    }
    return <>

        {/* =================================== */}
        {/*         icon do usuario */}
        <div className="flex w-[200px] h-[90%] bg-[#31CAA2] m-auto ml-5 mr-0 rounded-lg md:w-[100px]">
            <img className="m-auto md:p-3" src="/images/iconUser.png" alt="" />
        </div>
        {/* =================================== */}
        {/*         dados do usuario */}
        <div className="flex flex-col m-auto ml-5 flex-1">
            <h1 className="md:text-sm">Nome:  {data.nome}</h1>
            <h1 className="md:text-sm">Data Nascimento: {dataFormatada}</h1>
            <h1 className="md:text-sm">Email: {data.email}</h1>
            <h1 className="m-auto mt-5 mb-0 text-slate-500 md:text-sm">clique aqui para editar</h1>
        </div>
    </>
}