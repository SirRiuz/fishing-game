import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const Container = styled.button`
  border: none;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 10px 12px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Indicator = styled(motion.div)`
  width: 10px;
  height: 5px;
  background: black;
  border-radius: 100px;
`;
