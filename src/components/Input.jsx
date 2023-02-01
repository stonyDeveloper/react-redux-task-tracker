import React from "react";

const Input = ({ label, placeholder, type, value, onChange, id }) => {
  return (
    <div>
      <p className="text-left">{label}</p>
      <input
        className="bg-transparent mt-[5px] pl-[20px] w-full h-[30px] border-solid border-[1px] rounded-md placeholder-white"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default Input;
