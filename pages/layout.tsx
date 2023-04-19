import React from 'react';
import Link from "next/link";

const Layout = ({children}: any) => {
  return (
    <div>
      <div className="navbar">
        <Link href={'/'}>홈</Link>
        <Link href={'list'}>List</Link>
      </div>
      {children}
    </div>
  )
};

export default Layout;