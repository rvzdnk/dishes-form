import styled from "styled-components";
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)`
    max-width: 300px;
    background-color: rgba(255,255,255, 0.8);
    border-radius: 4px;
`;

export const DishForm = styled.form`
    margin: 15px;
    display: flex;
    flex-direction: column;
    & button{
        margin-top: 8px;
    }
`;

