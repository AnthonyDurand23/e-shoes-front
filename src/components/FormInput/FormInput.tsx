import { useState } from 'react';

interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  required: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  placeholder,
  errorMessage,
  label,
  pattern,
  required,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative mt-10">
      <input
        className={`peer input mt-1 block w-full px-3 py-2 ${focused && 'input-invalid'}`}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={() => setFocused(true)}
      />
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <span className={`${focused && 'peer-invalid:block peer-invalid:text-validation-red'} hidden`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
