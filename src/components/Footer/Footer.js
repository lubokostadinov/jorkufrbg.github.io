import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
// import { headerData } from "../../data/headerData";

function Footer() {
  //   const shortname = (name) => {
  //     if (name.length > 10) {
  //       return name.split(" ")[0];
  //     } else {
  //       return name;
  //     }
  //   };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Made with
        <span style={{ margin: "0 0.5rem -1rem 0.5rem" }}>☕</span>
        and
        <span style={{ color: "#00a0e3", margin: "0 0.5rem -1rem 0.5rem" }}>
          ❤
        </span>
      </p>
    </div>
  );
}

export default Footer;
