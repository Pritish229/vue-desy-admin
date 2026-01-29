"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Select from "../../../../components/ui/Select";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
];

export default function SelectPage() {
  const [country, setCountry] = useState("");

  return (
    <ShowcasePage
      title="Select"
      description="Select is used to pick a value from a list of options."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple select dropdown.">
        <ShowcaseItem title="Default Select">
          <Select placeholder="Pick one">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>
        </ShowcaseItem>

        <ShowcaseItem title="With Options Array">
          <Select placeholder="Select country" options={countryOptions} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* With Label */}
      <ShowcaseSection title="With Label" description="Select with label and hint.">
        <ShowcaseItem title="Labeled Select">
          <Select label="Country" placeholder="Select your country" options={countryOptions} hint="We ship worldwide" />
        </ShowcaseItem>

        <ShowcaseItem title="With Error">
          <Select
            label="Category"
            placeholder="Select category"
            options={[
              { value: "tech", label: "Technology" },
              { value: "fashion", label: "Fashion" },
            ]}
            error="Please select a category"
          />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <Select color="primary" placeholder="Primary" options={countryOptions} />
          <Select color="secondary" placeholder="Secondary" options={countryOptions} />
          <Select color="accent" placeholder="Accent" options={countryOptions} />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Select color="success" placeholder="Success" options={countryOptions} />
          <Select color="warning" placeholder="Warning" options={countryOptions} />
          <Select color="error" placeholder="Error" options={countryOptions} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different select sizes.">
        <ShowcaseItem title="All Sizes">
          <Select size="xs" placeholder="Tiny (xs)" options={countryOptions} />
          <Select size="sm" placeholder="Small (sm)" options={countryOptions} />
          <Select size="md" placeholder="Medium (md)" options={countryOptions} />
          <Select size="lg" placeholder="Large (lg)" options={countryOptions} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Variants */}
      <ShowcaseSection title="Variants" description="Bordered and ghost styles.">
        <ShowcaseItem title="Bordered (Default)">
          <Select variant="bordered" placeholder="Bordered" options={countryOptions} />
        </ShowcaseItem>

        <ShowcaseItem title="Ghost">
          <Select variant="ghost" placeholder="Ghost" options={countryOptions} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection title="Controlled" description="Controlled select with state.">
        <ShowcaseItem title="Controlled Select">
          <Select
            label="Select Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Select country"
            options={countryOptions}
            color="primary"
          />
          <div className="text-sm text-base-content/60">Selected: {country || "none"}</div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled select.">
        <ShowcaseItem title="Disabled">
          <Select disabled placeholder="Disabled select" options={countryOptions} />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
