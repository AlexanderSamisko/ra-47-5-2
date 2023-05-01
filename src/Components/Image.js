import React from "react";


export default function Image({item}) {

    // let imgSrc = require(`${item.img}`);
    // не понимаю, как сделать так, чтобы строка заданная в item.img стала адрессом локальной картинки. Если задать просто строку - всё
    // хорошо. Если задать через item.img - не срабатывает. Такое ощущение, что как-то не так пользуюсь вебпаком.


    return <img
            src={require(`../img/smile.png`)}
            className={item.class ? item.class : null} alt="" />   
}