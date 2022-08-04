import React from "react";
import { useDisclosure, CloseButton } from "@chakra-ui/react";

const AlertComp = (props) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return isVisible ? (
    <div className="bg-yellow-400 py-2">
      <div className="w-11/12 flex m-auto items-center justify-between">
        <p className="font-medium text-sm text-black">{props.message}</p>
        <CloseButton onClick={onClose} />
      </div>
    </div>
  ) : (
    <></>
  );
};
export default AlertComp;
