import { forwardRef } from "react";

/**
 * Checkbox Component
 * Styled checkbox input
 *
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text next to checkbox
 */
const Checkbox = forwardRef(function Checkbox(
  {
    size = "md",
    color,
    label,
    className = "",
    ...props
  },
  ref
) {
  const sizeClasses = {
    xs: "checkbox-xs",
    sm: "checkbox-sm",
    md: "",
    lg: "checkbox-lg",
  };

  const colorClasses = {
    primary: "checkbox-primary",
    secondary: "checkbox-secondary",
    accent: "checkbox-accent",
    info: "checkbox-info",
    success: "checkbox-success",
    warning: "checkbox-warning",
    error: "checkbox-error",
  };

  const classes = [
    "checkbox",
    sizeClasses[size],
    color ? colorClasses[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <label className="label cursor-pointer justify-start gap-3">
        <input ref={ref} type="checkbox" className={classes} {...props} />
        <span className="label-text">{label}</span>
      </label>
    );
  }

  return <input ref={ref} type="checkbox" className={classes} {...props} />;
});

export default Checkbox;
