import React, { useContext, useState } from "react";
import Close from "../assets/icon-cross.svg";
import CheckIcon from "../assets/icon-check.svg";
import { DarkMode } from "../App";

const Todo = ({ task}) => {
  const {isDark} = useContext(DarkMode)
  const [clicked, setClicked] = useState(false);

  const style = {
    listStyle: isDark
      ? "bg-light-vlgb text-dark-vdb border-b-dark-lgb "
      : "bg-dark-vdsb text-light-lgb border-b-light-vdgb",
    divStyle: clicked
      ? "bg-gradient-to-r from-gradient-start to-gradient-end"
      : "",
    circle: isDark ? "border-light-vdgb" : "border-light-lgb",
    pStyle: clicked ? "line-through text-light-vdgb" : "",
  };

  return (
    <li
      className={`${style.listStyle} flex items-center group justify-between py-5  px-6 border-0 border-b  border-x-0 font-normal`}
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`${style.divStyle} ${style.circle} w-[20px] h-[20px] border border-light-lgb rounded-[50%] outline-none flex items-center justify-center`}
      >
        {clicked && <img src={CheckIcon} />}
      </div>

      <p className={`${style.pStyle} flex-1 ml-4 text-[18px] `}>{task}</p>

      <img src={Close} className="invisible group-hover:visible" />
    </li>
  );
};

export default Todo;
