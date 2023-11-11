import styled from "styled-components";
import bg from "../../resources/images/arvo-maaviiva1.png";
import { motion } from "framer-motion";

const StyledValueItem = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100px;

  flex: 1 1 200px;

  border-radius: ${(p) => p.theme.br.br_large};
  border-bottom: 5px solid ${(props) => props.theme.colors.gray};
  border-right: 5px solid ${(props) => props.theme.colors.gray};
  box-shadow: 0 0 10px ${(props) => props.theme.colors.gray};

  padding: ${(p) => p.theme.spacing.spacing_2};

  &:hover {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.secondary}!important;
    text-shadow: ${(p) => p.theme.ts.base};
    /*Adjust height to fit description in*/
    height: 320px;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  h2 {
    font-family: ${(p) => p.theme.ff.primary};
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    font-weight: ${(p) => p.theme.fw.fw_semibold};
  }
`;
export default StyledValueItem;
