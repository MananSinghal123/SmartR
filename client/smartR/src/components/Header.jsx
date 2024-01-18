import { useState } from "react";
import logo from "../assets/img/smartR_logo.svg";
import { VscAccount as Avatar } from "react-icons/vsc";
import "./Header.css";

import { useNavigate } from "react-router-dom";
import CustomModal from "./CustomModal";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="SmartR" />
        <Avatar
          cursor="pointer"
          onClick={() => setOpen(true)}
          size={30}
          color="white"
        />
      </div>
      <CustomModal endpoint="user-dashboard" open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
