"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Radio, { RadioGroup } from "../../../../components/ui/Radio";

export default function RadioPage() {
  const [selected, setSelected] = useState("option1");
  const [plan, setPlan] = useState("basic");

  return (
    <ShowcasePage
      title="Radio"
      description="Radio buttons allow the user to select one option from a set."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple radio buttons.">
        <ShowcaseItem title="Default Radio">
          <Radio name="demo1" />
          <Radio name="demo1" defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <Radio name="demo2" label="Option A" />
          <Radio name="demo2" label="Option B" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <Radio name="c1" color="primary" label="Primary" defaultChecked />
          <Radio name="c2" color="secondary" label="Secondary" defaultChecked />
          <Radio name="c3" color="accent" label="Accent" defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Radio name="c4" color="info" label="Info" defaultChecked />
          <Radio name="c5" color="success" label="Success" defaultChecked />
          <Radio name="c6" color="warning" label="Warning" defaultChecked />
          <Radio name="c7" color="error" label="Error" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different radio sizes.">
        <ShowcaseItem title="All Sizes">
          <Radio name="s1" size="xs" label="Tiny (xs)" defaultChecked />
          <Radio name="s2" size="sm" label="Small (sm)" defaultChecked />
          <Radio name="s3" size="md" label="Medium (md)" defaultChecked />
          <Radio name="s4" size="lg" label="Large (lg)" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Radio Group */}
      <ShowcaseSection title="Radio Group" description="Group of radio buttons.">
        <ShowcaseItem title="Manual Group">
          <div className="space-y-1">
            <Radio name="manual" label="Option 1" color="primary" checked={selected === "option1"} onChange={() => setSelected("option1")} />
            <Radio name="manual" label="Option 2" color="primary" checked={selected === "option2"} onChange={() => setSelected("option2")} />
            <Radio name="manual" label="Option 3" color="primary" checked={selected === "option3"} onChange={() => setSelected("option3")} />
          </div>
          <div className="text-sm text-base-content/60">Selected: {selected}</div>
        </ShowcaseItem>

        <ShowcaseItem title="RadioGroup Component">
          <RadioGroup
            name="plan"
            value={plan}
            onChange={setPlan}
            color="secondary"
            options={[
              { value: "basic", label: "Basic Plan - $9/mo" },
              { value: "pro", label: "Pro Plan - $19/mo" },
              { value: "enterprise", label: "Enterprise - $49/mo" },
            ]}
          />
          <div className="text-sm text-base-content/60">Selected plan: {plan}</div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled radio buttons.">
        <ShowcaseItem title="Disabled">
          <Radio name="dis" disabled label="Disabled" />
          <Radio name="dis2" disabled defaultChecked label="Disabled checked" />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
