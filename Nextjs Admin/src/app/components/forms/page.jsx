import Link from "next/link";
import {
  Type,
  AlignLeft,
  CheckSquare,
  Circle,
  ToggleLeft,
  ChevronDown,
  Upload,
  SlidersHorizontal,
  Star,
  Tag,
  Square,
  Filter,
} from "lucide-react";

const components = [
  {
    name: "Text Input",
    description: "Text Input is a simple input field for single-line text.",
    href: "/components/forms/input",
    icon: Type,
  },
  {
    name: "Textarea",
    description: "Textarea allows users to enter text in multiple lines.",
    href: "/components/forms/textarea",
    icon: AlignLeft,
  },
  {
    name: "Checkbox",
    description: "Checkboxes are used to select or deselect a value.",
    href: "/components/forms/checkbox",
    icon: CheckSquare,
  },
  {
    name: "Radio",
    description: "Radio buttons allow the user to select one option from a set.",
    href: "/components/forms/radio",
    icon: Circle,
  },
  {
    name: "Toggle",
    description: "Toggle is a checkbox styled to look like a switch button.",
    href: "/components/forms/toggle",
    icon: ToggleLeft,
  },
  {
    name: "Select",
    description: "Select is used to pick a value from a list of options.",
    href: "/components/forms/select",
    icon: ChevronDown,
  },
  {
    name: "File Input",
    description: "File Input is an input field for uploading files.",
    href: "/components/forms/file-input",
    icon: Upload,
  },
  {
    name: "Range Slider",
    description: "Range slider is used to select a value by sliding a handle.",
    href: "/components/forms/range",
    icon: SlidersHorizontal,
  },
  {
    name: "Rating",
    description: "Rating is a set of radio buttons for rating something.",
    href: "/components/forms/rating",
    icon: Star,
  },
  {
    name: "Label",
    description: "Label provides a name or title for an input field.",
    href: "/components/forms/label",
    icon: Tag,
  },
  {
    name: "Fieldset",
    description: "Fieldset is a container for grouping related form elements.",
    href: "/components/forms/fieldset",
    icon: Square,
  },
  {
    name: "Filter",
    description: "Filter is a group of radio buttons with auto-hide behavior.",
    href: "/components/forms/filter",
    icon: Filter,
  },
];

export default function FormsIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Forms</h1>
        <p className="text-base-content/70 mt-2">
          Form components for user input. Each component includes labels, validation states, and multiple variants.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Link
              key={component.href}
              href={component.href}
              className="card bg-base-100 border border-base-300 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="card-body p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold">{component.name}</h2>
                    <p className="text-xs text-base-content/60 mt-1">
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
