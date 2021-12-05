import React from 'react';

import TodoItem from '../TodoItem';
import Todo from '../../Models/todo';
import classes from './index.module.css';

const Todos: React.FC<{ items: Todo[] ;onRemoveTodo:(id:string)=>void }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}  onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;