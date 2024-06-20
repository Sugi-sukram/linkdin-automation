import React from 'react';
import Select from 'react-select';
import '../../styles/common-components/dropdownComponent.scss';

export interface Option {
  value: string | number;
  label: string | number;
  id?: string | number;
}

interface Props {
  options: Option[],
  title?: string,
  required?: boolean,
  getData: (val: any) => void,
  value: Option, // Passed from parent
  width?: string,
  className?: string,
  isDisabled?: boolean,
  placeHolder?: string,
  errorMessage?: string
}

const DropdownComponent: React.FC<Props> = ({
  options,
  getData,
  value,
  title,
  required,
  width,
  className,
  isDisabled,
  placeHolder = "Select an Option",
  errorMessage
}) => {

  const handleChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.value !== "") {
      getData(selectedOption);
    }
  };

  return (
    <div className='wrap-dd'>
      {title && (
        <div>
          {title}{required && <span style={{ color: "red" }}>*</span>}
        </div>
      )}
      <Select
        noOptionsMessage={() => "No results found"}
        value={value}
        onChange={handleChange}
        isDisabled={isDisabled}
        maxMenuHeight={180}
        options={options}
        placeholder={placeHolder}
        className={className || 'default-select'}
      />
      {errorMessage && (
        <div className='dd-error-message'>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
