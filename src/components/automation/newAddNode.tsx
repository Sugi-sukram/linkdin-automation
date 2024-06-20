import React from "react";
import ButtonComponent from "../common-components/button-component";
import { Handle, NodeProps, Position } from "reactflow";
import { IoIosAddCircleOutline } from "react-icons/io";
function NewAddNode({ id, data }: NodeProps) {
  return (
    <div>
      <IoIosAddCircleOutline style={{ fontSize: "30px" }} onClick={()=>{ data.handleClick()}}/>
      <Handle type="target" position={Position.Top} />

    </div>
  );
}

export default NewAddNode;
