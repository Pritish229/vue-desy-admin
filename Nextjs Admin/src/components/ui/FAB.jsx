import { forwardRef } from "react";
import { Plus } from "lucide-react";

/**
 * FAB (Floating Action Button) Component
 * A button that stays in the corner with optional speed dial
 * 
 * @param {string} position - "br" | "bl" | "tr" | "tl" (bottom-right, etc.)
 * @param {string} variant - Button color variant
 * @param {string} size - "sm" | "md" | "lg"
 * @param {React.ReactNode} icon - Main button icon
 * @param {React.ReactNode} children - Speed dial buttons
 */
const FAB = forwardRef(function FAB(
  {
    children,
    position = "br",
    variant = "primary",
    size = "lg",
    icon = <Plus className="w-6 h-6" />,
    className = "",
    ...props
  },
  ref
) {
  const positionClasses = {
    br: "fab-br",
    bl: "fab-bl",
    tr: "fab-tr",
    tl: "fab-tl",
  };

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

  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  // If there are children (speed dial buttons), use fab class
  if (children) {
    return (
      <div
        ref={ref}
        className={`fab ${positionClasses[position]} ${className}`}
        {...props}
      >
        <button
          className={`btn btn-circle ${variantClasses[variant]} ${sizeClasses[size]} shadow-lg`}
        >
          {icon}
        </button>
        {children}
      </div>
    );
  }

  // Simple FAB without speed dial
  return (
    <div
      ref={ref}
      className={`fixed ${getPositionStyle(position)} ${className}`}
      {...props}
    >
      <button
        className={`btn btn-circle ${variantClasses[variant]} ${sizeClasses[size]} shadow-lg`}
      >
        {icon}
      </button>
    </div>
  );
});

// Helper for simple FAB positioning
function getPositionStyle(position) {
  const styles = {
    br: "bottom-4 right-4",
    bl: "bottom-4 left-4",
    tr: "top-4 right-4",
    tl: "top-4 left-4",
  };
  return styles[position];
}

export default FAB;

/**
 * FABAction - Speed dial action button
 */
export function FABAction({ icon, variant = "default", className = "", ...props }) {
  const variantClasses = {
    default: "",
    primary: "btn-primary",
    secondary: "btn-secondary",
    accent: "btn-accent",
  };

  return (
    <button
      className={`btn btn-circle shadow ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
