export default function TextField({ text, onchange, type }: { text: string, onchange: any, type: "email" | "text" | "password" | "date" }) {
    return <>
        <div className="w-[70%] h-auto m-auto rounded-md md:w-[90%] md:mt-2 smx:w-[100%]">
            <h1 className="w-[100%] m-auto ml-5 mb-5 mt-5 md:my-2">{text}</h1>
            <input className="w-[100%] h-[60px] p-5 border-gray-200 border-2" type={type} minLength={5}
                onChange={(e: any) => onchange(e.target.value)}
                placeholder="digite ..." />

        </div>

    </>
}

export function TextFieldOptions({ text, onchange, data }: { text: string, onchange: any, data: any }) {
    return <>
        <div className="w-[70%] h-auto m-auto rounded-md md:w-[90%] md:mt-2 smx:w-[100%]" onChange={(e) => onchange(e)}>
            <h1 className="w-[100%] m-auto ml-5 mb-5 mt-5 md:my-2">{text}</h1>
            <select className="w-[100%] h-[60px] p-5 border-gray-200 border-2 bg-white">
                <option value={''}>{'Selecione'}</option>
                {data.map((e: any) => <option value={e}>{e}</option>)}

            </select>


        </div>

    </>
}