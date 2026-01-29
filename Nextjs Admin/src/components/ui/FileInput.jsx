import { forwardRef } from "react";

/**
 * FileInput Component
 * File upload input
 *
 * @param {string} variant - "bordered" | "ghost"
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text above input
 * @param {string} hint - Helper text below input
 */
const FileInput = forwardRef(function FileInput(
  {
    variant = "bordered",
    size = "md",
    color,
    label,
    hint,
    error,
    className = "",
    ...props
  },
  ref
) {
  const sizeClasses = {
    xs: "file-input-xs",
    sm: "file-input-sm",
    md: "",
    lg: "file-input-lg",
  };

  const colorClasses = {
    primary: "file-input-primary",
    secondary: "file-input-secondary",
    accent: "file-input-accent",
    info: "file-input-info",
    success: "file-input-success",
    warning: "file-input-warning",
    error: "file-input-error",
  };

  const classes = [
    "file-input",
    variant === "bordered" ? "file-input-bordered" : "file-input-ghost",
    sizeClasses[size],
    error ? "file-input-error" : color ? colorClasses[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input ref={ref} type="file" className={classes} {...props} />
      {(hint || error) && (
        <label className="label">
          <span className={`label-text-alt ${error ? "text-error" : ""}`}>
            {error || hint}
          </span>
        </label>
      )}
    </div>
  );
});

export default FileInput;
