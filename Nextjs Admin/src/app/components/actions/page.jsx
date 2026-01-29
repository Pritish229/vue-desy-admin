import Link from "next/link";
import {
  MousePointerClick,
  ChevronDown,
  Layers,
  RefreshCw,
  Palette,
  Plus,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const components = [
  {
    name: "Button",
    description: "Buttons allow users to take actions or make choices with a single tap.",
    href: "/components/actions/button",
    icon: MousePointerClick,
  },
  {
    name: "Dropdown",
    description: "Dropdown can open a menu or any other element when the button is clicked.",
    href: "/components/actions/dropdown",
    icon: ChevronDown,
  },
  {
    name: "Modal",
    description: "Modal is used to show a dialog or a box when you click a button.",
    href: "/components/actions/modal",
    icon: Layers,
  },
  {
    name: "Swap",
    description: "Swap allows you to toggle the visibility of two elements.",
    href: "/components/actions/swap",
    icon: RefreshCw,
  },
  {
    name: "Theme Controller",
    description: "Control the page theme using checkbox or radio inputs.",
    href: "/components/actions/theme-controller",
    icon: Palette,
  },
  {
    name: "FAB / Speed Dial",
    description: "Floating Action Button that stays in the corner with optional speed dial.",
    href: "/components/actions/fab",
    icon: Plus,
  },
  {
    name: "Tooltip",
    description: "Tooltip shows a message when hovering over an element.",
    href: "/components/actions/tooltip",
    icon: MessageSquare,
  },
  {
    name: "Validator",
    description: "Validator changes form element colors based on validation rules.",
    href: "/components/actions/validator",
    icon: CheckCircle,
  },
];

export default function ActionsIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Actions & Interactions</h1>
        <p className="text-base-content/70 mt-2">
          Components for user actions, dialogs, and interactive elements.
          Each component below is available as a reusable React component.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Link
              key={component.href}
              href={component.href}
              className="card bg-base-100 border border-base-300 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="card-body">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="card-title text-base">{component.name}</h2>
                    <p className="text-sm text-base-content/60 mt-1">
                      {component.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
