import { useState } from "react";
import CustomInput from "./CustomInput";

export type FieldConfig = {
  label: string;
  name: string;
  type: "text" | "number" | "date" | "email";
};

type FormularioGenericoProps<T extends object> = {
  fields: FieldConfig[];
  initialValues: T;
  submit: (values: T) => void;
};

function FormularioGenerico<T extends object>({
  fields,
  initialValues,
  submit,
}: FormularioGenericoProps<T>) {
  const [formData, setFormData] = useState<T>(initialValues);

  const handleChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    const isEmpty = Object.values(formData as Record<string, any>).some(
      (value) => value === "" || value === null || value === undefined
    );

    if (isEmpty) {
      alert("Erro: Preencha todos os campos!");
      return;
    }

    submit(formData);
  };

  return (
    <div>
      {fields.map((field) => (
        <CustomInput
          key={field.name}
          label={field.label}
          inputType={field.type}
          value={(formData as any)[field.name] ?? ""}
          onChange={(value) => handleChange(field.name, value)}
        />
      ))}
      <button
        type="button"
        onClick={handleSubmit}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Enviar
      </button>
    </div>
  );
}

export default FormularioGenerico;
