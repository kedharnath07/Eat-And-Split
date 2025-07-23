import React, { useState, useEffect } from 'react';

function ToDoList() {
    const initialTasks = localStorage.getItem('task')
        ? JSON.parse(localStorage.getItem('task'))
        : [];

    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name, qty) => {
        const newTask = {
            id: Date.now(),
            name,
            qty,
            isDone: false
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, isDone: !task.isDone } : task
        ));
    };

    const editTask = (id, name, qty) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, name, qty } : task
        ));
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold text-primary">📝 To-Do List</h2>
                        <p className="text-muted">Track your items efficiently</p>
                    </div>
                    <Form addTask={addTask} />
                    <TaskList
                        tasks={tasks}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        editTask={editTask}
                    />
                    <Calculations items={tasks} />
                </div>
            </div>
        </div>
    );
}

export default ToDoList;


function Form({ addTask }) {
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!name.trim() || !qty || isNaN(qty)) {
            alert("Enter valid item name and quantity.");
            return;
        }
        addTask(name.trim(), parseInt(qty));
        setName('');
        setQty('');
    };

    return (
        <div className="card shadow mb-4">
            <div className="card-header bg-light">
                <strong>Add Item</strong>
            </div>
            <div className="card-body">
                <form onSubmit={submit} className="row g-2">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Item name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Qty"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary w-100">➕</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
    return (
        <div className="card shadow mb-4">
            <div className="card-header bg-light">
                <strong>Item List</strong>
            </div>
            <div className="card-body">
                {tasks.length === 0 ? (
                    <p className="text-center text-muted">No items in your list.</p>
                ) : (
                    <ul className="list-group list-group-flush">
                        {tasks.map(task => (
                            <Task
                                key={task.id}
                                item={task}
                                onDelete={() => deleteTask(task.id)}
                                onToggle={() => toggleTask(task.id)}
                                onEdit={editTask}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}


function Task({ item, onDelete, onToggle, onEdit }) {
    const { id, name, qty, isDone } = item;
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newQty, setNewQty] = useState(qty);

    const saveEdit = () => {
        if (!newName.trim() || !newQty || isNaN(newQty)) {
            alert("Invalid edit");
            return;
        }
        onEdit(id, newName.trim(), parseInt(newQty));
        setIsEditing(false);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center flex-wrap w-100">
                <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={isDone}
                    onChange={onToggle}
                />
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="form-control form-control-sm me-2"
                            style={{ width: "40%" }}
                        />
                        <input
                            type="text"
                            value={newQty}
                            onChange={(e) => setNewQty(e.target.value)}
                            className="form-control form-control-sm"
                            style={{ width: "20%" }}
                        />
                    </>
                ) : (
                    <span
                        className={`flex-grow-1 ${isDone ? 'text-decoration-line-through text-muted' : ''}`}
                    >
                        {name} ➡ {qty}
                    </span>
                )}
            </div>
            <div className="btn-group btn-group-sm">
                {isEditing ? (
                    <button className="btn btn-success" onClick={saveEdit}>💾</button>
                ) : (
                    <button className="btn btn-outline-secondary" onClick={() => setIsEditing(true)}>✏️</button>
                )}
                <button className="btn btn-outline-danger" onClick={onDelete}>❌</button>
            </div>
        </li>
    );
}


function Calculations({ items }) {
    const total = items.length;
    const packed = items.filter(item => item.isDone).length;

    return (
        <div className="card text-center shadow-sm">
            <div className="card-body">
                {total === 0 ? (
                    <h6 className="text-muted">Start adding your items 🧺</h6>
                ) : (
                    <>
                        <h6>Total Items: <span className="text-primary">{total}</span></h6>
                        <h6>Packed Items: <span className="text-success">{packed}</span></h6>
                    </>
                )}
            </div>
        </div>
    );
}
