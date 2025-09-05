import React from 'react';
import { Handle, Position } from 'reactflow';

const QuestionNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-2xl bg-white border border-neutral-300 transition-all duration-200 hover:shadow-xl hover:shadow-blue-100">
      <div className="font-bold text-base text-center text-blue-600">
        ❓ Асуулт
      </div>
      <div className="text-sm my-2 text-center font-medium">
        {data.label}
      </div>
      
      <div className="flex flex-col space-y-2 mt-2">
        {data.options?.map((option, index) => (
          <div key={option.id} className="relative">
            <div className="text-sm px-3 py-2 bg-blue-50 rounded-lg font-medium">
              {option.text}
            </div>
            <Handle
              type="source"
              position={Position.Right}
              id={option.id}
              style={{ 
                background: '#555',
                width: 10,
                height: 10,
                right: -5,
                top: '50%'
              }}
              className="border-2 border-white"
            />
          </div>
        ))}
      </div>
      
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        className="border-2 border-white"
      />
    </div>
  );
};

export default QuestionNode;