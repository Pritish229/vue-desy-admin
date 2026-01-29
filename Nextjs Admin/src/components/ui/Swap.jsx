"use client";

import { forwardRef } from "react";

/**
 * Swap Component
 * Toggle visibility between two elements with optional animation
 * 
 * @param {string} effect - "none" | "rotate" | "flip"
 * @param {boolean} active - Controlled state
 * @param {function} onChange - Called when toggled
 * @param {React.ReactNode} on - Content shown when active
 * @param {React.ReactNode} off - Content shown when inactive
 */
const Swap = forwardRef(function Swap(
  {
    effect = "none",
    active,
    onChange,
    on,
    off,
    className = "",
    ...props
  },
  ref
) {
  const effectClasses = {
    none: "",
    rotate: "swap-rotate",
    flip: "swap-flip",
  };

  const classes = ["swap", effectClasses[effect], className]
    .filter(Boolean)
    .join(" ");

  const isControlled = active !== undefined;

  return (
    <label ref={ref} className={classes} {...props}>
      <input
        type="checkbox"
        checked={isControlled ? active : undefined}
        onChange={onChange}
      />
      <div className="swap-on">{on}</div>
      <div className="swap-off">{off}</div>
    </label>
  );
});

export default Swap;

/**
 * SwapIcon - Convenience component for icon swapping
 */
export function SwapIcon({ onIcon, offIcon, effect = "rotate", ...props }) {
  return (
    <Swap
      effect={effect}
      on={onIcon}
      off={offIcon}
      {...props}
    />
  );
}
