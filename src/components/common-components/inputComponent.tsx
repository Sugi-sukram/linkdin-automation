import React, { ChangeEvent, CSSProperties, FocusEvent, KeyboardEvent } from 'react';
import '../../styles/common-components/inputComponent.scss';
interface InputProps {
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  className?: string;
  title?: string;
  width?: string;
  style?: CSSProperties;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name = '',
  value = '',
  placeholder = '',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onKeyPress = () => {},
  onKeyDown = () => {},
  onKeyUp = () => {},
  disabled = false,
  readOnly = false,
  required = false,
  maxLength = undefined,
  minLength = undefined,
  title = "",
  pattern = '',
  autoFocus = false,
  autoComplete = 'off',
  className = 'default-input',
  width="200px",
  style = {},
}) => {
  return (
    <div className='input-component-wrapper'>
         {title && (
        <div style={{ marginBottom: "8px",  }}>
          {title}{required && <span style={{ color: "red" }}>*</span>}
        </div>
      )}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={className}
          style={{...style,width}}
        />
    </div>
  );
};

export default Input;
