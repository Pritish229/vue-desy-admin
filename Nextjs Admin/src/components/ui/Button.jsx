import { forwardRef } from "react";

/**
 * Button Component
 * A versatile button with multiple variants, sizes, and states
 * 
 * @param {string} variant - "default" | "primary" | "secondary" | "accent" | "neutral" | "info" | "success" | "warning" | "error"
 * @param {string} style - "solid" | "outline" | "soft" | "ghost" | "link"
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {string} shape - "default" | "wide" | "block" | "square" | "circle"
 * @param {boolean} loading - Shows loading spinner
 * @param {boolean} disabled - Disables the button
 * @param {React.ReactNode} startIcon - Icon before text
 * @param {React.ReactNode} endIcon - Icon after text
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = "default",
    style = "solid",
    size = "md",
    shape = "default",
    loading = false,
    disabled = false,
    startIcon,
    endIcon,
    className = "",
    ...props
  },
  ref
) {
  // Variant classes (colors)
  const variantClasses = {
    default: "",
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
    neutral: "btn-neutral",
    info: "btn-info",
    success: "btn-success",
    warning: "btn-warning",
    error: "btn-error",
  };

  // Style classes
  const styleClasses = {
    solid: "",
    outline: "btn-outline",
    soft: "btn-soft",
    ghost: "btn-ghost",
    link: "btn-link",
  };

  // Size classes
  const sizeClasses = {
    xs: "btn-xs",
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  // Shape classes
  const shapeClasses = {
    default: "",
    wide: "btn-wide",
    block: "btn-block",
    square: "btn-square",
    circle: "btn-circle",
  };

  const classes = [
    "btn",
    variantClasses[variant],
    styleClasses[style],
    sizeClasses[size],
    shapeClasses[shape],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
      {loading && <span className="loading loading-spinner loading-sm"></span>}
      {!loading && startIcon}
      {children}
      {!loading && endIcon}
    </button>
  );
});

export default Button;

// Named exports for specific button types
export function IconButton({ icon, ...props }) {
  return (
    <Button shape="square" {...props}>
      {icon}
    </Button>
  );
}

export function CircleButton({ icon, ...props }) {
  return (
    <Button shape="circle" {...props}>
      {icon}
    </Button>
  );
}
