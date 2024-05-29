import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  //after render
  useEffect(() => {
    if (ref.current) ref.current?.focus();
  });

  useEffect(() => {
    document.title = "Custom title here!";
  });

  return <input ref={ref} type="text" className="form-control" />;
};

export default FocusInput;
