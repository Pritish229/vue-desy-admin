import { forwardRef } from "react";

/**
 * Radio Component
 * Styled radio button input
 *
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text next to radio
 */
const Radio = forwardRef(function Radio(
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
    xs: "radio-xs",
    sm: "radio-sm",
    md: "",
    lg: "radio-lg",
  };

  const colorClasses = {
    primary: "radio-primary",
    secondary: "radio-secondary",
    accent: "radio-accent",
    info: "radio-info",
    success: "radio-success",
    warning: "radio-warning",
    error: "radio-error",
  };

  const classes = [
    "radio",
    sizeClasses[size],
    color ? colorClasses[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <label className="label cursor-pointer justify-start gap-3">
        <input ref={ref} type="radio" className={classes} {...props} />
        <span className="label-text">{label}</span>
      </label>
    );
  }

  return <input ref={ref} type="radio" className={classes} {...props} />;
});

export default Radio;

/**
 * RadioGroup - Helper for grouped radio buttons
 */
export function RadioGroup({ name, options, value, onChange, color, size, className = "" }) {
  return (
    <div className={`space-y-1 ${className}`}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
          color={color}
          size={size}
        />
      ))}
    </div>
  );
}
