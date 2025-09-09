import React from 'react';

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    // Set the drag data - this is the key part that React Flow looks for
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    
    // This is important for React Flow to recognize the drag
    event.dataTransfer.setData('text/plain', nodeType);
    
    console.log('Drag started with type:', nodeType);
  };

  return (
    <div className="w-56 bg-gray-50 border-r p-4 font-sans">
      <div className="text-xl font-bold mb-4 text-gray-800">Nodes</div>
      
      <div className="space-y-3">
        <div
          className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm cursor-move hover:shadow-md transition-shadow duration-200 flex items-center space-x-3"
          onDragStart={(event) => onDragStart(event, 'question')}
          draggable
        >
          <div className="text-blue-500 text-xl">❓</div>
          <div>
            <div className="font-semibold text-gray-800">Асуулт</div>
            <div className="text-xs text-gray-500">Сонголттой асуулт</div>
          </div>
        </div>
        
        <div
          className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm cursor-move hover:shadow-md transition-shadow duration-200 flex items-center space-x-3"
          onDragStart={(event) => onDragStart(event, 'message')}
          draggable
        >
          <div className="text-green-500 text-xl">💬</div>
          <div>
            <div className="font-semibold text-gray-800">Мессеж</div>
            <div className="text-xs text-gray-500">Мессеж харуулах</div>
          </div>
        </div>
        
    
        <div
          className="p-4 bg-white border border-neutral-200 rounded-xl shadow-sm cursor-move hover:shadow-md transition-shadow duration-200 flex items-center space-x-3"
          onDragStart={(event) => onDragStart(event, 'final')}
          draggable
        >
          <div className="text-purple-500 text-xl">🏁</div>
          <div>
            <div className="font-semibold text-gray-800">Эцсийн</div>
            <div className="text-xs text-gray-500">Ярианы төгсгөл</div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-600">
        <p className="font-semibold mb-2">Заавар:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nodes-г canvas руу чирнэ үү</li>
          <li>Холбоос үүсгэхийн тулд гарыг чирнэ үү</li>
          <li>Шинж чанаруудыг засахын тулд дарна уу</li>
          <li>Урсгалыг JSON болгон экспорт/импорт хийнэ үү</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;