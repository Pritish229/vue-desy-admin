"use client";

import { forwardRef, useState } from "react";

/**
 * Rating Component
 * Star rating input
 *
 * @param {string} size - "xs" | "sm" | "md" | "lg"
 * @param {number} max - Maximum rating (number of stars)
 * @param {number} value - Current rating value
 * @param {boolean} half - Allow half stars
 * @param {boolean} readOnly - Disable interaction
 * @param {string} mask - Shape mask: "star" | "star-2" | "heart" | "circle" | "diamond" | "square"
 */
const Rating = forwardRef(function Rating(
  {
    size = "md",
    max = 5,
    value = 0,
    onChange,
    half = false,
    readOnly = false,
    mask = "star-2",
    name,
    className = "",
    ...props
  },
  ref
) {
  const sizeClasses = {
    xs: "rating-xs",
    sm: "rating-sm",
    md: "",
    lg: "rating-lg",
  };

  const maskClasses = {
    star: "mask-star",
    "star-2": "mask-star-2",
    heart: "mask-heart",
    circle: "mask-circle",
    diamond: "mask-diamond",
    square: "mask-squircle",
  };

  const classes = [
    "rating",
    sizeClasses[size],
    half && "rating-half",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const uniqueName = name || `rating-${Math.random().toString(36).substr(2, 9)}`;

  if (half) {
    return (
      <div ref={ref} className={classes} {...props}>
        <input type="radio" name={uniqueName} className="rating-hidden" defaultChecked={value === 0} />
        {Array.from({ length: max }).map((_, i) => (
          <span key={i}>
            <input
              type="radio"
              name={uniqueName}
              className={`mask ${maskClasses[mask]} mask-half-1 bg-warning`}
              checked={value === i + 0.5}
              onChange={() => !readOnly && onChange?.(i + 0.5)}
              disabled={readOnly}
            />
            <input
              type="radio"
              name={uniqueName}
              className={`mask ${maskClasses[mask]} mask-half-2 bg-warning`}
              checked={value === i + 1}
              onChange={() => !readOnly && onChange?.(i + 1)}
              disabled={readOnly}
            />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={classes} {...props}>
      <input type="radio" name={uniqueName} className="rating-hidden" defaultChecked={value === 0} />
      {Array.from({ length: max }).map((_, i) => (
        <input
          key={i}
          type="radio"
          name={uniqueName}
          className={`mask ${maskClasses[mask]} bg-warning`}
          checked={value === i + 1}
          onChange={() => !readOnly && onChange?.(i + 1)}
          disabled={readOnly}
        />
      ))}
    </div>
  );
});

export default Rating;
