import styles from "./styles.module.scss";
import { InputProps } from "./types";

export default function Input({
  label,
  register,
  field,
  required,
  ...props
}: InputProps) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        {...register(field, { required })}
        {...props}
      />
    </>
  );
}
