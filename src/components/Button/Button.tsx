import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button = ({ children, onClick, color = "primary", style }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
