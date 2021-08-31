export class Todo{

    static fromJson ({id, tarea, completado, fechaCreada}) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fechaCreada = fechaCreada;

        return tempTodo;
    }
    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.fechaCreada = new Date();
    }
}