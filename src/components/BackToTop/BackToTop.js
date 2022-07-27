import React, { useState, useContext } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);

  const { theme } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const toggleColor = () => {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;

    let modifier = 200;
    if (currentScroll + modifier > documentHeight) {
      console.log("Orange");
      setColor(true);
    } else {
      console.log("Normal");
      setColor(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  window.addEventListener("scroll", toggleColor);

  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: theme.tertiary,
      transition: "all 0.3s ease-in-out",
      "&:hover": { color: theme.orange },
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ display: visible ? "inline" : "none" }} className="backToTop">
      <button
        className={color ? "orange" : ""}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <IoIosArrowDropupCircle className={classes.icon} />
      </button>
    </div>
  );
}

export default BackToTop;
