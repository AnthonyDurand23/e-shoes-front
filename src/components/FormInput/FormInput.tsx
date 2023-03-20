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
  classname?: string;
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
  classname,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative mt-5 ${classname}`}>
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
      <label htmlFor={name} className="input-label xl:input-label-xl">
        {label}
      </label>
      <span className={`${focused && 'peer-invalid:block peer-invalid:p3-r peer-invalid:text-validation-red'} hidden`}>
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
