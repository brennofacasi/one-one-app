import { UseFormRegister } from "react-hook-form";

export interface SelectProps extends React.ComponentProps<"select"> {
  label?: string;
  register: UseFormRegister<any>;
  field: string;
  required?: boolean;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}
