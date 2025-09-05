import React from 'react';
import { Handle, Position } from 'reactflow';

const FinalNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-2xl bg-white border border-neutral-300 transition-all duration-200 hover:shadow-xl hover:shadow-purple-100">
      <div className="font-bold text-base text-center text-purple-600">
        🏁 Эцсийн
      </div>
      <div className="text-sm my-2 max-w-xs break-words font-medium">
        {data.label}
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

export default FinalNode;