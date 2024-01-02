import React, { useState } from "react";
import "./style.css";
import Menu from "./menuAPI";
import RestorentMenuCard from "./RestorentMenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];

const Restorent = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  console.log(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setmenuData(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <RestorentMenuCard menuData={menuData} />
    </>
  );
};

export default Restorent;
