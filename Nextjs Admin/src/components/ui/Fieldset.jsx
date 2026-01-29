import { forwardRef } from "react";

/**
 * Fieldset Component
 * Container for grouping form elements
 *
 * @param {string} legend - Fieldset title
 * @param {string} description - Optional description under legend
 * @param {boolean} disabled - Disable all child inputs
 */
const Fieldset = forwardRef(function Fieldset(
  {
    legend,
    description,
    disabled = false,
    children,
    className = "",
    ...props
  },
  ref
) {
  return (
    <fieldset
      ref={ref}
      className={`fieldset bg-base-200 border border-base-300 p-4 rounded-box ${className}`}
      disabled={disabled}
      {...props}
    >
      {legend && (
        <legend className="fieldset-legend px-2 text-base font-semibold">
          {legend}
        </legend>
      )}
      {description && (
        <p className="text-sm text-base-content/60 mb-4">{description}</p>
      )}
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
});

export default Fieldset;
