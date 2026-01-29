import { forwardRef } from "react";

/**
 * Select Component
 * Dropdown select input
 *
 * @param {string} variant - "bordered" | "ghost"
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text above select
 * @param {string} hint - Helper text below select
 * @param {string} placeholder - Placeholder option text
 * @param {array} options - Array of { value, label } objects
 */
const Select = forwardRef(function Select(
  {
    variant = "bordered",
    size = "md",
    color,
    label,
    hint,
    error,
    placeholder,
    options = [],
    className = "",
    children,
    ...props
  },
  ref
) {
  const sizeClasses = {
    xs: "select-xs",
    sm: "select-sm",
    md: "",
    lg: "select-lg",
  };

  const colorClasses = {
    primary: "select-primary",
    secondary: "select-secondary",
    accent: "select-accent",
    info: "select-info",
    success: "select-success",
    warning: "select-warning",
    error: "select-error",
  };

  const classes = [
    "select",
    variant === "bordered" ? "select-bordered" : "select-ghost",
    sizeClasses[size],
    error ? "select-error" : color ? colorClasses[color] : "",
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
      <select ref={ref} className={classes} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.length > 0
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
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

export default Select;
