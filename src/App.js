import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function App() {
  const [showhead, setShowhead] = useState(false);
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav">
          <h4>CELEBAL TECH</h4>
        </div>
        <div className="nav-right">
          <p>Products</p>
          <p>Services</p>
          <BiMenuAltRight onClick={() => setShowhead(!showhead)} />
        </div>
      </div>
      <div className="paragraph">
        We manage your enterprise needs
        <br /> so you can manage your business
      </div>
      <div className="btn-div">
        <div className="circle-div">
          <div className="circle"></div>
          <button className="btn">
            Get in Touch
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
      <Header head={showhead} />
    </div>
  );
}

export default App;
