import React from "react";
import linkText from "../../constants/data/LinkText";
import { AppNavigation, NavigationDot } from "../../wrapper/AppWrapStyles";

interface _Props{
    active: string,
}

const NavigationDots = (props:_Props) => {

    return(
            <AppNavigation >
                {linkText.map((item, index)=>(
                    <NavigationDot 
                    key={item + index}
                    className="App__navigation-dot"
                    style={props.active === item ? { backgroundColor: "#313BAC"} : {}}
                    href={`#${item}`}
                    />
                    ))}
            </AppNavigation>
    )
};

export default NavigationDots;