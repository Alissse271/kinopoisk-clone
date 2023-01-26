import { Portal, PortalTarget } from "components";
import { AnimatePresence } from "framer-motion";
import { StyledModal, InfoText } from "./styles";

interface IProps {
  toggleModal: () => void;
  isOpen: boolean;
}

export const SettingsModal = ({ isOpen }: IProps) => {
  return (
    <Portal target={PortalTarget.SETTINGS}>
      <AnimatePresence>
        {isOpen && (
          <StyledModal
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
          >
            <InfoText>User information has been successfully updated!</InfoText>
          </StyledModal>
        )}
      </AnimatePresence>
    </Portal>
  );
};
