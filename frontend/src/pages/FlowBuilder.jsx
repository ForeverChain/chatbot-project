import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ReactFlow, 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  addEdge,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';
import flowService from '../services/flowService';

// Node төрлүүд
import QuestionNode from '../components/nodes/QuestionNode';
import MessageNode from '../components/nodes/MessageNode';
import ConditionNode from '../components/nodes/ConditionNode';
import FinalNode from '../components/nodes/FinalNode';

// Хажуу самбар
import Sidebar from '../components/Sidebar';

// Анхдагч node загварууд
const nodeTypes = {
  question: QuestionNode,
  message: MessageNode,
  condition: ConditionNode,
  final: FinalNode,
};

// Асуулт жишээний анхдагч nodes
const initialNodes = [
];

const initialEdges = [
];

const FlowBuilder = () => {
  const { chatbotId, flowId } = useParams();
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [flowName, setFlowName] = useState('Шинэ урсгал');
  const [isLoading, setIsLoading] = useState(false);

  // Load existing flow data when component mounts
  useEffect(() => {
    const loadFlowData = async () => {
      if (flowId) {
        setIsLoading(true);
        try {
          const flowData = await flowService.getFlow(flowId);
          setFlowName(flowData.name);
          
          // Parse the steps data
          if (flowData.steps) {
            setNodes(flowData.steps.nodes || []);
            setEdges(flowData.steps.edges || []);
          }
        } catch (error) {
          console.error('Failed to load flow data:', error);
          alert('Урсгалын мэдээллийг ачаалж чадсангүй!');
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadFlowData();
  }, [flowId, setNodes, setEdges]);

  // Add keyboard event listener for delete functionality
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only delete nodes if:
      // 1. Delete/Backspace key is pressed
      // 2. A node is selected
      // 3. ReactFlow instance exists
      // 4. The focus is NOT on an input or textarea element
      if ((event.key === 'Delete' || event.key === 'Backspace') && 
          selectedNode && 
          reactFlowInstance && 
          !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        event.preventDefault();
        deleteNode(selectedNode.id);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedNode, reactFlowInstance]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, markerEnd: { type: MarkerType.ArrowClosed } }, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      
      // Get the node type from drag data
      const type = event.dataTransfer.getData('application/reactflow');
      
      // Validate we have the required data
      if (!type) {
        console.warn('No type data found in drag event');
        return;
      }
      
      if (!reactFlowInstance) {
        console.warn('ReactFlow instance not ready');
        return;
      }

      // Convert screen coordinates to flow coordinates
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      // Generate a unique ID for the new node
      const id = `${type}-${+new Date()}`;
      
      // Create the new node with appropriate default data
      const newNode = {
        id,
        type,
        position,
        data: getDefaultDataForType(type),
      };

      console.log('Creating new node:', newNode);
      
      // Add the new node to the state
      setNodes((nds) => {
        const updatedNodes = [...nds, newNode];
        console.log('Updated nodes:', updatedNodes);
        return updatedNodes;
      });
    },
    [reactFlowInstance, nodes] // Added nodes to dependency array
  );

  const getDefaultDataForType = (type) => {
    switch (type) {
      case 'question':
        return { 
          label: 'Шинэ асуулт',
          options: [
            { id: 'opt1', text: 'Сонголт 1' },
            { id: 'opt2', text: 'Сонголт 2' }
          ]
        };
      case 'message':
        return { label: 'Шинэ мессеж' };
      case 'condition':
        return { 
          label: 'Шинэ нөхцөл',
          expression: 'утга > 0'
        };
      case 'final':
        return { label: 'Эцсийн мессеж' };
      default:
        return { label: 'Node' };
    }
  };

  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const updateNodeData = (id, data) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, data } : node))
    );
  };

  // Function to delete a node and its connected edges
  const deleteNode = useCallback((nodeId) => {
    if (!reactFlowInstance) return;
    
    // Use ReactFlow's deleteElements function to properly remove node and connected edges
    reactFlowInstance.deleteElements({ nodes: [{ id: nodeId }] });
    setSelectedNode(null);
  }, [reactFlowInstance]);

  const exportFlow = () => {
    const flow = {
      name: flowName,
      nodes,
      edges,
    };
    const dataStr = JSON.stringify(flow, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileDefaultName = 'chatbot-flow.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const importFlow = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const flow = JSON.parse(e.target.result);
        if (flow.nodes && flow.edges) {
          setNodes(flow.nodes);
          setEdges(flow.edges);
          if (flow.name) {
            setFlowName(flow.name);
          }
        }
      } catch (error) {
        console.error('Урсгалын JSON файлыг уншихад алдаа гарлаа:', error);
        alert('Буруу JSON файл');
      }
    };
    reader.readAsText(file);
  };

  // Save flow to backend
  const saveFlow = async () => {
    if (!chatbotId) {
      alert('Чатботын ID олдсонгүй!');
      return;
    }

    try {
      const flowData = {
        name: flowName,
        nodes,
        edges
      };

      if (flowId) {
        // Update existing flow
        const response = await flowService.updateFlow(flowId, flowData);
        console.log('Урсгал амжилттай шинэчлэгдлээ:', response);
        alert('Урсгал амжилттай шинэчлэгдлээ!');
      } else {
        // Create new flow
        const response = await flowService.createFlow(chatbotId, flowData);
        console.log('Урсгал амжилттай хадгалагдлаа:', response);
        alert('Урсгал амжилттай хадгалагдлаа!');
      }
    } catch (error) {
      console.error('Урсгалыг хадгалахад алдаа гарлаа:', error);
      alert('Урсгалыг хадгалахад алдаа гарлаа!');
    }
  };

  const onInit = useCallback((instance) => {
    console.log('ReactFlow instance initialized:', instance);
    setReactFlowInstance(instance);
  }, []);
  
  return (
    <div className="flex flex-col h-screen font-sans flowbuilder-container">
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <p>Урсгалын мэдээллийг ачаалж байна...</p>
          </div>
        </div>
      )}
      
      <div className="p-4 bg-gray-50 border-b border-neutral-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Чатбот Урсгал Зохион Байгуулагч</h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={flowName}
              onChange={(e) => setFlowName(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Урсгалын нэр"
            />
            <button 
              onClick={saveFlow}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
            >
              Урсгалыг хадгалах
            </button>
            <button 
              onClick={exportFlow}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
            >
              Урсгалыг экспортлох
            </button>
            <label className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium cursor-pointer">
              Урсгалыг импортлох
              <input 
                type="file" 
                accept=".json" 
                onChange={importFlow} 
                className="hidden" 
              />
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        <Sidebar />
        <div 
          ref={reactFlowWrapper} 
          className="reactflow-wrapper"
          style={{ width: '100%', height: '100%', minHeight: 0 }}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            onNodeClick={handleNodeClick}
            nodeTypes={nodeTypes}
            fitView
            attributionPosition="bottom-left"
            // Enable drag and drop
            fitViewOptions={{ padding: 0.2 }}
            // Ensure the component takes full size
            style={{ width: '100%', height: '100%' }}
            // Enable delete key functionality
            deleteKeyCode={['Backspace', 'Delete']}
          >
            <Controls className="bg-white rounded-lg shadow-md border border-neutral-200" />
            <MiniMap 
              className="bg-white rounded-lg shadow-md border border-neutral-200" 
              maskColor="rgba(240, 240, 240, 0.7)"
            />
            <Background 
              variant="dots" 
              gap={20} 
              size={1} 
              color="#e5e5e5"
            />
          </ReactFlow>
        </div>
        
        {selectedNode && (
          <div className="w-80 p-4 bg-white border-l border-neutral-200 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Node шинж чанарууд</h2>
              <button 
                onClick={() => deleteNode(selectedNode.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                title="Node устгах"
              >
                Устгах
              </button>
            </div>
            {renderNodeEditor(selectedNode, updateNodeData, setSelectedNode, deleteNode)}
          </div>
        )}
      </div>
    </div>
  );
};

const renderNodeEditor = (node, updateNodeData, setSelectedNode, deleteNode) => {
  const onDataChange = (newData) => {
    updateNodeData(node.id, { ...node.data, ...newData });
  };

  switch (node.type) {
    case 'question':
      return (
        <QuestionNodeEditor 
          data={node.data} 
          onChange={onDataChange} 
          onClose={() => setSelectedNode(null)} 
          onDelete={() => deleteNode(node.id)}
        />
      );
    case 'message':
      return (
        <MessageNodeEditor 
          data={node.data} 
          onChange={onDataChange} 
          onClose={() => setSelectedNode(null)} 
          onDelete={() => deleteNode(node.id)}
        />
      );
    case 'condition':
      return (
        <ConditionNodeEditor 
          data={node.data} 
          onChange={onDataChange} 
          onClose={() => setSelectedNode(null)} 
          onDelete={() => deleteNode(node.id)}
        />
      );
    case 'final':
      return (
        <FinalNodeEditor 
          data={node.data} 
          onChange={onDataChange} 
          onClose={() => setSelectedNode(null)} 
          onDelete={() => deleteNode(node.id)}
        />
      );
    default:
      return (
        <div>
          <p>Тодорхойгүй node төрөл: {node.type}</p>
          <div className="flex space-x-2 mt-2">
            <button 
              onClick={() => deleteNode(node.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Устгах
            </button>
            <button 
              onClick={() => setSelectedNode(null)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Хаах
            </button>
          </div>
        </div>
      );
  }
};

// Node засварлагч компонентууд
const QuestionNodeEditor = ({ data, onChange, onClose, onDelete }) => {
  const [label, setLabel] = useState(data.label || '');
  const [options, setOptions] = useState(data.options || [{ id: 'opt1', text: 'Сонголт 1' }]);

  const handleSave = () => {
    onChange({ label, options });
    onClose();
  };

  const addOption = () => {
    const newOption = {
      id: `opt${options.length + 1}`,
      text: `Сонголт ${options.length + 1}`
    };
    setOptions([...options, newOption]);
  };

  const updateOption = (id, text) => {
    setOptions(options.map(opt => opt.id === id ? { ...opt, text } : opt));
  };

  const removeOption = (id) => {
    if (options.length > 1) {
      setOptions(options.filter(opt => opt.id !== id));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Асуулт</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Сонголтууд</label>
        {options.map((option) => (
          <div key={option.id} className="flex mb-2 items-center">
            <input
              type="text"
              value={option.text}
              onChange={(e) => updateOption(option.id, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => removeOption(option.id)}
              className="ml-2 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              ×
            </button>
          </div>
        ))}
        <button
          onClick={addOption}
          className="mt-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          Сонголт нэмэх
        </button>
      </div>
      
      <div className="flex space-x-2 pt-2">
        <button
          onClick={handleSave}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Хадгалах
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Устгах
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors font-medium"
        >
          Цуцлах
        </button>
      </div>
    </div>
  );
};

const MessageNodeEditor = ({ data, onChange, onClose, onDelete }) => {
  const [label, setLabel] = useState(data.label || '');

  const handleSave = () => {
    onChange({ label });
    onClose();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Мессеж</label>
        <textarea
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
        />
      </div>
      
      <div className="flex space-x-2 pt-2">
        <button
          onClick={handleSave}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Хадгалах
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Устгах
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors font-medium"
        >
          Цуцлах
        </button>
      </div>
    </div>
  );
};

const ConditionNodeEditor = ({ data, onChange, onClose, onDelete }) => {
  const [label, setLabel] = useState(data.label || '');
  const [expression, setExpression] = useState(data.expression || '');

  const handleSave = () => {
    onChange({ label, expression });
    onClose();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Нөхцлийн нэр</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Илэрхийлэл</label>
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
          placeholder="Жишээ: score >= 5"
        />
        <p className="text-xs text-gray-500 mt-1">
          Хувьсагч ашиглах: score, userAnswer гэх мэт
        </p>
      </div>
      
      <div className="flex space-x-2 pt-2">
        <button
          onClick={handleSave}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Хадгалах
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Устгах
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors font-medium"
        >
          Цуцлах
        </button>
      </div>
    </div>
  );
};

const FinalNodeEditor = ({ data, onChange, onClose, onDelete }) => {
  const [label, setLabel] = useState(data.label || '');

  const handleSave = () => {
    onChange({ label });
    onClose();
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Эцсийн мессеж</label>
        <textarea
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
        />
      </div>
      
      <div className="flex space-x-2 pt-2">
        <button
          onClick={handleSave}
          className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Хадгалах
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Устгах
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors font-medium"
        >
          Цуцлах
        </button>
      </div>
    </div>
  );
};

export default FlowBuilder;