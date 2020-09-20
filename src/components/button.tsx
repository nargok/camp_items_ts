import React from "react";
import * as MUi from "@material-ui/core";

interface ButtonProps {
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MUi.Button onClick={props.onClick} color="primary">
      {props.name}
    </MUi.Button>
  );
};

export default Button;
