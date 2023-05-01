import React from "react";

export default function Input({item}) {

    return <input  className={item.class ? item.class : null} />
}