import React from "react";

interface iButton {
  children: string;
  class1: string;
}

export const Button = ({ children, class1 }: iButton) => {
  return (
    <>
      <button className={class1}>{children}</button>
    </>
  );
};
