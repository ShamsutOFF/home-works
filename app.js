`use strict`;

// Написать объект ToDoList, который хранит в себе задачи { ‘title’: ‘Помыть посуду’, id: 1, priority: 1 } и имеет методы:
//
// Добавить задачу
// Удалить задачу по id
// Обновить имя или приоритет по Id
// Отсортировать задачи по приоритету

const ToDoList = {
    tasks: [],
    addTask(title, priority) {
        const newId = this.tasks.length > 0
            ? Math.max(...this.tasks.map(t => t.id)) + 1
            : 1;

        this.tasks.push({
            title: title,
            id: newId,
            priority: priority
        });
    },
    deleteTask: function (id) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    },
    updateTask(id, newTitle, newPriority) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,           // сохраняем все старые поля
                    title: newTitle !== undefined ? newTitle : task.title,
                    priority: newPriority !== undefined ? newPriority : task.priority
                };
            }
            return task; // важно: возвращаем неизмененный task!
        });
    },

    sortTasksByPriority: function () {
        this.tasks.sort((a, b) => a.priority - b.priority)
    },
}

// Тестирование

console.log(ToDoList.tasks);
ToDoList.addTask('Помыть посуду', 1);
ToDoList.addTask('Пропылесосить', 2);
ToDoList.addTask('Зарядка', 1);
console.log(ToDoList.tasks);

ToDoList.deleteTask(1);
console.log(ToDoList.tasks);

ToDoList.updateTask(2, 'Помыть посуду', 3);
console.log(ToDoList.tasks);
ToDoList.sortTasksByPriority();
console.log(ToDoList.tasks);
