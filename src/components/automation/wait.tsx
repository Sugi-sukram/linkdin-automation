import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import "../../styles/components/wait.scss";
import { FaRegCircleStop } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import Input from "../common-components/inputComponent";
import DropdownComponent from "../common-components/dropdownComponent";

export default function Wait({ id, data, ...props }: NodeProps) {
  return (
    <div className="wait-component">
      <div className="wait-view-wrapper">
        <div className="wait-view">
          <FaRegCircleStop />
          <p>Wait</p>
        </div>
        <div>
          <RiDeleteBin2Line />
        </div>
      </div>
      <div className="wrap-form">
        <div>
          <Input
            type="number"
            title="Value:"
            width="80px"
            value={data.value}
            onChange={(e: Event | any) => {
              console.log(id, "value", e.target.value);
              data.onchange(id, "value", e.target.value);
            }}
          />
        </div>
        <DropdownComponent
          options={[
            { value: "Hours", label: "Hours" },
            { value: "Days", label: "Days" },
            { value: "Weeks", label: "Weeks" },
            { value: "Months", label: "Months" },
          ]}
          getData={(value) => {
            data.onchange(id, "unit", value.value);
          }}
          isDisabled={false}
          value={{ value: data.unit, label: data.unit }}
          title="Unit:"
          // required
          width="200px"
          placeHolder="Select"
          // errorMessage="Please select an option"
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
