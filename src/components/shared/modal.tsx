import React from "react";
import ReactDOM from "react-dom";
import LinearBox from "./linearBox";

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    title?: string;
    closeOnOverlayClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    title,
    closeOnOverlayClick = true,
}) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (
            closeOnOverlayClick &&
            (e.target as HTMLElement).classList.contains("modal-overlay")
        ) {
            onClose?.();
        }
    };

    return ReactDOM.createPortal(
        <div
            className="modal-overlay fixed inset-0 flex-center bg-black bg-opacity-50 "
            onClick={handleOverlayClick}>
            <LinearBox>
                <div className="modal-content bg-bgDark rounded-lg shadow-lg p-4 relative w-fit">
                    {title && (
                        <h2 className="text-xl font-semibold mb-4 text-center txt">
                            {title}
                        </h2>
                    )}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-800">
                            x
                        </button>
                    )}
                    <div>{children}</div>
                </div>
            </LinearBox>
        </div>,
        document.body
    );
};

export default Modal;
