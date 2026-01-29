"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import FileInput from "../../../../components/ui/FileInput";

export default function FileInputPage() {
  return (
    <ShowcasePage
      title="File Input"
      description="File Input is an input field for uploading files."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple file input.">
        <ShowcaseItem title="Default File Input">
          <FileInput />
        </ShowcaseItem>

        <ShowcaseItem title="With Label">
          <FileInput label="Upload file" hint="Max file size: 10MB" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Colors */}
      <ShowcaseSection title="Colors" description="Different color variants.">
        <ShowcaseItem title="Brand Colors">
          <FileInput color="primary" />
          <FileInput color="secondary" />
          <FileInput color="accent" />
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <FileInput color="success" />
          <FileInput color="warning" />
          <FileInput color="error" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different input sizes.">
        <ShowcaseItem title="All Sizes">
          <FileInput size="xs" />
          <FileInput size="sm" />
          <FileInput size="md" />
          <FileInput size="lg" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Variants */}
      <ShowcaseSection title="Variants" description="Bordered and ghost styles.">
        <ShowcaseItem title="Bordered (Default)">
          <FileInput variant="bordered" />
        </ShowcaseItem>

        <ShowcaseItem title="Ghost">
          <FileInput variant="ghost" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* File Types */}
      <ShowcaseSection title="Accept Types" description="Restrict file types.">
        <ShowcaseItem title="Image Files">
          <FileInput label="Profile Picture" accept="image/*" hint="JPG, PNG, GIF" />
        </ShowcaseItem>

        <ShowcaseItem title="Documents">
          <FileInput label="Resume" accept=".pdf,.doc,.docx" hint="PDF or Word document" />
        </ShowcaseItem>

        <ShowcaseItem title="Multiple Files">
          <FileInput label="Attachments" multiple hint="Select multiple files" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* With Error */}
      <ShowcaseSection title="Validation" description="Error state.">
        <ShowcaseItem title="With Error">
          <FileInput label="Document" error="Please upload a file" />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Disabled */}
      <ShowcaseSection title="States" description="Disabled file input.">
        <ShowcaseItem title="Disabled">
          <FileInput disabled label="Disabled" />
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
