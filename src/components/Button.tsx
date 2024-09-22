import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const Button: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return <MUIButton {...props}>{label}</MUIButton>;
};

export default Button;
