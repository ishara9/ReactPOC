import React, { useState } from "react";
import Button from "../Button/Button";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) {
    return <div>{children}</div>;
  }

  const shortText = isExpanded ? children : children?.substring(0, maxChars);
  return (
    <div>
      {shortText}...
      <Button
        style={{ marginLeft: "10px" }}
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
