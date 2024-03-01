import React from "react";

const InputContact = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        id="name"
        required
        className="border-b-2 border-lowOpactiy input w-[340px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputContact;
