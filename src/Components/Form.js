import React from "react";
import Unit from "./Unit";

export default function Form({item}) {

    return <form
            className={item.class ? item.class : null}
           >
        {
            item.list.length ? 
                item.list.map(
                    (item, index) => <Unit item={item} key={index} />
                ) : null   
            
        } </form>
}