import { forwardRef } from "react";

/**
 * Tooltip Component
 * Shows a message when hovering over an element
 * 
 * @param {string} content - Tooltip text
 * @param {string} position - "top" | "bottom" | "left" | "right"
 * @param {string} variant - "default" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error"
 * @param {boolean} open - Force tooltip to stay open
 */
const Tooltip = forwardRef(function Tooltip(
  {
    children,
    content,
    position = "top",
    variant = "default",
    open = false,
    className = "",
    ...props
  },
  ref
) {
  const positionClasses = {
    top: "tooltip-top",
    bottom: "tooltip-bottom",
    left: "tooltip-left",
    right: "tooltip-right",
  };

  const variantClasses = {
    default: "",
    primary: "tooltip-primary",
    secondary: "tooltip-secondary",
    accent: "tooltip-accent",
    info: "tooltip-info",
    success: "tooltip-success",
    warning: "tooltip-warning",
    error: "tooltip-error",
  };

  const classes = [
    "tooltip",
    positionClasses[position],
    variantClasses[variant],
    open && "tooltip-open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} data-tip={content} {...props}>
      {children}
    </div>
  );
});

export default Tooltip;
