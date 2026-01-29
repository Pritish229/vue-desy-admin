import { forwardRef } from "react";

/**
 * Toggle Component
 * Switch-style checkbox
 *
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text next to toggle
 * @param {string} labelPosition - "left" | "right"
 */
const Toggle = forwardRef(function Toggle(
  {
    size = "md",
    color,
    label,
    labelPosition = "right",
    className = "",
    ...props
  },
  ref
) {
  const sizeClasses = {
    xs: "toggle-xs",
    sm: "toggle-sm",
    md: "",
    lg: "toggle-lg",
  };

  const colorClasses = {
    primary: "toggle-primary",
    secondary: "toggle-secondary",
    accent: "toggle-accent",
    info: "toggle-info",
    success: "toggle-success",
    warning: "toggle-warning",
    error: "toggle-error",
  };

  const classes = [
    "toggle",
    sizeClasses[size],
    color ? colorClasses[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <label className="label cursor-pointer justify-start gap-3">
        {labelPosition === "left" && <span className="label-text">{label}</span>}
        <input ref={ref} type="checkbox" className={classes} {...props} />
        {labelPosition === "right" && <span className="label-text">{label}</span>}
      </label>
    );
  }

  return <input ref={ref} type="checkbox" className={classes} {...props} />;
});

export default Toggle;
