"use client";

import { Skeleton } from "antd";
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

    if (!loaded) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader2 className="animate-spin w-20 h-20 text-(--primary)"  />
            </div>
        );
    }

    return <>{children}</>;
};