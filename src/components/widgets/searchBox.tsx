export const SearchBox = () => {
    return (
        <div className="relative w-full max-w-md mx-6">
            <input
                type="text"
                placeholder="جستجو در محتوا..."
                className="w-full h-11 rounded-full bg-gray-100 px-5 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
            />
        </div>
    )
}