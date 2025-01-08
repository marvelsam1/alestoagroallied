import React from "react";

const Button = ({ text, css, icon, onClick }) => {
  return (
    <div
      className={`flex items-center text-center gap-2 rounded-lg cursor-pointer ${css} flex items-center`}
      onClick={onClick}
    >
      {icon}
      {text}
    </div>
  );
};

export default Button;
