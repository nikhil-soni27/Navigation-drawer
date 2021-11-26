import { useState } from "react";
import Menu from "./Menu";
const Header = ({ head }) => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <div className={head ? "head active" : "head"}>
      <p className="menu" onClick={() => setshowmenu(!showmenu)}>
        Menu
      </p>
      <Menu show={showmenu} />
    </div>
  );
};

export default Header;
