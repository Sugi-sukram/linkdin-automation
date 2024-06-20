import React, { FC } from 'react';
import { EdgeProps, getBezierPath, EdgeLabelRenderer, BaseEdge } from 'reactflow';
import { IoMdAdd } from "react-icons/io"; 

const CustomEdge: FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath}style={{color:"black"}} />
      <EdgeLabelRenderer  >
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            background: 'white',
            color:"gray",
            padding: "0px 4px",
            borderRadius: 3,
            // fontSize: 20,
            fontWeight: 700,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            border:"1px solid gray" ,
            pointerEvents:"all",
            cursor:"pointer"
          }}
          className="nodrag nopan" 
          onClick={()=>{
            data.onclick();
             console.log("first")
            }}
        >
          <p style={{
          margin:0
          }}><IoMdAdd /></p> 
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;