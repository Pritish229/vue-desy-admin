import { forwardRef } from "react";

/**
 * Textarea Component
 * Multi-line text input
 *
 * @param {string} variant - "bordered" | "ghost"
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text above textarea
 * @param {string} hint - Helper text below textarea
 * @param {string} error - Error message
 */
const Textarea = forwardRef(function Textarea(
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
    xs: "textarea-xs",
    sm: "textarea-sm",
    md: "",
    lg: "textarea-lg",
  };

  const colorClasses = {
    primary: "textarea-primary",
    secondary: "textarea-secondary",
    accent: "textarea-accent",
    info: "textarea-info",
    success: "textarea-success",
    warning: "textarea-warning",
    error: "textarea-error",
  };

  const classes = [
    "textarea",
    variant === "bordered" ? "textarea-bordered" : "textarea-ghost",
    sizeClasses[size],
    error ? "textarea-error" : color ? colorClasses[color] : "",
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
      <textarea ref={ref} className={classes} {...props} />
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

export default Textarea;
