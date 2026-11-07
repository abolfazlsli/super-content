'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { contentsHref } from "../../services/taxonomy"

export const SearchBox = () => {
    const router = useRouter()
    const [query, setQuery] = useState("")

    // جستجو در صفحه محتواها
    const handleSearch = () => {
        const q = query.trim()
        if (q) router.push(contentsHref({ q }))
    }

    return (
        <div className="relative w-full max-w-md mx-6">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="جستجو در محتوا..."
                className="w-full h-11 rounded-full bg-gray-100 px-5 outline-none transition focus:bg-white focus:ring-2 focus:ring-gray-200"
            />
        </div>
    )
}
