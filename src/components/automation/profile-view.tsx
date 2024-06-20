import { Handle, NodeProps, Position } from "reactflow";
import "../../styles/components/profile-view.scss";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function Profileview({ id, data, ...props }: NodeProps) {
  return (
    <div className="profile-component">
      <div className="profile-view-wrapper">
        <div className="profile-view">
          <GiPlagueDoctorProfile />
          <p>Profile View</p>
        </div>
        <div>
          <RiDeleteBin2Line />
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
