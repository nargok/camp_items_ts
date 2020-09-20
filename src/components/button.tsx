import React from "react";

interface ButtonProps {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.name}</button>;
};

export default Button;
