"use client";

import { forwardRef } from "react";

/**
 * Dropdown Component
 * A dropdown menu that opens on click or hover
 * 
 * @param {string} position - "bottom" | "top" | "left" | "right" | "end"
 * @param {boolean} hover - Opens on hover instead of click
 * @param {React.ReactNode} trigger - The trigger element (button)
 * @param {React.ReactNode} children - Dropdown content
 */
const Dropdown = forwardRef(function Dropdown(
  {
    children,
    trigger,
    position = "bottom",
    hover = false,
    align = "start",
    className = "",
    contentClassName = "",
    ...props
  },
  ref
) {
  const positionClasses = {
    bottom: "",
    top: "dropdown-top",
    left: "dropdown-left",
    right: "dropdown-right",
    end: "dropdown-end",
  };

  const classes = [
    "dropdown",
    positionClasses[position],
    hover && "dropdown-hover",
    align === "end" && "dropdown-end",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} {...props}>
      <div tabIndex={0} role="button">
        {trigger}
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-lg ${contentClassName}`}
      >
        {children}
      </ul>
    </div>
  );
});

export default Dropdown;

/**
 * DropdownItem Component
 * Individual item in a dropdown menu
 */
export function DropdownItem({ children, icon, disabled = false, className = "", ...props }) {
  return (
    <li className={disabled ? "disabled" : ""}>
      <a className={className} {...props}>
        {icon && <span className="w-4 h-4">{icon}</span>}
        {children}
      </a>
    </li>
  );
}

/**
 * DropdownDivider Component
 */
export function DropdownDivider() {
  return <li className="divider"></li>;
}
