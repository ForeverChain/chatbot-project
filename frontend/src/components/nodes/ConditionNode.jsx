import React from 'react';
import { Handle, Position } from 'reactflow';

const ConditionNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-2xl bg-white border border-neutral-300 transition-all duration-200 hover:shadow-xl hover:shadow-yellow-100">
      <div className="font-bold text-base text-center text-yellow-600">
        ⚖️ Нөхцөл
      </div>
      <div className="text-sm my-1 text-center font-semibold">
        {data.label}
      </div>
      <div className="text-sm my-1 text-center font-mono bg-yellow-50 p-2 rounded-lg">
        {data.expression}
      </div>
      
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        className="border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        className="border-2 border-white"
      />
    </div>
  );
};

export default ConditionNode;