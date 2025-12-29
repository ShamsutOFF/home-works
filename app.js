`use strict`;

const mainTaskList = {
    tasks: [{
        id: 1,
        name: `тест`,
        description: `описание`,
        order: 0
    }]
}

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
                    ...task,
                    title: newTitle !== undefined ? newTitle : task.title,
                    priority: newPriority !== undefined ? newPriority : task.priority
                };
            }
            return task;
        });
    },

    sortTasksByPriority: function () {
        this.tasks.sort((a, b) => a.priority - b.priority)
    },
}

const mainTaskListMethods = {
    addTask: ToDoList.addTask.bind(mainTaskList),
    deleteTask: ToDoList.deleteTask.bind(mainTaskList),
    updateTask: ToDoList.updateTask.bind(mainTaskList),
    sortTasksByPriority: ToDoList.sortTasksByPriority.bind(mainTaskList)
};

// Тестирование

console.log(mainTaskList.tasks);
mainTaskListMethods.addTask('Помыть посуду', 1);
mainTaskListMethods.addTask('Пропылесосить', 2);
mainTaskListMethods.addTask('Зарядка', 1);
console.log(mainTaskList.tasks);

mainTaskListMethods.deleteTask(1);
console.log(mainTaskList.tasks);

mainTaskListMethods.updateTask(2, 'Помыть посуду', 3);
console.log(mainTaskList.tasks);
mainTaskListMethods.sortTasksByPriority();
console.log(mainTaskList.tasks);