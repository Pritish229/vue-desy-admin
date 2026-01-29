import { forwardRef } from "react";

/**
 * Range Component
 * Slider input for selecting a value
 *
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} color - "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {string} label - Label text above range
 * @param {boolean} showValue - Show current value
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} step - Step increment
 */
const Range = forwardRef(function Range(
  {
    size = "md",
    color,
    label,
    showValue = false,
    min = 0,
    max = 100,
    step = 1,
    value,
    className = "",
    ...props
  },
  ref
) {
  const sizeClasses = {
    xs: "range-xs",
    sm: "range-sm",
    md: "",
    lg: "range-lg",
  };

  const colorClasses = {
    primary: "range-primary",
    secondary: "range-secondary",
    accent: "range-accent",
    info: "range-info",
    success: "range-success",
    warning: "range-warning",
    error: "range-error",
  };

  const classes = [
    "range",
    sizeClasses[size],
    color ? colorClasses[color] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="form-control w-full">
      {(label || showValue) && (
        <label className="label">
          {label && <span className="label-text">{label}</span>}
          {showValue && <span className="label-text-alt">{value}</span>}
        </label>
      )}
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className={classes}
        {...props}
      />
    </div>
  );
});

export default Range;

/**
 * RangeWithSteps - Range with step markers
 */
export function RangeWithSteps({ steps = 5, ...props }) {
  return (
    <div className="w-full">
      <Range {...props} step={100 / (steps - 1)} />
      <div className="flex w-full justify-between px-2 text-xs">
        {Array.from({ length: steps }).map((_, i) => (
          <span key={i}>|</span>
        ))}
      </div>
    </div>
  );
}
