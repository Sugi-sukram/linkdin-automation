import React from "react";
import "../../styles/components/addpanal.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { IoMailUnread } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { BiLike } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbLocationCancel } from "react-icons/tb";
import { FaRegCircleStop } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiBetterstack } from "react-icons/si";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";

interface AddpanalProps {
  hideModal: (val: boolean) => void;
  stepClicked: (val: string) => void;
}
export default function Addpanal({ hideModal,stepClicked }: AddpanalProps) {
  const stepsList = [
    { icon: <VscGitPullRequestCreate />, title: "Connection Request" },
    { icon: <IoMailUnread />, title: "InMail Request" },
    { icon: <IoIosMail />, title: "Email" },
    { icon: <AiFillMessage />, title: "Message" },
    { icon: <GiPlagueDoctorProfile />, title: "Profile View" },
    { icon: <ImProfile />, title: "Endorse Profile" },
    { icon: <BiLike />, title: "Like Contant" },
    { icon: <IoShareSocialSharp />, title: "Share Contant" },
    { icon: <TbLocationCancel />, title: "Revoke Connection Request" },
    { icon: <FaRegCircleStop />, title: "Wait" },
    { icon: <FaFileDownload />, title: "DownLoad Profile" },
    { icon: <MdAddTask />, title: "Invite To Follow Company" },
    { icon: <SiBetterstack />, title: "Enrich Profile" },
    { icon: <MdOutlineSecurityUpdateGood />, title: "Update To Connected" },
  ];
  return (
    <div className="addpanal-modal">
      <div className="addpanal-container">
        <div style={{ textAlign: "left" }} className="title-and-close">
          <p style={{ fontSize: "20px" }}>{"Add Step"}</p>
          <p>
            <IoMdCloseCircleOutline
              fontSize={25}
              cursor={"pointer"}
              onClick={() => hideModal(false)}
            />
          </p>
        </div>
        <div className="addpanal-content">
          {stepsList &&
            stepsList.map((data: any,i:number) => {
              return (
                <div  className="addpanal-content-stpes" key={i.toString()} onClick={()=>stepClicked(data.title)}>
                  <p>{data.icon}</p>
                  <p>{data.title}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
