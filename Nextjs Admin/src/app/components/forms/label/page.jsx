"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Label, { FormLabel } from "../../../../components/ui/Label";

export default function LabelPage() {
  return (
    <ShowcasePage
      title="Label"
      description="Label is used to provide a name or title for an input field."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Labels for form fields.">
        <ShowcaseItem title="Simple Label">
          <div className="w-full">
            <FormLabel>Username</FormLabel>
            <input className="input input-bordered w-full" placeholder="Enter username" />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="With Required Indicator">
          <div className="w-full">
            <FormLabel required>Email</FormLabel>
            <input className="input input-bordered w-full" placeholder="Enter email" />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Label Component */}
      <ShowcaseSection title="Label Component" description="Full label wrapper with hints.">
        <ShowcaseItem title="With Alt Text">
          <Label text="Password" altText="Required">
            <input className="input input-bordered w-full" type="password" placeholder="Enter password" />
          </Label>
        </ShowcaseItem>

        <ShowcaseItem title="With Hint">
          <Label text="Bio" hint="Max 200 characters">
            <textarea className="textarea textarea-bordered w-full" placeholder="Tell us about yourself" />
          </Label>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Full Example */}
      <ShowcaseSection title="Complete Examples" description="Labels with all features.">
        <ShowcaseItem title="With All Options">
          <Label text="Profile Picture" altText="Optional" hint="JPG, PNG or GIF" altHint="Max 2MB">
            <input type="file" className="file-input file-input-bordered w-full" />
          </Label>
        </ShowcaseItem>

        <ShowcaseItem title="Required Field">
          <Label text="Full Name" required>
            <input className="input input-bordered w-full" placeholder="John Doe" />
          </Label>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Raw Classes */}
      <ShowcaseSection title="Raw DaisyUI Classes" description="Using label classes directly.">
        <ShowcaseItem title="Label Classes">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">What is your name?</span>
              <span className="label-text-alt">Top Right</span>
            </label>
            <input className="input input-bordered w-full" placeholder="Type here" />
            <label className="label">
              <span className="label-text-alt">Bottom Left</span>
              <span className="label-text-alt">Bottom Right</span>
            </label>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Floating Label Pattern">
          <label className="floating-label w-full">
            <span>Email</span>
            <input type="email" placeholder="email@example.com" className="input input-bordered w-full" />
          </label>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
