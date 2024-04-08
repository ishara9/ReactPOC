import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [islike, setIsLike] = useState(false);
  const toggle = () => {
    setIsLike(!islike);
    onClick();
  };

  return islike ? (
    <FaHeart size={100} color="red" onClick={toggle} />
  ) : (
    <FaRegHeart size={100} color="red" onClick={toggle} />
  );
};

export default LikeButton;
