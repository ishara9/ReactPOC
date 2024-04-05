import { ReactNode } from "react";

interface Props {
  text: string;
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ text, children, onClose: closeOnClicked }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={closeOnClicked}
      ></button>
    </div>
  );
};

export default Alert;
