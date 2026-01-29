"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import TextInput from "../../../../components/ui/TextInput";
import { Search, Mail, Lock, User } from "lucide-react";

export default function TextInputPage() {
  return (
    <ShowcasePage
      title="Text Input"
      description="Text Input is a simple input field for single-line text."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple text input with placeholder.">
        <ShowcaseItem title="Default Input">
          <TextInput placeholder="Type here..." />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <TextInput label="Username" placeholder="Enter username" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Variants */}
      <ShowcaseSection title="Variants" description="Bordered and ghost styles.">
        <ShowcaseItem title="Bordered (Default)">
          <TextInput variant="bordered" placeholder="Bordered input" />
        </ShowcaseItem>

        <ShowcaseItem title="Ghost">
          <TextInput variant="ghost" placeholder="Ghost input" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <TextInput color="primary" placeholder="Primary" />
          <TextInput color="secondary" placeholder="Secondary" />
          <TextInput color="accent" placeholder="Accent" />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <TextInput color="info" placeholder="Info" />
          <TextInput color="success" placeholder="Success" />
          <TextInput color="warning" placeholder="Warning" />
          <TextInput color="error" placeholder="Error" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different input sizes.">
        <ShowcaseItem title="All Sizes">
          <TextInput size="xs" placeholder="Tiny (xs)" />
          <TextInput size="sm" placeholder="Small (sm)" />
          <TextInput size="md" placeholder="Medium (md)" />
          <TextInput size="lg" placeholder="Large (lg)" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* With Labels and Hints */}
      <ShowcaseSection title="Labels & Hints" description="Input with label and helper text.">
        <ShowcaseItem title="With Hint">
          <TextInput label="Email" placeholder="you@example.com" hint="We'll never share your email" />
        </ShowcaseItem>

        <ShowcaseItem title="With Error">
          <TextInput label="Password" type="password" placeholder="Enter password" error="Password must be at least 8 characters" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Input Types */}
      <ShowcaseSection title="Input Types" description="Different HTML input types.">
        <ShowcaseItem title="Common Types">
          <TextInput type="email" placeholder="Email address" />
          <TextInput type="password" placeholder="Password" />
          <TextInput type="number" placeholder="Number" />
          <TextInput type="date" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* With Icons */}
      <ShowcaseSection title="With Icons" description="Input with icons using label wrapper.">
        <ShowcaseItem title="Icon Input">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <Search className="w-4 h-4 opacity-70" />
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="Multiple Icon Inputs">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <User className="w-4 h-4 opacity-70" />
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <Mail className="w-4 h-4 opacity-70" />
            <input type="email" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <Lock className="w-4 h-4 opacity-70" />
            <input type="password" className="grow" placeholder="Password" />
          </label>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled and readonly states.">
        <ShowcaseItem title="Disabled">
          <TextInput disabled placeholder="Disabled input" />
          <TextInput disabled value="Disabled with value" />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
