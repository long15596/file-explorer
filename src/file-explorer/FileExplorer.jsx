import React, {useRef} from 'react';
import FileTree from './FileTree';
import FilePreview from './FilePreview';
import FileContextMenu from './FileContextMenu';
import {useFileStructure} from './hooks/useFileStructure';
import {useFileSelection} from './hooks/useFileSelection';
import {FILE_TYPES} from "./types.ts";

export const FileExplorer = () => {
    const cm = useRef(null);
    const {
        fileStructure,
        expandedKeys,
        setExpandedKeys,
        addNode,
        deleteNode,
    } = useFileStructure()

    const {
        selectedNode,
        setSelectedNode,
        handleSelect
    } = useFileSelection()

    const handleLeftClick = (node) => {
        handleSelect(node)
    };


    const handleContextMenu = (event, node) => {
        event.preventDefault();
        setSelectedNode(node);
        cm.current.show(event);
    }

    return (
        <div className="h-screen">
            <FileTree
                fileStructure={fileStructure}
                expandedKeys={expandedKeys}
                selectedNode={selectedNode}
                onToggle={e => setExpandedKeys(e.value)}
                onSelect={e => handleLeftClick(e.node)}
                onContextMenu={(e) => handleContextMenu(e.originalEvent, e.node)}
            />

            <FileContextMenu
                menuRef={cm}
                onAddNode={addNode}
                selectedNode={selectedNode}
                onDeleteNode={deleteNode}
                onHide={() => setSelectedNode(null)}
            />

            {selectedNode?.data === FILE_TYPES.FILE && <FilePreview selectedNode={selectedNode}/>}
        </div>
    )
}


