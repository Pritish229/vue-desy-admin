import { forwardRef } from "react";

/**
 * TextInput Component
 * A styled input field with multiple variants
 *
 * @param {string} variant - "bordered" | "ghost"
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text above input
 * @param {string} hint - Helper text below input
 * @param {string} error - Error message (shows error styling)
 */
const TextInput = forwardRef(function TextInput(
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
    xs: "input-xs",
    sm: "input-sm",
    md: "",
    lg: "input-lg",
  };

  const colorClasses = {
    primary: "input-primary",
    secondary: "input-secondary",
    accent: "input-accent",
    info: "input-info",
    success: "input-success",
    warning: "input-warning",
    error: "input-error",
  };

  const classes = [
    "input",
    variant === "bordered" ? "input-bordered" : "input-ghost",
    sizeClasses[size],
    error ? "input-error" : color ? colorClasses[color] : "",
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
      <input ref={ref} className={classes} {...props} />
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

export default TextInput;
