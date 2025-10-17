"use client";

import { useState } from "react";
import { todoData } from "./data";

export default function TodoPage() {
    const [todos, setTodos] = useState(todoData);

    const handleToggle = (id) => {
        const newTodos = [];

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                newTodos.push({ ...todos[i], completed: !todos[i].completed });
            } else {
                newTodos.push(todos[i]);
            }
        }
        setTodos(newTodos);
    };

    const visibleTodos = [];

    for (let i = 0; i < todos.length; i++) {
        if (!todos[i].completed) {
            visibleTodos.push(todos[i]);
        }
    }

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-black">My Todo List</h1>

            <div className="space-y-2">
                {(() => {
                    const todoElements = [];

                    for (let i = 0; i < visibleTodos.length; i++) {
                        const todo = visibleTodos[i];

                        todoElements.push(
                            <div
                                key={todo.id}
                                className="flex items-center p-3 bg-white shadow rounded"
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggle(todo.id)}
                                    className="mr-3"
                                />
                                <span className="text-black">{todo.title}</span>
                            </div>
                        );
                    }
                    return todoElements;
                })()}
            </div>

            {visibleTodos.length === 0 && (
                <p className="text-center text-gray-500 mt-4">All done! 🎉</p>
            )}
        </div>
    );
}
