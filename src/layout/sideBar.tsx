import React, { useState } from "react";
import "../styles/layout/sidebar.scss";
import { TbSettingsAutomation } from "react-icons/tb";
import { TbAuth2Fa } from "react-icons/tb";
import { IoMdAnalytics } from "react-icons/io";
import { GrIntegration } from "react-icons/gr";
import { FaUserSecret } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoHelpCircle } from "react-icons/io5";

interface NavItem {
  name: string;
  icon: any;
  route: string;
  subItems?: string[];
}

const navItems: NavItem[] = [
  {
    name: "Automation",
    icon: <TbSettingsAutomation style={{fontSize:"25"}} />,
    route: "",
  },
  { name: "Analytics", icon: <IoMdAnalytics style={{fontSize:"25"}} />, route: "" },
  { name: "Codes", icon: <TbAuth2Fa style={{fontSize:"25"}} />, route: "" },
  { name: "Integration", icon: <GrIntegration style={{fontSize:"25"}} />, route: "" },
  { name: "Users", icon: <FaUserSecret style={{fontSize:"25"}} />, route: "" },
  { name: "Settings", icon: <IoSettings style={{fontSize:"25"}} />, route: "" },
  {
    name: "Help & Services",
    subItems: ["Web Development", "App Development", "SEO"],
    icon: <IoHelpCircle  style={{fontSize:"25"}}/>,
    route: "",
  },
];

const SideNavBar: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="side-nav">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <div
              onClick={() => item.subItems && toggleSection(item.name)}
              className="nav-link"
            >
              {item.icon} <p>{item.name}</p>
            </div>
            {item.subItems && openSections[item.name] && (
              <ul className="sub-nav-list">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="sub-nav-item">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavBar;
