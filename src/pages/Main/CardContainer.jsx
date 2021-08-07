import React from 'react';
import AnimatedDiv from "./AnimatedDiv";

const CardContainer = ({children, animStyle, ...props}) => {
    return (
        <AnimatedDiv
            p={"xl"}
            rounded={"xl"}
            overflow={"hidden"}
            shadow={"md"}
            zIndex={1}
            style={animStyle}
            {...props}
        >
            {children}
        </AnimatedDiv>
    )
};

export default CardContainer;
