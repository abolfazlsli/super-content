"use client";

import {
    Button,
    Card,
    Form,
    Input,
    Select,
    Typography,
} from "antd";

const { TextArea } = Input;

interface FieldOption {
    value: string;
    label: string;
    order: number;
}

interface Field {
    order: number;
    required: boolean;
    fild: {
        id: string;
        name: string;
        type_of: string;
        options: FieldOption[];
    };
}

interface Instance {
    id: string;
    name: string;
    caption: string | null;
}

interface DynamicFormProps {
    instance: Instance;
    fields: Field[];
}

export default function DynamicForm({
    instance,
    fields,
}: DynamicFormProps) {
    const [form] = Form.useForm();

    const sortedFields = [...fields].sort(
        (a, b) => a.order - b.order
    );

    const renderField = (field: Field) => {
        const { fild } = field;

        switch (fild.type_of) {
            case "str":
                return (
                    <Input
                        size="large"
                        placeholder={`وارد کردن ${fild.name}`}
                    />
                );

            case "select":
                return (
                    <Select
                        size="large"
                        placeholder={`انتخاب ${fild.name}`}
                        options={[...fild.options]
                            .sort(
                                (a, b) =>
                                    a.order - b.order
                            )
                            .map((option) => ({
                                value: option.value,
                                label: option.label,
                            }))}
                    />
                );

            default:
                return (
                    <Input
                        size="large"
                        placeholder={`وارد کردن ${fild.name}`}
                    />
                );
        }
    };

    const handleSubmit = async (
        values: Record<string, unknown>
    ) => {
        console.log({
            instance_id: instance.id,
            values,
        });
    };

    return (
        <div
            dir="rtl"
            className="min-h-screen bg-slate-50 p-6 md:p-10"
        >
            <div className="mx-auto max-w-4xl">
                <Card
                    bordered={false}
                    className="rounded-3xl shadow-sm"
                >
                    <div className="mb-8">
                        <Typography.Title
                            level={2}
                            className="mb-1!"
                        >
                            {instance.name}
                        </Typography.Title>

                        {instance.caption && (
                            <Typography.Text type="secondary">
                                {instance.caption}
                            </Typography.Text>
                        )}
                    </div>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                    >
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                            {sortedFields.map((field) => (
                                <Form.Item
                                    key={field.fild.id}
                                    name={field.fild.id}
                                    label={field.fild.name}
                                    required={field.required}
                                    rules={
                                        field.required
                                            ? [
                                                  {
                                                      required: true,
                                                      message: `${field.fild.name} الزامی است`,
                                                  },
                                              ]
                                            : []
                                    }
                                >
                                    {renderField(field)}
                                </Form.Item>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end border-t pt-6">
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                            >
                                ذخیره
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    );
}