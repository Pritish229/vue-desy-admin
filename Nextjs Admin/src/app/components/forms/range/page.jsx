"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Range, { RangeWithSteps } from "../../../../components/ui/Range";

export default function RangePage() {
  const [value, setValue] = useState(50);
  const [volume, setVolume] = useState(75);

  return (
    <ShowcasePage
      title="Range Slider"
      description="Range slider is used to select a value by sliding a handle."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple range slider.">
        <ShowcaseItem title="Default Range">
          <Range />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <Range label="Volume" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection title="Controlled" description="Controlled range with value display.">
        <ShowcaseItem title="Show Value">
          <Range label="Brightness" value={value} onChange={(e) => setValue(Number(e.target.value))} showValue color="primary" />
        </ShowcaseItem>

        <ShowcaseItem title="Custom Range">
          <Range label="Volume" min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))} showValue color="secondary" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <Range color="primary" defaultValue={60} />
          <Range color="secondary" defaultValue={60} />
          <Range color="accent" defaultValue={60} />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Range color="success" defaultValue={80} />
          <Range color="warning" defaultValue={50} />
          <Range color="error" defaultValue={30} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different slider sizes.">
        <ShowcaseItem title="All Sizes">
          <Range size="xs" defaultValue={50} />
          <Range size="sm" defaultValue={50} />
          <Range size="md" defaultValue={50} />
          <Range size="lg" defaultValue={50} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Steps */}
      <ShowcaseSection title="With Steps" description="Range with step indicators.">
        <ShowcaseItem title="Step Markers">
          <RangeWithSteps steps={5} color="primary" />
        </ShowcaseItem>

        <ShowcaseItem title="Custom Steps">
          <div className="w-full">
            <Range step={25} min={0} max={100} color="secondary" />
            <div className="flex w-full justify-between px-2 text-xs mt-1">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Min/Max */}
      <ShowcaseSection title="Custom Range" description="Custom min, max, and step values.">
        <ShowcaseItem title="Temperature">
          <Range label="Temperature (°C)" min={-20} max={50} step={5} defaultValue={20} showValue color="info" />
        </ShowcaseItem>

        <ShowcaseItem title="Price Range">
          <Range label="Max Price ($)" min={0} max={1000} step={50} defaultValue={500} showValue color="success" />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
