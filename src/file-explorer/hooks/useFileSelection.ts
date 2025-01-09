import { useState } from 'react';

export const useFileSelection = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    const handleSelect = (node) => {
        setSelectedNode(node);
    };

    return {
        selectedNode,
        setSelectedNode,
        handleSelect
    };
};