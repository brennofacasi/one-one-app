import { UseFormRegister } from "react-hook-form";

export interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  register: UseFormRegister<any>;
  field: string;
  required?: boolean;
}
