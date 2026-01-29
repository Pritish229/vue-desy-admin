"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Toggle from "../../../../components/ui/Toggle";

export default function TogglePage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <ShowcasePage
      title="Toggle"
      description="Toggle is a checkbox styled to look like a switch button."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple toggle switch.">
        <ShowcaseItem title="Default Toggle">
          <Toggle />
          <Toggle defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <Toggle label="Enable notifications" />
          <Toggle label="Dark mode" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <Toggle color="primary" defaultChecked />
          <Toggle color="secondary" defaultChecked />
          <Toggle color="accent" defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Toggle color="info" defaultChecked />
          <Toggle color="success" defaultChecked />
          <Toggle color="warning" defaultChecked />
          <Toggle color="error" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different toggle sizes.">
        <ShowcaseItem title="All Sizes">
          <Toggle size="xs" defaultChecked />
          <Toggle size="sm" defaultChecked />
          <Toggle size="md" defaultChecked />
          <Toggle size="lg" defaultChecked />
        </ShowcaseItem>

        <ShowcaseItem title="Sizes with Labels">
          <Toggle size="xs" label="Tiny (xs)" defaultChecked />
          <Toggle size="sm" label="Small (sm)" defaultChecked />
          <Toggle size="md" label="Medium (md)" defaultChecked />
          <Toggle size="lg" label="Large (lg)" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Label Position */}
      <ShowcaseSection title="Label Position" description="Control label placement.">
        <ShowcaseItem title="Label Positions">
          <Toggle label="Label on right (default)" labelPosition="right" color="primary" defaultChecked />
          <Toggle label="Label on left" labelPosition="left" color="primary" defaultChecked />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection title="Controlled" description="Controlled toggle with state.">
        <ShowcaseItem title="Controlled Toggle">
          <Toggle
            label={`Feature is ${enabled ? "enabled" : "disabled"}`}
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            color="success"
          />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Settings Example */}
      <ShowcaseSection title="Settings Example" description="Real-world settings panel.">
        <ShowcaseItem title="Settings Panel">
          <div className="bg-base-200 p-4 rounded-lg space-y-2 w-full">
            <h4 className="font-semibold mb-3">Notification Settings</h4>
            <Toggle label="Email notifications" color="primary" defaultChecked />
            <Toggle label="Push notifications" color="primary" />
            <Toggle label="Weekly digest" color="primary" defaultChecked />
            <Toggle label="Marketing emails" color="primary" />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled toggles.">
        <ShowcaseItem title="Disabled">
          <Toggle disabled label="Disabled off" />
          <Toggle disabled defaultChecked label="Disabled on" />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
