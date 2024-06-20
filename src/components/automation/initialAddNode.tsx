import React from 'react'
import ButtonComponent from '../common-components/button-component';
import { NodeProps } from 'reactflow';

function InitialAddNode({id,data}:NodeProps) {
  return (
    <div>
        <ButtonComponent
          title={"+ Step"}
          height="35px"
          width="80px"
          backgroundColor="#124E66"
          color="white"
          className={
            false
              ? "button-component-hover disabled"
              : "button-component common-btn"
          }
          handleClick={() => {
            data.handleClick()
          }}
        />
    </div>
  )
}

export default InitialAddNode