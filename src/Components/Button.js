import React from "react";

export default function Button({item}) {

    return <button 
            className={item.class ? item.class : null}>
            {
                item.text ? item.text : null   
            } 
        </button>
}