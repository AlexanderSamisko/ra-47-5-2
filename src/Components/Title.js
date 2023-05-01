import React from "react";

export default function Title({item}) {

    return <h3 
            className={item.class ? item.class : null}>
            {
                item.text ? item.text : null   
            } 
        </h3>
}