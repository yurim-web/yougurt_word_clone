"use client";
import { useState } from "react";
import MenuButton from "./MenuButton";

const Menucc = () => {
  const [menubutton, setmenubutton] = useState([
    { selected: true, menu: "전체" },
    { selected: false, menu: "커피" },
    { selected: false, menu: "더치커피" },
    { selected: false, menu: "논커피 라떼" },
    { selected: false, menu: "주스" },
    { selected: false, menu: "스무디" },
    { selected: false, menu: "티" },
  ]);

  const change = (i) => {
    setmenubutton((prev) => {
      const newARR = [...prev].map((v, idx) => {
        v.selected = idx == i;
        return v;
      });
      return newARR;
    });
  };
  return (
    <div style={{ width: "100%", display: "flex" }}>
      {menubutton.map((v, i) => (
        <MenuButton
          click={() => change(i)}
          key={i}
          selected={v.selected}
          menu={v.menu}
        />
      ))}
    </div>
  );
};

export default Menucc;
