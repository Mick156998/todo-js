import { Todo } from "../classes";
import { todoList } from "../index";

//Referencias en el html:
const divTodolist = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrarCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

//Creacion de codigo html:
export const createTodoHtml = ( todo ) => {
    const htmlTodo = //html
    `
        <li class="${(todo.completado) ? 'completed': '' }" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked': '' }>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    const div = document.createElement('div');

    div.innerHTML = htmlTodo;

    divTodolist.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos:
txtInput.addEventListener('keyup', (event) => {
    if(event.keyCode === 13 && (txtInput.value).length >0){
        const newTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(newTodo);
        createTodoHtml(newTodo);
        txtInput.value = '';
    }
})

divTodolist.addEventListener('click', (event) => {
    const elementName = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');
    
    if (elementName.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElement.classList.toggle('completed');
    }else if (elementName.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodolist.removeChild(todoElement);
    }
})

btnBorrarCompletados.addEventListener('click', () => {
    todoList.eliminarCompletado();
    for(let i = divTodolist.children.length-1; i >= 0; i--){
        const elemento = divTodolist.children[i];
        
        if(elemento.classList.contains('completed')){
            divTodolist.removeChild(elemento);
        }
    }
})

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if(!filtro){
        return;
    }

    anchorFiltros.forEach(element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for (const elemento of divTodolist.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
})