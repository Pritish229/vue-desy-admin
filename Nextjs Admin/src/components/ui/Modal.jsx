"use client";

import { forwardRef, useCallback, useEffect, useRef, useImperativeHandle } from "react";
import { X } from "lucide-react";

/**
 * Modal Component
 * A dialog modal using the HTML dialog element
 * 
 * @param {string} id - Unique ID for the modal (required for dialog method)
 * @param {string} position - "middle" | "bottom"
 * @param {boolean} closeButton - Shows X button in corner
 * @param {boolean} closeOnBackdrop - Close when clicking backdrop
 * @param {React.ReactNode} title - Modal title
 * @param {React.ReactNode} actions - Footer action buttons
 */
const Modal = forwardRef(function Modal(
  {
    id,
    children,
    title,
    actions,
    position = "middle",
    closeButton = true,
    closeOnBackdrop = true,
    className = "",
    onClose,
    ...props
  },
  ref
) {
  const dialogRef = useRef(null);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    showModal: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener("close", handleClose);
      return () => dialog.removeEventListener("close", handleClose);
    }
  }, [handleClose]);

  const positionClass = position === "bottom" ? "modal-bottom sm:modal-middle" : "";

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className={`modal ${positionClass} ${className}`}
      {...props}
    >
      <div className="modal-box">
        {closeButton && (
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <X className="w-4 h-4" />
            </button>
          </form>
        )}

        {title && <h3 className="font-bold text-lg pr-8">{title}</h3>}

        <div className={title ? "py-4" : ""}>{children}</div>

        {actions && <div className="modal-action">{actions}</div>}
      </div>

      {closeOnBackdrop && (
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      )}
    </dialog>
  );
});

export default Modal;

/**
 * Helper hook to control modal
 */
export function useModal(id) {
  const open = useCallback(() => {
    document.getElementById(id)?.showModal();
  }, [id]);

  const close = useCallback(() => {
    document.getElementById(id)?.close();
  }, [id]);

  return { open, close };
}

/**
 * ModalActions wrapper for consistent styling
 */
export function ModalActions({ children }) {
  return <div className="flex gap-2 justify-end">{children}</div>;
}
