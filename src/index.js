import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';

export const todoList = new TodoList()

todoList.todos.forEach(todo => createTodoHtml(todo));