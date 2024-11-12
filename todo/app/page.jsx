"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [bgColor, setBgColor] = useState('bg-gray-100');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('todo-list'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === '') return;

    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex].text = task;
      setTasks(updatedTasks);
      setIsEditing(false);
      setTask('');
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setIsEditing(true);
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setTask('');
  };

  return (
    <div className={`${bgColor} min-h-screen flex justify-center items-center`}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
       
        <div className="flex justify-between items-center mb-4" >
          <h1 className="text-2xl font-bold">ToDo List</h1>
        </div>
      
        <div className="flex mb-4">
          <input type="text"value={task}onChange={(e) => setTask(e.target.value)}placeholder="Add your items"
          className="border rounded-l-lg p-2 w-full"/>
          <button onClick={addTask} className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-700">
            {isEditing ? 'Update' : 'Add'} </button>
        </div>

        {isEditing && (
          <button onClick={cancelEdit}className="bg-red-500 text-white p-2 rounded mb-4 hover:bg-red-700"> Cancel Edit</button>
        )}

        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li key={index} className={`flex justify-between items-center p-3 bg-gray-200 rounded-lg 
            ${ task.completed ? 'line-through' : ''}`}>
              <span>{task.text}</span>
              <div className="flex space-x-2">
                <button onClick={() => completeTask(index)} className="text-green-600">✓</button>
                <button onClick={() => editTask(index)} className="text-blue-600" >✏️</button>
                <button onClick={() => deleteTask(index)} className="text-red-600">🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
