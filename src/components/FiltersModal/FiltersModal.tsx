import { Filters, Portal, PortalTarget } from "components";
import { Container } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
  isOpen: boolean;
}

export const FiltersModal = ({ toggleModal, isOpen }: IProps) => {
  return (
    <Portal target={PortalTarget.FILTERS}>
      {isOpen && (
        <Container>
          <Filters toggleModal={toggleModal} />
        </Container>
      )}
    </Portal>
  );
};
