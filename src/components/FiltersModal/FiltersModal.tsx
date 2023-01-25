import { Filters, Portal, PortalTarget } from "components";
import { memo } from "react";
import { Container } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
  isOpen: boolean;
}

export const FiltersModal = memo(({ toggleModal, isOpen }: IProps) => {
  return (
    <Portal target={PortalTarget.FILTERS}>
      {isOpen && (
        <Container>
          <Filters toggleModal={toggleModal} isOpen={isOpen} />
        </Container>
      )}
    </Portal>
  );
});
