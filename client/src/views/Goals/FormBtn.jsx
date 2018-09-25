import React from "react";
import Button from "components/CustomButtons/Button.jsx";

export const FormBtn = props => <Button {...props}>{props.children}</Button>;

export default FormBtn;