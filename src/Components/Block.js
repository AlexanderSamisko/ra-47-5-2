import React from "react";
import Unit from "./Unit";

export default function Block({item}) {

    return <div 
            className={item.class ? item.class : null}>
        {
            item.list.length ? 
                item.list.map(
                    (item, index) => <Unit item={item} key={index} />
                ) : null   
            
        } </div>
}