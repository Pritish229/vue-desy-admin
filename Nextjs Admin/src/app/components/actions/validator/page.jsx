"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import ValidatedInput, { EmailInput, PasswordInput, RequiredInput, PatternInput } from "../../../../components/ui/Validator";
import Button from "../../../../components/ui/Button";

export default function ValidatorPage() {
  return (
    <ShowcasePage
      title="Validator"
      description="Validator changes the color of form elements based on HTML5 validation rules."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="The validator class shows error/success states based on input validity.">
        <ShowcaseItem title="Validated Input">
          <ValidatedInput
            type="email"
            required
            placeholder="Enter your email"
            hint="Please enter a valid email address"
          />
        </ShowcaseItem>

        <ShowcaseItem title="Raw Class Usage">
          <div className="form-control w-full">
            <input
              type="email"
              required
              placeholder="Email (raw class usage)"
              className="input input-bordered w-full validator"
            />
            <label className="label">
              <span className="label-text-alt validator-hint text-error">
                Please enter a valid email address
              </span>
            </label>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Pre-configured Components */}
      <ShowcaseSection title="Pre-configured Inputs" description="Ready-to-use validated input components.">
        <ShowcaseItem title="Email Input">
          <EmailInput placeholder="Work email address" />
        </ShowcaseItem>

        <ShowcaseItem title="Password Input">
          <PasswordInput placeholder="Enter password (min 8 chars)" />
        </ShowcaseItem>

        <ShowcaseItem title="Required Input">
          <RequiredInput placeholder="Username (required)" />
        </ShowcaseItem>

        <ShowcaseItem title="Pattern Input">
          <PatternInput
            pattern="[A-Za-z]{3,}"
            placeholder="Letters only (min 3)"
            hint="Only letters allowed, minimum 3 characters"
          />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Validation Types */}
      <ShowcaseSection title="Validation Types" description="Different HTML5 validation attributes.">
        <ShowcaseItem title="Required Validation" description="Field must not be empty">
          <input type="text" required placeholder="This field is required" className="input input-bordered w-full validator" />
        </ShowcaseItem>

        <ShowcaseItem title="Email Validation" description="Must be a valid email format">
          <input type="email" required placeholder="email@example.com" className="input input-bordered w-full validator" />
        </ShowcaseItem>

        <ShowcaseItem title="URL Validation" description="Must be a valid URL">
          <input type="url" required placeholder="https://example.com" className="input input-bordered w-full validator" />
        </ShowcaseItem>

        <ShowcaseItem title="Min/Max Length" description="Character count constraints">
          <input type="text" minLength={5} maxLength={20} placeholder="5-20 characters" className="input input-bordered w-full validator" />
        </ShowcaseItem>

        <ShowcaseItem title="Pattern Validation" description="Must match regex pattern">
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" className="input input-bordered w-full validator" />
        </ShowcaseItem>

        <ShowcaseItem title="Number Range" description="Number within min/max bounds">
          <input type="number" min={1} max={100} placeholder="1-100" className="input input-bordered w-full validator" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Form Example */}
      <ShowcaseSection title="Complete Form Example" description="A registration form with multiple validated fields.">
        <ShowcaseItem title="Registration Form">
          <form className="space-y-3 w-full" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
            <input type="text" required placeholder="Full Name" className="input input-bordered w-full validator" />
            <input type="email" required placeholder="Email Address" className="input input-bordered w-full validator" />
            <input type="password" minLength={8} required placeholder="Password (min 8 characters)" className="input input-bordered w-full validator" />
            <input type="tel" pattern="[0-9]{10}" placeholder="Phone Number (10 digits)" className="input input-bordered w-full validator" />
            <Button variant="primary" shape="block">Create Account</Button>
          </form>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
