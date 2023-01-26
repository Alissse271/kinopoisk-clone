import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledModal = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;

  display: grid;
  place-items: center;

  width: 300px;
  padding: 40px 20px;

  transform: translate(-50%, -50%);

  background-color: ${Color.PRIMARY};
  border: none;
  border-radius: 20px;

  z-index: 11;
`;
const InfoText = styled.p`
  ${Typography.H2}
  text-align: center;
`;

export { StyledModal, InfoText };
