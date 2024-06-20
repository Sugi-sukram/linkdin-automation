import React, { useEffect, useState } from 'react'

import "../styles/layout/layout.scss"
import SideNavBar from './sideBar';
// import Header from './header-layout/header';

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [filterIconStatus, setFilterIconStatus] = useState(true)


  return (
    <div className='layout-component' >
      {
        <div className={`sidebar ${filterIconStatus ? '' : 'sidebar-hidden'}`}><SideNavBar /></div>
      }
      {/* <div className={"header"} style={{ width: "100%" }}>
        <Header
          filterClick={(val: any) => { setFilterIconStatus(val) }}
          filterIconStatus={filterIconStatus}
          chatIconClick={(val: any) => { setChatShowModel(val) }}
          socketIoChanges={() => { socketIoChanges() }}
          chatIconClickStatus={chatShowModel}
          handleTotalUsers={handleTotalUsers}
        />
      </div> */}
      <div className={`layout-center ${filterIconStatus ? 'layout-center-sidebar-open' : ''}`} >{children}</div>
    </div>
  )
}

export default Layout;