import React from "react";

interface ModalWrapperProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  closeModal,
}) => {
  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 z-10" onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default React.memo(ModalWrapper);
