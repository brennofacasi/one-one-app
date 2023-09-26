import styles from "./styles.module.scss";
import { SelectProps } from "./types";

export default function Select({
  label,
  register,
  field,
  required,
  options,
  ...props
}: SelectProps) {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <select
        className={styles.select}
        defaultValue=''
        {...register(field, { required })}
        {...props}
      >
        <option disabled value=''>
          Selecione...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
