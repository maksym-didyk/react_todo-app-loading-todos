import { FC } from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
}

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <section className="todoapp__main">
      {/* This is a completed todo */}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={classNames('todo',
            { completed: todo.completed })}
        >
          <label className="todo__status-label">
            <input
              type="checkbox"
              className="todo__status"
              checked
            />
          </label>

          <span className="todo__title">{todo.title}</span>

          {/* Remove button appears only on hover */}
          <button type="button" className="todo__remove">×</button>

          {/* overlay will cover the todo while it is being updated */}
          <div className="modal overlay">
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      ))}
    </section>
  );
};