import React from "react";
import HeaderAdminNav from "./HeaderAdminNav";

export default function HeaderAdmin() {
  return (
    <div className="flex justify-around">
      <div>Logo</div>
      <HeaderAdminNav />
    </div>
  );
}
