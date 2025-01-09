import { useState } from 'react';
import { INITIAL_FILE_STRUCTURE, FILE_TYPES } from '../types';

export const useFileStructure = () => {
    const [fileStructure, setFileStructure] = useState(INITIAL_FILE_STRUCTURE);
    const [expandedKeys, setExpandedKeys] = useState({});

    const findNodeByKey = (nodes, key) => {
        for (let node of nodes) {
            if (node.key === key) return node;
            if (node.children) {
                const found = findNodeByKey(node.children, key);
                if (found) return found;
            }
        }
        return null;
    };

    const addNode = (type: string, parentKey: any) => {
        const name = prompt(`Enter ${type} name:`);
        if (!name) return;

        const newNode = {
            key: parentKey ? `${parentKey}/${name}` : name,
            label: name,
            data: type === FILE_TYPES.FOLDER ? FILE_TYPES.FOLDER : FILE_TYPES.FILE,
            icon: type === FILE_TYPES.FOLDER ? 'pi pi-folder' : 'pi pi-file',
            children: type === FILE_TYPES.FOLDER ? [] : undefined
        };

        setFileStructure(prevStructure => {
            const newStructure = { ...prevStructure };
            if (parentKey) {
                const parent = findNodeByKey([newStructure], parentKey);
                if (parent && parent.children) {
                    parent.children.push(newNode);
                }
            } else {
                newStructure.children.push(newNode);
            }
            return newStructure;
        });
    };

    const deleteNode = (key) => {
        setFileStructure((prevStructure) => {
            const removeNode = (nodes, key) => {
                return nodes.filter((node) => {
                    if (node.key === key) return false;
                    if (node.children) {
                        node.children = removeNode(node.children, key);
                    }
                    return true;
                });
            };

            const newStructure = { ...prevStructure };
            newStructure.children = removeNode(newStructure.children, key);
            return newStructure;
        });
    };

    return {
        fileStructure,
        expandedKeys,
        setExpandedKeys,
        addNode,
        deleteNode,
        findNodeByKey
    };
};