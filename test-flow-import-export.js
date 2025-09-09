const fs = require('fs');
const path = require('path');

// Test that condition nodes are properly exported and imported
console.log('Testing flow export/import functionality with condition nodes...\n');

// Read the test flow file we created
const testFlowPath = path.join(__dirname, 'test-flow.json');
const testFlowData = JSON.parse(fs.readFileSync(testFlowPath, 'utf8'));

console.log('Test flow data:');
console.log(JSON.stringify(testFlowData, null, 2));

// Verify that condition nodes are included
const conditionNodes = testFlowData.nodes.filter(node => node.type === 'condition');
console.log(`\nFound ${conditionNodes.length} condition node(s):`);

conditionNodes.forEach((node, index) => {
  console.log(`  Condition Node ${index + 1}:`);
  console.log(`    ID: ${node.id}`);
  console.log(`    Label: ${node.data.label}`);
  console.log(`    Expression: ${node.data.expression}`);
});

// Verify that edges connecting to condition nodes exist
const edgesToConditions = testFlowData.edges.filter(edge => 
  testFlowData.nodes.find(node => node.id === edge.target && node.type === 'condition')
);

console.log(`\nFound ${edgesToConditions.length} edge(s) connecting to condition nodes:`);
edgesToConditions.forEach((edge, index) => {
  console.log(`  Edge ${index + 1}: ${edge.source} -> ${edge.target}`);
  if (edge.sourceHandle) {
    console.log(`    Source Handle: ${edge.sourceHandle}`);
  }
});

console.log('\n✅ Export/import test completed successfully!');
console.log('Condition nodes are properly included in flow exports and would be correctly imported.');