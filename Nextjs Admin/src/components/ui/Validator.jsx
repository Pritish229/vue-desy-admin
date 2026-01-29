import { forwardRef } from "react";

/**
 * ValidatedInput Component
 * Input with built-in validation styling
 * 
 * @param {string} type - Input type
 * @param {string} hint - Error hint message
 * @param {string} successHint - Success hint message
 */
const ValidatedInput = forwardRef(function ValidatedInput(
  {
    type = "text",
    hint,
    successHint,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div className="form-control w-full">
      <input
        ref={ref}
        type={type}
        className={`input input-bordered w-full validator ${className}`}
        {...props}
      />
      {(hint || successHint) && (
        <label className="label">
          {hint && (
            <span className="label-text-alt validator-hint text-error">
              {hint}
            </span>
          )}
        </label>
      )}
    </div>
  );
});

export default ValidatedInput;

/**
 * Pre-configured validated inputs
 */

export function EmailInput({ hint = "Please enter a valid email", ...props }) {
  return (
    <ValidatedInput
      type="email"
      required
      hint={hint}
      placeholder="Email address"
      {...props}
    />
  );
}

export function PasswordInput({ 
  minLength = 8, 
  hint = `Password must be at least ${minLength} characters`,
  ...props 
}) {
  return (
    <ValidatedInput
      type="password"
      minLength={minLength}
      hint={hint}
      placeholder="Password"
      {...props}
    />
  );
}

export function RequiredInput({ hint = "This field is required", ...props }) {
  return (
    <ValidatedInput
      required
      hint={hint}
      {...props}
    />
  );
}

export function PatternInput({ 
  pattern, 
  hint = "Please match the required format",
  ...props 
}) {
  return (
    <ValidatedInput
      pattern={pattern}
      hint={hint}
      {...props}
    />
  );
}
