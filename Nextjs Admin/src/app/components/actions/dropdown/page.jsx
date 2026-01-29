"use client";

import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Button from "../../../../components/ui/Button";
import { ChevronDown, Settings, User, LogOut, Edit, Trash2, Copy } from "lucide-react";

export default function DropdownPage() {
  return (
    <ShowcasePage
      title="Dropdown"
      description="Dropdown can open a menu or any other element when the button is clicked."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple dropdown menu with options.">
        <ShowcaseItem title="Default Dropdown">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Click me <ChevronDown className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="With Icons">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-primary m-1">
              Options <ChevronDown className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a><User className="w-4 h-4" /> Profile</a></li>
              <li><a><Settings className="w-4 h-4" /> Settings</a></li>
              <li><a><LogOut className="w-4 h-4" /> Logout</a></li>
            </ul>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Positions */}
      <ShowcaseSection title="Positions" description="Dropdown menus can open in different directions.">
        <ShowcaseItem title="Dropdown End (Right)">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Dropdown End <ChevronDown className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Dropdown Top">
          <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn m-1">
              Dropdown Top <ChevronDown className="w-4 h-4 rotate-180" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Dropdown Left">
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="btn m-1">
              Left <ChevronDown className="w-4 h-4 -rotate-90" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Dropdown Right">
          <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1">
              Right <ChevronDown className="w-4 h-4 rotate-90" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Hover */}
      <ShowcaseSection title="Hover Dropdown" description="Open dropdown on hover instead of click.">
        <ShowcaseItem title="Hover to Open">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              Hover me <ChevronDown className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Open State */}
      <ShowcaseSection title="Force Open" description="Keep dropdown open with dropdown-open class.">
        <ShowcaseItem title="Always Open">
          <div className="dropdown dropdown-open">
            <div tabIndex={0} role="button" className="btn m-1">
              Always Open
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Card Dropdown */}
      <ShowcaseSection title="Card Dropdown" description="Dropdown with card content instead of menu.">
        <ShowcaseItem title="Card Content">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Show Card <ChevronDown className="w-4 h-4" />
            </div>
            <div tabIndex={0} className="dropdown-content card card-compact bg-base-100 z-10 w-64 p-2 shadow">
              <div className="card-body">
                <h3 className="card-title text-sm">Card Title</h3>
                <p className="text-xs">This is a card inside a dropdown. You can put any content here.</p>
                <div className="card-actions justify-end">
                  <Button variant="primary" size="sm">Action</Button>
                </div>
              </div>
            </div>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Context Menu */}
      <ShowcaseSection title="Context Menu Style" description="Dropdown styled like a context menu.">
        <ShowcaseItem title="Actions Menu">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              Actions <ChevronDown className="w-4 h-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-48 p-2 shadow border border-base-300">
              <li><a><Edit className="w-4 h-4" /> Edit</a></li>
              <li><a><Copy className="w-4 h-4" /> Duplicate</a></li>
              <li className="border-t border-base-300 mt-1 pt-1">
                <a className="text-error"><Trash2 className="w-4 h-4" /> Delete</a>
              </li>
            </ul>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="User Menu">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center">
                <span className="text-sm font-bold">JD</span>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow mt-2">
              <li className="menu-title">
                <span>John Doe</span>
              </li>
              <li><a><User className="w-4 h-4" /> Profile</a></li>
              <li><a><Settings className="w-4 h-4" /> Settings</a></li>
              <li className="border-t border-base-300 mt-1 pt-1">
                <a><LogOut className="w-4 h-4" /> Logout</a>
              </li>
            </ul>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
