import { Button, ButtonProps } from "antd"
import { useState } from "react"

export const CuButton = (props: ButtonProps) => {
    const [loading, setLoading] = useState(false)

    const handleClick: ButtonProps["onClick"] = async (event) => {
        setLoading(true)

        try {
            await props.onClick?.(event)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button
            {...props}
            onClick={handleClick}
            loading={props.loading ?? loading}
        />
    )
}