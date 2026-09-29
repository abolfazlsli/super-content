export const Title = ({text} : {text : string}) => {
    return (
        <>
            <h1 className="text-2xl max-md:text-xl! font-bold">
                {text}
            </h1>
        </>
    )
}