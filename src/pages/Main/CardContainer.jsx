import React from 'react';
import {Div} from "react-native-magnus";

const CardContainer = ({children, ...props}) => {
 return (
   <Div
     p={"xl"}
     rounded={"xl"}
     overflow={"hidden"}
     shadow={"md"}
     h={210}
     {...props}
   >
     {children}
   </Div>
 )
};

export default CardContainer;
