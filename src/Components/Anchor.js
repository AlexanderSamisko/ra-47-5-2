import React from "react";
import Unit from "./Unit";

export default function Anchor({item}) {

    return <a 
            href={item.addres ? item.addres : "#"} 
            className={item.class ? item.class : null}>
        {
            item.list ? 
                item.list.map(
                    (item, index) => <Unit item={item} key={index} />
                ) : item.text  
            
        } </a>
}