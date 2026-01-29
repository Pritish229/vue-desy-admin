"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import Button from "../../../../components/ui/Button";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <ShowcasePage
      title="Modal"
      description="Modal is used to show a dialog or a box when you click a button."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Simple modal dialogs.">
        <ShowcaseItem title="Basic Modal">
          <Button variant="primary" onClick={() => setBasicOpen(true)}>
            Open Modal
          </Button>

          <dialog className={`modal ${basicOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">This is a basic modal dialog. Press ESC key or click the button below to close.</p>
              <div className="modal-action">
                <Button onClick={() => setBasicOpen(false)}>Close</Button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setBasicOpen(false)}>close</button>
            </form>
          </dialog>
        </ShowcaseItem>

        <ShowcaseItem title="With Close Button">
          <Button variant="secondary" onClick={() => setAlertOpen(true)}>
            Modal with X
          </Button>

          <dialog className={`modal ${alertOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
              <button 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setAlertOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-bold text-lg">Modal Title</h3>
              <p className="py-4">Click the X button in the corner to close this modal.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setAlertOpen(false)}>close</button>
            </form>
          </dialog>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Confirmation Modal */}
      <ShowcaseSection title="Confirmation Modal" description="Ask user to confirm an action.">
        <ShowcaseItem title="Delete Confirmation">
          <Button variant="error" onClick={() => setConfirmOpen(true)}>
            Delete Item
          </Button>

          <dialog className={`modal ${confirmOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-error/10">
                  <AlertTriangle className="w-6 h-6 text-error" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Delete Item?</h3>
                  <p className="text-sm text-base-content/60">This action cannot be undone.</p>
                </div>
              </div>
              <p className="py-2">Are you sure you want to delete this item? All associated data will be permanently removed.</p>
              <div className="modal-action">
                <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
                <Button variant="error" onClick={() => setConfirmOpen(false)}>Delete</Button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setConfirmOpen(false)}>close</button>
            </form>
          </dialog>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Form Modal */}
      <ShowcaseSection title="Form Modal" description="Modal containing a form.">
        <ShowcaseItem title="Contact Form">
          <Button variant="primary" onClick={() => setFormOpen(true)}>
            Open Form
          </Button>

          <dialog className={`modal ${formOpen ? "modal-open" : ""}`}>
            <div className="modal-box">
              <button 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setFormOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Your name" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="your@email.com" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
                </div>
              </form>
              <div className="modal-action">
                <Button onClick={() => setFormOpen(false)}>Cancel</Button>
                <Button variant="primary" onClick={() => setFormOpen(false)}>Send</Button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => setFormOpen(false)}>close</button>
            </form>
          </dialog>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Modal Positions */}
      <ShowcaseSection title="Positions" description="Modal can appear at different positions.">
        <ShowcaseItem title="Bottom Modal">
          <button className="btn" onClick={() => document.getElementById('modal_bottom').showModal()}>
            Bottom Modal
          </button>
          <dialog id="modal_bottom" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Bottom Modal</h3>
              <p className="py-4">This modal slides up from the bottom on mobile devices.</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Alert Variants */}
      <ShowcaseSection title="Alert Modals" description="Pre-styled alert dialogs.">
        <ShowcaseItem title="Success Alert">
          <button className="btn btn-success" onClick={() => document.getElementById('success_modal').showModal()}>
            Success Modal
          </button>
          <dialog id="success_modal" className="modal">
            <div className="modal-box">
              <div className="flex flex-col items-center text-center py-4">
                <div className="p-4 rounded-full bg-success/10 mb-4">
                  <CheckCircle className="w-12 h-12 text-success" />
                </div>
                <h3 className="font-bold text-lg">Success!</h3>
                <p className="py-2 text-base-content/70">Your action has been completed successfully.</p>
              </div>
              <div className="modal-action justify-center">
                <form method="dialog">
                  <button className="btn btn-success">Continue</button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </ShowcaseItem>

        <ShowcaseItem title="Info Alert">
          <button className="btn btn-info" onClick={() => document.getElementById('info_modal').showModal()}>
            Info Modal
          </button>
          <dialog id="info_modal" className="modal">
            <div className="modal-box">
              <div className="flex gap-4">
                <div className="p-3 rounded-full bg-info/10 h-fit">
                  <Info className="w-6 h-6 text-info" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Did you know?</h3>
                  <p className="py-2 text-base-content/70">This is an informational message that provides helpful context to the user.</p>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Got it</button>
                </form>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
