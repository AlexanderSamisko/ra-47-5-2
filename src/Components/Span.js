import React from "react";

export default function Span({item}) {

    return <span 
            className={item.class ? item.class : null}>
        {
            item.text ? item.text : null   
            
        } </span>
}