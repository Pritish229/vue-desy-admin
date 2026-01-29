"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Tooltip from "../../../../components/ui/Tooltip";
import Button from "../../../../components/ui/Button";
import { Info, HelpCircle } from "lucide-react";

export default function TooltipPage() {
  return (
    <ShowcasePage
      title="Tooltip"
      description="Tooltip shows a message when hovering over an element."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Wrap any element with Tooltip to show a message on hover.">
        <ShowcaseItem title="Simple Tooltip">
          <Tooltip content="Hello! I'm a tooltip.">
            <Button>Hover me</Button>
          </Tooltip>
        </ShowcaseItem>

        <ShowcaseItem title="On Different Elements">
          <Tooltip content="This is a link">
            <a href="#" className="link link-primary">Hover this link</a>
          </Tooltip>
          <Tooltip content="More information here">
            <Info className="w-5 h-5 text-info cursor-help" />
          </Tooltip>
          <Tooltip content="Need help?">
            <HelpCircle className="w-5 h-5 text-base-content/60 cursor-help" />
          </Tooltip>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Positions */}
      <ShowcaseSection title="Positions" description="Use the position prop to change tooltip placement.">
        <ShowcaseItem title="All Positions">
          <Tooltip content="I'm on top!" position="top">
            <Button size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="I'm at the bottom!" position="bottom">
            <Button size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="I'm on the left!" position="left">
            <Button size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="I'm on the right!" position="right">
            <Button size="sm">Right</Button>
          </Tooltip>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Color Variants */}
      <ShowcaseSection title="Color Variants" description="Match tooltip color to your context.">
        <ShowcaseItem title="Brand Colors">
          <Tooltip content="Primary tooltip" variant="primary">
            <Button variant="primary" size="sm">Primary</Button>
          </Tooltip>
          <Tooltip content="Secondary tooltip" variant="secondary">
            <Button variant="secondary" size="sm">Secondary</Button>
          </Tooltip>
          <Tooltip content="Accent tooltip" variant="accent">
            <Button variant="accent" size="sm">Accent</Button>
          </Tooltip>
        </ShowcaseItem>

        <ShowcaseItem title="State Colors">
          <Tooltip content="Informational tip" variant="info">
            <Button variant="info" size="sm">Info</Button>
          </Tooltip>
          <Tooltip content="Great job!" variant="success">
            <Button variant="success" size="sm">Success</Button>
          </Tooltip>
          <Tooltip content="Be careful!" variant="warning">
            <Button variant="warning" size="sm">Warning</Button>
          </Tooltip>
          <Tooltip content="Something went wrong" variant="error">
            <Button variant="error" size="sm">Error</Button>
          </Tooltip>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Always Open */}
      <ShowcaseSection title="Open State" description="Force tooltip to stay visible.">
        <ShowcaseItem title="Always Open Tooltip">
          <div className="py-4">
            <Tooltip content="I'm always visible!" open position="right">
              <Button>Open Tooltip</Button>
            </Tooltip>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Use Cases */}
      <ShowcaseSection title="Common Use Cases" description="Real-world tooltip applications.">
        <ShowcaseItem title="Icon Buttons">
          <div className="flex gap-1">
            <Tooltip content="Edit item">
              <button className="btn btn-ghost btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </Tooltip>
            <Tooltip content="Delete item" variant="error">
              <button className="btn btn-ghost btn-circle btn-sm text-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </Tooltip>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Form Help">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email address</span>
              <Tooltip content="We'll never share your email with anyone" position="left">
                <HelpCircle className="w-4 h-4 text-base-content/50 cursor-help" />
              </Tooltip>
            </label>
            <input type="email" placeholder="you@example.com" className="input input-bordered w-full" />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Disabled Button Explanation">
          <Tooltip content="Please fill all required fields first" variant="warning">
            <span>
              <Button disabled>Submit</Button>
            </span>
          </Tooltip>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
