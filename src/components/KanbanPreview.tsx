
import { CSSProperties, useState } from "react";
import { Calendar, CheckCircle, Clock, Edit3, PlusCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  status: "todo" | "inProgress" | "done";
  priority?: "low" | "medium" | "high";
  dueDate?: string;
}

const initialTasks: Task[] = [
  { id: "1", title: "Create project roadmap", status: "todo", priority: "high", dueDate: "Apr 20" },
  { id: "2", title: "Design landing page", status: "todo", priority: "medium" },
  { id: "3", title: "Set up project tracking", status: "inProgress", priority: "high", dueDate: "Apr 18" },
  { id: "4", title: "Research competitors", status: "inProgress", priority: "low" },
  { id: "5", title: "Brainstorm name ideas", status: "done" },
  { id: "6", title: "Create logo design", status: "done", dueDate: "Apr 15" },
];

const KanbanPreview = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const handleDragOver = (e: React.DragEvent, status: Task["status"]) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, status: Task["status"]) => {
    e.preventDefault();
    if (draggedTask) {
      const updatedTasks = tasks.map(task => 
        task.id === draggedTask ? { ...task, status } : task
      );
      setTasks(updatedTasks);
      setDraggedTask(null);
    }
  };

  const getTasksByStatus = (status: Task["status"]) => {
    return tasks.filter(task => task.status === status);
  };

  const getPriorityStyle = (priority?: Task["priority"]): CSSProperties => {
    switch (priority) {
      case "high": return { borderLeft: "3px solid #f87171" };
      case "medium": return { borderLeft: "3px solid #facc15" };
      case "low": return { borderLeft: "3px solid #93c5fd" };
      default: return { borderLeft: "3px solid #e5e7eb" };
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-medium text-gray-900">Project Tasks</h3>
        <div className="flex gap-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <PlusCircle className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <Edit3 className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 p-4">
        {/* Todo Column */}
        <div 
          className="bg-gray-50 rounded-lg p-3"
          onDragOver={(e) => handleDragOver(e, "todo")}
          onDrop={(e) => handleDrop(e, "todo")}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-700">To Do</h4>
            <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs">
              {getTasksByStatus("todo").length}
            </span>
          </div>
          <div className="space-y-2">
            {getTasksByStatus("todo").map(task => (
              <div 
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task.id)}
                className="bg-white p-3 rounded-lg shadow-sm cursor-move"
                style={getPriorityStyle(task.priority)}
              >
                <h5 className="font-medium text-gray-800 mb-2">{task.title}</h5>
                {task.dueDate && (
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{task.dueDate}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* In Progress Column */}
        <div 
          className="bg-gray-50 rounded-lg p-3"
          onDragOver={(e) => handleDragOver(e, "inProgress")}
          onDrop={(e) => handleDrop(e, "inProgress")}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-700">In Progress</h4>
            <span className="bg-zen-purple/20 text-zen-purple rounded-full px-2 py-1 text-xs">
              {getTasksByStatus("inProgress").length}
            </span>
          </div>
          <div className="space-y-2">
            {getTasksByStatus("inProgress").map(task => (
              <div 
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task.id)}
                className="bg-white p-3 rounded-lg shadow-sm cursor-move animate-card-slide"
                style={getPriorityStyle(task.priority)}
              >
                <h5 className="font-medium text-gray-800 mb-2">{task.title}</h5>
                {task.dueDate && (
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{task.dueDate}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Done Column */}
        <div 
          className="bg-gray-50 rounded-lg p-3"
          onDragOver={(e) => handleDragOver(e, "done")}
          onDrop={(e) => handleDrop(e, "done")}
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-700">Done</h4>
            <span className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs">
              {getTasksByStatus("done").length}
            </span>
          </div>
          <div className="space-y-2">
            {getTasksByStatus("done").map(task => (
              <div 
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task.id)}
                className="bg-white p-3 rounded-lg shadow-sm cursor-move line-through text-gray-500"
                style={getPriorityStyle(task.priority)}
              >
                <h5 className="font-medium mb-2 flex items-center">
                  <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                  {task.title}
                </h5>
                {task.dueDate && (
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{task.dueDate}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanPreview;
