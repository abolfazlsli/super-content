"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export const LoadProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            {children}
            {!loaded && (
                <div className="fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center bg-white">
                    <Loader2 className="h-20 w-20 animate-spin text-(--primary)" />
                </div>
            )}
        </>
    );
};
