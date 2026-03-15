import { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, id, ...props }: TextareaProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={5}
        className={[styles.textarea, error ? styles.textareaError : ""].filter(Boolean).join(" ")}
        {...props}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
