"use client";

import { forwardRef } from "react";

/**
 * Filter Component
 * Radio button group that shows only selected option with reset
 *
 * @param {array} options - Array of { value, label } objects
 * @param {string} value - Currently selected value
 * @param {function} onChange - Called when selection changes
 * @param {string} name - Input name for radio group
 */
const Filter = forwardRef(function Filter(
  {
    options = [],
    value,
    onChange,
    name,
    className = "",
    ...props
  },
  ref
) {
  const uniqueName = name || `filter-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div ref={ref} className={`filter ${className}`} {...props}>
      <input
        className="btn btn-square btn-ghost filter-reset"
        type="radio"
        name={uniqueName}
        aria-label="Reset"
        checked={!value}
        onChange={() => onChange?.("")}
      />
      {options.map((option) => (
        <input
          key={option.value}
          className="btn filter-btn"
          type="radio"
          name={uniqueName}
          aria-label={option.label}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
        />
      ))}
    </div>
  );
});

export default Filter;
