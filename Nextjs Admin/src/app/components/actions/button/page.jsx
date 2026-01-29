"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Button, { IconButton, CircleButton } from "../../../../components/ui/Button";
import { Heart, Send, Download, Trash2, Plus, ArrowRight, Settings } from "lucide-react";

export default function ButtonPage() {
  return (
    <ShowcasePage
      title="Button"
      description="Buttons allow users to take actions or make choices with a single tap."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="The default button and its primary variants.">
        <ShowcaseItem title="Default Button">
          <Button>Button</Button>
          <Button variant="neutral">Neutral</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Brand Colors">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* State Colors */}
      <ShowcaseSection title="State Colors" description="Buttons for different states and feedback.">
        <ShowcaseItem title="Info & Success">
          <Button variant="info">Info</Button>
          <Button variant="success">Success</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Warning & Error">
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Button Styles */}
      <ShowcaseSection title="Button Styles" description="Different visual styles for buttons.">
        <ShowcaseItem title="Solid (default)">
          <Button variant="primary">Solid</Button>
          <Button variant="secondary">Solid</Button>
          <Button variant="accent">Solid</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Outline">
          <Button variant="primary" style="outline">Outline</Button>
          <Button variant="secondary" style="outline">Outline</Button>
          <Button variant="accent" style="outline">Outline</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Soft">
          <Button variant="primary" style="soft">Soft</Button>
          <Button variant="secondary" style="soft">Soft</Button>
          <Button variant="accent" style="soft">Soft</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Ghost">
          <Button style="ghost">Ghost</Button>
          <Button variant="primary" style="ghost">Ghost</Button>
          <Button variant="error" style="ghost">Ghost</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Link">
          <Button style="link">Link Button</Button>
          <Button variant="primary" style="link">Primary Link</Button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Buttons in different sizes.">
        <ShowcaseItem title="Size Variants">
          <Button variant="primary" size="xs">Extra Small</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Shapes */}
      <ShowcaseSection title="Shapes" description="Different button shapes for various use cases.">
        <ShowcaseItem title="Wide Button">
          <Button variant="primary" shape="wide">Wide Button</Button>
        </ShowcaseItem>

        <ShowcaseItem title="Block Button">
          <div className="w-full">
            <Button variant="primary" shape="block">Block Button (Full Width)</Button>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Square & Circle">
          <IconButton variant="primary" icon={<Plus className="w-5 h-5" />} />
          <CircleButton variant="secondary" icon={<Heart className="w-5 h-5" />} />
          <CircleButton variant="accent" icon={<Settings className="w-5 h-5" />} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* With Icons */}
      <ShowcaseSection title="With Icons" description="Buttons with leading or trailing icons.">
        <ShowcaseItem title="Start Icon">
          <Button variant="primary" startIcon={<Download className="w-4 h-4" />}>
            Download
          </Button>
          <Button variant="error" startIcon={<Trash2 className="w-4 h-4" />}>
            Delete
          </Button>
        </ShowcaseItem>

        <ShowcaseItem title="End Icon">
          <Button variant="primary" endIcon={<ArrowRight className="w-4 h-4" />}>
            Continue
          </Button>
          <Button variant="success" endIcon={<Send className="w-4 h-4" />}>
            Send
          </Button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* States */}
      <ShowcaseSection title="States" description="Button states for loading and disabled.">
        <ShowcaseItem title="Loading State">
          <Button variant="primary" loading>Loading</Button>
          <Button variant="secondary" loading>Please wait</Button>
          <Button variant="accent" loading />
        </ShowcaseItem>

        <ShowcaseItem title="Disabled State">
          <Button disabled>Disabled</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="error" style="outline" disabled>Disabled</Button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Button Group */}
      <ShowcaseSection title="Button Group" description="Group related buttons together.">
        <ShowcaseItem title="Horizontal Group">
          <div className="join">
            <Button className="join-item">Left</Button>
            <Button className="join-item">Center</Button>
            <Button className="join-item">Right</Button>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Vertical Group">
          <div className="join join-vertical">
            <Button className="join-item">Top</Button>
            <Button className="join-item">Middle</Button>
            <Button className="join-item">Bottom</Button>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
