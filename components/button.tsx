export default function ButtonTypeCad({ text = 'Login' }: { text: string }) {
    return <>
        <button className="h-[70px] w-[200px] bg-[#31837D] flex rounded-md m-auto my-8 select-none cursor-pointer shadow-md smx:h-[60px] active:scale-[103%]" type="submit">
            <h1 className="text-white m-auto smx:text-sm">{text}</h1>
        </button>
    </>
}