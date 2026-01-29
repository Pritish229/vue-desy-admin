"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Textarea from "../../../../components/ui/Textarea";

export default function TextareaPage() {
  return (
    <ShowcasePage
      title="Textarea"
      description="Textarea allows users to enter text in multiple lines."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple textarea input.">
        <ShowcaseItem title="Default Textarea">
          <Textarea placeholder="Type your message here..." />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <Textarea label="Bio" placeholder="Tell us about yourself" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Variants */}
      <ShowcaseSection title="Variants" description="Bordered and ghost styles.">
        <ShowcaseItem title="Bordered (Default)">
          <Textarea variant="bordered" placeholder="Bordered textarea" />
        </ShowcaseItem>

        <ShowcaseItem title="Ghost">
          <Textarea variant="ghost" placeholder="Ghost textarea" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <Textarea color="primary" placeholder="Primary" />
          <Textarea color="secondary" placeholder="Secondary" />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Textarea color="success" placeholder="Success" />
          <Textarea color="warning" placeholder="Warning" />
          <Textarea color="error" placeholder="Error" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different textarea sizes.">
        <ShowcaseItem title="All Sizes">
          <Textarea size="xs" placeholder="Tiny (xs)" rows={2} />
          <Textarea size="sm" placeholder="Small (sm)" rows={2} />
          <Textarea size="md" placeholder="Medium (md)" rows={2} />
          <Textarea size="lg" placeholder="Large (lg)" rows={2} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* With Labels and Hints */}
      <ShowcaseSection title="Labels & Hints" description="Textarea with label and helper text.">
        <ShowcaseItem title="With Hint">
          <Textarea label="Description" placeholder="Enter description" hint="Maximum 500 characters" />
        </ShowcaseItem>

        <ShowcaseItem title="With Error">
          <Textarea label="Comment" placeholder="Enter comment" error="Comment is required" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Rows */}
      <ShowcaseSection title="Custom Rows" description="Control textarea height with rows.">
        <ShowcaseItem title="Different Rows">
          <Textarea rows={2} placeholder="2 rows" />
          <Textarea rows={4} placeholder="4 rows" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled state.">
        <ShowcaseItem title="Disabled">
          <Textarea disabled placeholder="Disabled textarea" />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
