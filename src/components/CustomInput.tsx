type CustomInputProps = {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  inputType: "text" | "number" | "date" | "email";
};

const CustomInput = ({
  label,
  value,
  onChange,
  placeholder,
  inputType,
}: CustomInputProps) => (
  <div style={{ marginBottom: "1rem" }}>
    <label style={{ display: "block", marginBottom: "0.5rem" }}>{label}</label>
    <input
      type={inputType}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: "0.5rem",
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    />
  </div>
);

export default CustomInput;
