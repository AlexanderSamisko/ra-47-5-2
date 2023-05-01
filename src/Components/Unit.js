import React from "react";
import Anchor from "./Anchor";
import Block from "./Block";
import Button from "./Button";
import Form from "./Form";
import Image from "./Image";
import Input from "./Input";
import List from "./List";
import ListItem from "./ListItem";
import Span from "./Span";
import Title from "./Title";

export default function Unit({item}) {
// приходит item, проверяем его type - и выясняем шаблон.
// возрвращаем требуемый элемент - передавая в него параметры включая вложенные элементы.
// если вложенные есть - вызовится вновь Unit.
    switch(item.type) {
    case 'anchor': return <Anchor item={item} />
    case 'btn': return <Button item={item} />
    case 'form': return <Form item={item} />
    case 'img': return <Image item={item} />
    case 'input': return <Input item={item} />
    case 'list': return <List item={item} />
    case 'list-item': return <ListItem item={item} />
    case 'span': return <Span item={item} />
    case 'title': return <Title item={item} />
    default: return <Block item={item} />
  }
}