import { forwardRef } from "react";

/**
 * Label Component
 * Form label with optional helper text
 *
 * @param {string} text - Main label text
 * @param {string} altText - Alternative/helper text (right side)
 * @param {string} hint - Bottom hint text
 * @param {boolean} required - Show required indicator
 */
const Label = forwardRef(function Label(
  {
    text,
    altText,
    hint,
    altHint,
    required = false,
    children,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div ref={ref} className={`form-control w-full ${className}`} {...props}>
      {(text || altText) && (
        <label className="label">
          {text && (
            <span className="label-text">
              {text}
              {required && <span className="text-error ml-1">*</span>}
            </span>
          )}
          {altText && <span className="label-text-alt">{altText}</span>}
        </label>
      )}
      {children}
      {(hint || altHint) && (
        <label className="label">
          {hint && <span className="label-text-alt">{hint}</span>}
          {altHint && <span className="label-text-alt">{altHint}</span>}
        </label>
      )}
    </div>
  );
});

export default Label;

/**
 * FormLabel - Simple label for inputs
 */
export function FormLabel({ children, htmlFor, required, className = "" }) {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      <span className="label-text">
        {children}
        {required && <span className="text-error ml-1">*</span>}
      </span>
    </label>
  );
}
