import React from "react";
import { pageLinks } from "../../data";

const PageLinks = ({ name, nameA }) => {
  return (
    <ul className={name} id={name}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={nameA}>
              {" "}
              {link.text}{" "}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
