import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
}

export default function Input({ icon, className = "", ...props }: InputProps) {
    return (
        <div className="relative">
            {icon && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </div>
            )}

            <input
                {...props}
                className={`
                    h-12 w-full rounded-xl
                    border border-gray-200
                    bg-gray-50
                    pr-11 pl-4
                    text-sm text-gray-900
                    outline-none transition
                    placeholder:text-gray-400
                    focus:border-gray-900
                    focus:bg-white
                    focus:ring-2
                    focus:ring-gray-900/5
                    ${className}
                `}
            />
        </div>
    );
}