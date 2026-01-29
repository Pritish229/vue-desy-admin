"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Fieldset from "../../../../components/ui/Fieldset";
import TextInput from "../../../../components/ui/TextInput";
import Select from "../../../../components/ui/Select";
import Checkbox from "../../../../components/ui/Checkbox";
import Toggle from "../../../../components/ui/Toggle";

export default function FieldsetPage() {
  return (
    <ShowcasePage
      title="Fieldset"
      description="Fieldset is a container for grouping related form elements."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Group related form fields.">
        <ShowcaseItem title="Simple Fieldset">
          <Fieldset legend="Personal Information">
            <TextInput label="Name" placeholder="Enter name" />
            <TextInput label="Email" type="email" placeholder="Enter email" />
          </Fieldset>
        </ShowcaseItem>

        <ShowcaseItem title="With Description">
          <Fieldset legend="Account Settings" description="Configure your account preferences">
            <TextInput label="Username" placeholder="johndoe" />
            <TextInput label="Display Name" placeholder="John Doe" />
          </Fieldset>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Complex Forms */}
      <ShowcaseSection title="Complex Forms" description="Fieldsets with various inputs.">
        <ShowcaseItem title="Address Form">
          <Fieldset legend="Shipping Address">
            <TextInput label="Street Address" placeholder="123 Main St" />
            <div className="grid grid-cols-2 gap-4">
              <TextInput label="City" placeholder="New York" />
              <TextInput label="ZIP Code" placeholder="10001" />
            </div>
            <Select
              label="Country"
              placeholder="Select country"
              options={[
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
                { value: "ca", label: "Canada" },
              ]}
            />
          </Fieldset>
        </ShowcaseItem>

        <ShowcaseItem title="Preferences">
          <Fieldset legend="Notification Preferences" description="Choose how you want to be notified">
            <Toggle label="Email notifications" color="primary" defaultChecked />
            <Toggle label="Push notifications" color="primary" />
            <Toggle label="SMS alerts" color="primary" />
          </Fieldset>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Multiple Fieldsets */}
      <ShowcaseSection title="Multiple Fieldsets" description="Organize forms with multiple groups.">
        <ShowcaseItem title="Registration Form">
          <form className="space-y-4 w-full">
            <Fieldset legend="Account Details">
              <TextInput label="Email" type="email" placeholder="you@example.com" />
              <TextInput label="Password" type="password" placeholder="••••••••" />
            </Fieldset>
            <Fieldset legend="Terms & Conditions">
              <Checkbox label="I agree to the Terms of Service" color="primary" />
              <Checkbox label="I want to receive marketing emails" />
            </Fieldset>
          </form>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled Fieldset */}
      <ShowcaseSection title="Disabled State" description="Disable all inputs in fieldset.">
        <ShowcaseItem title="Disabled Fieldset">
          <Fieldset legend="Payment Information" disabled description="Upgrade to enable payment">
            <TextInput label="Card Number" placeholder="1234 5678 9012 3456" />
            <div className="grid grid-cols-2 gap-4">
              <TextInput label="Expiry Date" placeholder="MM/YY" />
              <TextInput label="CVV" placeholder="123" />
            </div>
          </Fieldset>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Raw Classes */}
      <ShowcaseSection title="Raw DaisyUI Classes" description="Using fieldset classes directly.">
        <ShowcaseItem title="Fieldset Classes">
          <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box w-full">
            <legend className="fieldset-legend px-2 font-semibold">Contact Info</legend>
            <label className="fieldset-label">Your name</label>
            <input className="input w-full" placeholder="Enter name" />
            <label className="fieldset-label mt-2">Your email</label>
            <input className="input w-full" type="email" placeholder="Enter email" />
          </fieldset>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
