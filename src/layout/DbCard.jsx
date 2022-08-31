import React from "react";

const DbCard = ({ children }) => {
  return (
    <div className="fixed right-0 md:right-8 bottom-8">
      <div className="w-[90%] md:w-[426px] pl-4 pr-4 md:p-0 h-[261px] rounded-[12px] bg-white flex justify-center items-center">{children}</div>
    </div>
  );
};

export default DbCard;
