"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Checkbox from "../../../../components/ui/Checkbox";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <ShowcasePage
      title="Checkbox"
      description="Checkboxes are used to select or deselect a value."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple checkbox input.">
        <ShowcaseItem title="Default Checkbox">
          <Checkbox />
          <Checkbox defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <Checkbox label="Remember me" />
          <Checkbox label="I agree to terms" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <Checkbox color="primary" label="Primary" defaultChecked />
          <Checkbox color="secondary" label="Secondary" defaultChecked />
          <Checkbox color="accent" label="Accent" defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Checkbox color="info" label="Info" defaultChecked />
          <Checkbox color="success" label="Success" defaultChecked />
          <Checkbox color="warning" label="Warning" defaultChecked />
          <Checkbox color="error" label="Error" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different checkbox sizes.">
        <ShowcaseItem title="All Sizes">
          <Checkbox size="xs" label="Tiny (xs)" defaultChecked />
          <Checkbox size="sm" label="Small (sm)" defaultChecked />
          <Checkbox size="md" label="Medium (md)" defaultChecked />
          <Checkbox size="lg" label="Large (lg)" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection title="Controlled" description="Controlled checkbox with state.">
        <ShowcaseItem title="Controlled Checkbox">
          <Checkbox
            label={`Checkbox is ${checked ? "checked" : "unchecked"}`}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
          />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled checkboxes.">
        <ShowcaseItem title="Disabled">
          <Checkbox disabled label="Disabled unchecked" />
          <Checkbox disabled defaultChecked label="Disabled checked" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Checkbox Group */}
      <ShowcaseSection title="Checkbox Group" description="Multiple checkboxes.">
        <ShowcaseItem title="Options List">
          <div className="space-y-1">
            <Checkbox label="Email notifications" color="primary" defaultChecked />
            <Checkbox label="SMS notifications" color="primary" />
            <Checkbox label="Push notifications" color="primary" defaultChecked />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
