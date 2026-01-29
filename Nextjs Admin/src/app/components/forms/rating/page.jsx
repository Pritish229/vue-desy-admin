"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Rating from "../../../../components/ui/Rating";

export default function RatingPage() {
  const [rating, setRating] = useState(3);
  const [halfRating, setHalfRating] = useState(3.5);

  return (
    <ShowcasePage
      title="Rating"
      description="Rating is a set of radio buttons that allow the user to rate something."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple star rating.">
        <ShowcaseItem title="Default Rating">
          <Rating value={rating} onChange={setRating} />
          <span className="text-sm text-base-content/60">Rating: {rating}</span>
        </ShowcaseItem>

        <ShowcaseItem title="Different Max">
          <Rating max={10} value={7} onChange={() => {}} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="Different rating sizes.">
        <ShowcaseItem title="All Sizes">
          <Rating size="xs" value={3} onChange={() => {}} />
          <Rating size="sm" value={3} onChange={() => {}} />
          <Rating size="md" value={3} onChange={() => {}} />
          <Rating size="lg" value={3} onChange={() => {}} />
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Masks/Shapes */}
      <ShowcaseSection title="Shapes" description="Different icon shapes using masks.">
        <ShowcaseItem title="Star Shapes">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm w-16">star:</span>
              <Rating mask="star" value={3} onChange={() => {}} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-16">star-2:</span>
              <Rating mask="star-2" value={3} onChange={() => {}} />
            </div>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Other Shapes">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm w-16">heart:</span>
              <Rating mask="heart" value={3} onChange={() => {}} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-16">circle:</span>
              <Rating mask="circle" value={3} onChange={() => {}} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-16">diamond:</span>
              <Rating mask="diamond" value={3} onChange={() => {}} />
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Half Stars */}
      <ShowcaseSection title="Half Stars" description="Allow half-star ratings.">
        <ShowcaseItem title="Half Rating">
          <Rating half value={halfRating} onChange={setHalfRating} size="lg" />
          <span className="text-sm text-base-content/60">Rating: {halfRating}</span>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Read Only */}
      <ShowcaseSection title="Read Only" description="Display-only rating.">
        <ShowcaseItem title="Read Only Rating">
          <div className="flex items-center gap-2">
            <Rating readOnly value={4} />
            <span className="text-sm text-base-content/60">(4.0)</span>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Product Ratings">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Rating readOnly value={5} size="sm" />
              <span className="text-sm">5.0 (128 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Rating readOnly value={4} size="sm" />
              <span className="text-sm">4.0 (89 reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Rating readOnly value={3} size="sm" />
              <span className="text-sm">3.0 (42 reviews)</span>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Custom Colors */}
      <ShowcaseSection title="Custom Colors" description="Using custom background colors.">
        <ShowcaseItem title="Colored Ratings">
          <div className="rating rating-lg">
            <input type="radio" name="rating-orange" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-orange" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-orange" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-orange" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-orange" className="mask mask-star-2 bg-orange-400" />
          </div>
          <div className="rating rating-lg">
            <input type="radio" name="rating-red" className="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-red" className="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-red" className="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-red" className="mask mask-heart bg-red-400" defaultChecked />
            <input type="radio" name="rating-red" className="mask mask-heart bg-red-400" />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
