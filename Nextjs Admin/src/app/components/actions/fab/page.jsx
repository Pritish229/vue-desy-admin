"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import { Plus, Home, Search, Settings, Edit, Share, Heart, MessageCircle } from "lucide-react";

export default function FABPage() {
  return (
    <ShowcasePage
      title="FAB / Speed Dial"
      description="Floating Action Button that stays in the corner of the screen with optional speed dial buttons."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic FAB" description="Simple floating action button.">
        <ShowcaseItem title="Default FAB">
          <div className="relative h-32 w-full bg-base-300 rounded-lg overflow-hidden">
            <div className="absolute bottom-4 right-4">
              <button className="btn btn-circle btn-primary btn-lg shadow-lg">
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Custom Icon & Variant">
          <div className="relative h-32 w-full bg-base-300 rounded-lg overflow-hidden">
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="btn btn-circle btn-secondary shadow-lg">
                <Heart className="w-5 h-5" />
              </button>
              <button className="btn btn-circle btn-accent shadow-lg">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Positions */}
      <ShowcaseSection title="Positions" description="FAB can be placed in different corners.">
        <ShowcaseItem title="All Positions">
          <div className="relative h-40 w-full bg-base-300 rounded-lg overflow-hidden">
            <div className="absolute top-3 left-3">
              <button className="btn btn-circle btn-sm btn-info shadow">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute top-3 right-3">
              <button className="btn btn-circle btn-sm btn-success shadow">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-3 left-3">
              <button className="btn btn-circle btn-sm btn-warning shadow">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-3 right-3">
              <button className="btn btn-circle btn-sm btn-primary shadow">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-sm text-base-content/50">
              tl | tr | bl | br
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Speed Dial */}
      <ShowcaseSection title="Speed Dial" description="FAB with additional action buttons that appear on focus/hover.">
        <ShowcaseItem title="Vertical Speed Dial">
          <div className="relative h-48 w-full bg-base-300 rounded-lg overflow-hidden">
            <div className="fab fab-br scale-90 z-10">
              <button className="btn btn-circle btn-primary btn-lg shadow-lg">
                <Plus className="w-6 h-6" />
              </button>
              <button className="btn btn-circle shadow">
                <Home className="w-5 h-5" />
              </button>
              <button className="btn btn-circle shadow">
                <Search className="w-5 h-5" />
              </button>
              <button className="btn btn-circle shadow">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Speed Dial Top-Left">
          <div className="relative h-48 w-full bg-base-300 rounded-lg overflow-hidden">
            <div className="fab fab-tl scale-90 z-10">
              <button className="btn btn-circle btn-secondary btn-lg shadow-lg">
                <Plus className="w-6 h-6" />
              </button>
              <button className="btn btn-circle shadow">
                <Edit className="w-5 h-5" />
              </button>
              <button className="btn btn-circle shadow">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Sizes */}
      <ShowcaseSection title="Sizes" description="FAB buttons in different sizes.">
        <ShowcaseItem title="Size Variants">
          <div className="flex items-end gap-4">
            <button className="btn btn-circle btn-primary btn-sm shadow">
              <Plus className="w-4 h-4" />
            </button>
            <button className="btn btn-circle btn-primary shadow">
              <Plus className="w-5 h-5" />
            </button>
            <button className="btn btn-circle btn-primary btn-lg shadow-lg">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Color Variants */}
      <ShowcaseSection title="Color Variants" description="FAB with different color variants.">
        <ShowcaseItem title="All Variants">
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-circle btn-primary shadow"><Plus className="w-5 h-5" /></button>
            <button className="btn btn-circle btn-secondary shadow"><Plus className="w-5 h-5" /></button>
            <button className="btn btn-circle btn-accent shadow"><Plus className="w-5 h-5" /></button>
            <button className="btn btn-circle btn-info shadow"><Plus className="w-5 h-5" /></button>
            <button className="btn btn-circle btn-success shadow"><Plus className="w-5 h-5" /></button>
            <button className="btn btn-circle btn-warning shadow"><Plus className="w-5 h-5" /></button>
            <button className="btn btn-circle btn-error shadow"><Plus className="w-5 h-5" /></button>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Real Example */}
      <ShowcaseSection title="Real-World Example" description="FAB in a typical page layout scenario.">
        <ShowcaseItem title="Social Actions FAB">
          <div className="relative h-56 w-full bg-gradient-to-br from-base-200 to-base-300 rounded-lg overflow-hidden">
            <div className="p-4 space-y-3">
              <div className="h-4 bg-base-content/10 rounded w-3/4"></div>
              <div className="h-4 bg-base-content/10 rounded w-1/2"></div>
              <div className="h-20 bg-base-content/5 rounded mt-4"></div>
            </div>
            <div className="fab fab-br z-10">
              <button className="btn btn-circle btn-primary btn-lg shadow-lg">
                <Plus className="w-6 h-6" />
              </button>
              <button className="btn btn-circle shadow"><Edit className="w-5 h-5" /></button>
              <button className="btn btn-circle shadow"><MessageCircle className="w-5 h-5" /></button>
              <button className="btn btn-circle shadow"><Share className="w-5 h-5" /></button>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
