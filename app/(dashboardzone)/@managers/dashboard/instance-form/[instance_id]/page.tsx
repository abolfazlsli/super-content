"use client";

import DynamicForm from "../../../../components/layouts/daynamic-form/daynamic-form";
import { getInstanceFilds } from "../../../../../../src/services/fields";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const { instance_id } = useParams<{ instance_id: string }>();

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const handleGetData = async () => {
            if (!instance_id) return;

            try {
                setLoading(true);

                const response = await getInstanceFilds(instance_id);

                if (!response.sucsess) {
                    setError(true);
                    return;
                }

                setData(response.data.data.result);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        handleGetData();
    }, [instance_id]);

    if (loading) {
        return <div>در حال دریافت اطلاعات...</div>;
    }

    if (error || !data) {
        return <div>مشکلی در دریافت اطلاعات پیش آمد</div>;
    }

    return (
        <DynamicForm
            instance={data.instance}
            fields={data.filds}
        />
    );
}