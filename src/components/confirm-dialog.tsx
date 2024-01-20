"use client";

import { useRef, useState } from "react";

import Button from "./button";
import { createPortal } from "react-dom";
import { ImCancelCircle } from "react-icons/im";

interface Props {
  primaryButtonText?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  handleConfirm?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  defaultOpen?: boolean;
  hideCancelButton?: boolean;
  onCancel?: () => void;
}

const ConfirmDialog: React.FC<Props> = ({
  children,
  description,
  title,
  handleConfirm,
  variant = "primary",
  defaultOpen = false,
  hideCancelButton = false,
  onCancel,
  primaryButtonText = "Confirm",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const bodyRef = useRef<HTMLDivElement>(null);
  const modalRoot = document.getElementById("modal");
  return (
    <>
      {isOpen
        ? createPortal(
            <div
              onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.stopPropagation();
                if (
                  bodyRef.current &&
                  !bodyRef.current.contains(e.target as Element)
                ) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm bg-[#00000050] " />
              <div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 m-auto max-h-[90vh] max-w-[95vw] overflow-auto"
                ref={bodyRef}
              >
                <span
                  className={`absolute top-3 right-3 duration-300 text-xl font-bold cursor-pointer hover:scale-110 px-2 z-10`}
                  onClick={() => setIsOpen(false)}
                >
                  <ImCancelCircle />
                </span>

                <div className="w-full max-w-sm rounded bg-surface p-3">
                  <div>
                    <p className="mb-2 border-b pb-2 text-xl font-semibold">
                      {title}
                    </p>
                  </div>
                  <div>{description}</div>

                  <div className="mt-6 flex justify-end gap-3 p-1">
                    {!hideCancelButton && (
                      <Button
                        className="h-auto w-fit p-2"
                        type="button"
                        variant="ghost"
                        handleClick={() => {
                          setIsOpen(false);
                          if (onCancel && typeof onCancel === "function")
                            onCancel();
                        }}
                      >
                        Cancel
                      </Button>
                    )}

                    <Button
                      type="button"
                      handleClick={() => {
                        if (
                          handleConfirm &&
                          typeof handleConfirm === "function"
                        )
                          handleConfirm();
                        setIsOpen(false);
                      }}
                      className="h-auto w-fit p-2"
                      variant={variant}
                    >
                      {primaryButtonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>,
            modalRoot!
          )
        : null}
      <div onClick={() => setIsOpen(true)}>{children}</div>
    </>
  );
};

export default ConfirmDialog;
