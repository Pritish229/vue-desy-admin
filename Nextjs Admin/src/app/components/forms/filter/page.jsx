"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Filter from "../../../../components/ui/Filter";

export default function FilterPage() {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  return (
    <ShowcasePage
      title="Filter"
      description="Filter is a group of radio buttons. When an option is selected, others hide and a reset button appears."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple filter buttons.">
        <ShowcaseItem title="Category Filter">
          <div className="space-y-2">
            <Filter
              value={category}
              onChange={setCategory}
              options={[
                { value: "all", label: "All" },
                { value: "tech", label: "Technology" },
                { value: "design", label: "Design" },
                { value: "business", label: "Business" },
              ]}
            />
            <p className="text-sm text-base-content/60">Selected: {category || "none"}</p>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Status Filter">
          <div className="space-y-2">
            <Filter
              value={status}
              onChange={setStatus}
              options={[
                { value: "active", label: "Active" },
                { value: "pending", label: "Pending" },
                { value: "completed", label: "Completed" },
              ]}
            />
            <p className="text-sm text-base-content/60">Selected: {status || "none"}</p>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Raw Classes */}
      <ShowcaseSection title="Raw DaisyUI Classes" description="Using filter classes directly.">
        <ShowcaseItem title="Filter Component">
          <div className="filter">
            <input className="btn btn-square btn-ghost filter-reset" type="radio" name="filter-raw" aria-label="Reset" defaultChecked />
            <input className="btn filter-btn" type="radio" name="filter-raw" aria-label="All" />
            <input className="btn filter-btn" type="radio" name="filter-raw" aria-label="New" />
            <input className="btn filter-btn" type="radio" name="filter-raw" aria-label="Popular" />
            <input className="btn filter-btn" type="radio" name="filter-raw" aria-label="Trending" />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="With Checkbox Base" description="Filter with checkbox for multi-select feel">
          <div className="filter">
            <input className="btn btn-square filter-reset" type="checkbox" aria-label="×" />
            <input className="btn filter-btn" type="radio" name="frameworks" aria-label="React" />
            <input className="btn filter-btn" type="radio" name="frameworks" aria-label="Vue" />
            <input className="btn filter-btn" type="radio" name="frameworks" aria-label="Angular" />
            <input className="btn filter-btn" type="radio" name="frameworks" aria-label="Svelte" />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Use Cases */}
      <ShowcaseSection title="Use Cases" description="Real-world filter examples.">
        <ShowcaseItem title="Product Categories">
          <div className="filter">
            <input className="btn btn-square btn-ghost filter-reset" type="radio" name="products" aria-label="Reset" defaultChecked />
            <input className="btn filter-btn" type="radio" name="products" aria-label="Electronics" />
            <input className="btn filter-btn" type="radio" name="products" aria-label="Clothing" />
            <input className="btn filter-btn" type="radio" name="products" aria-label="Books" />
            <input className="btn filter-btn" type="radio" name="products" aria-label="Home" />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Time Period">
          <div className="filter">
            <input className="btn btn-square btn-ghost filter-reset" type="radio" name="time" aria-label="Reset" defaultChecked />
            <input className="btn filter-btn" type="radio" name="time" aria-label="Today" />
            <input className="btn filter-btn" type="radio" name="time" aria-label="This Week" />
            <input className="btn filter-btn" type="radio" name="time" aria-label="This Month" />
            <input className="btn filter-btn" type="radio" name="time" aria-label="This Year" />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
