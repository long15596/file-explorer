import { Tree } from 'primereact/tree';
import { Panel } from 'primereact/panel';

const FileTree = ({
                      fileStructure,
                      expandedKeys,
                      selectedNode,
                      onToggle,
                      onSelect,
                      onContextMenu,
                  }) => {
    return (
        <div className="w-20rem border-right-1 border-gray-200">
            <Panel header="EXPLORER" className="h-full">
                <Tree
                    value={fileStructure?.children || []}
                    expandedKeys={expandedKeys}
                    onToggle={onToggle}
                    selectionMode="single"
                    selectionKeys={selectedNode?.key}
                    onSelectionChange={(e) => onSelect(e.value)}
                    contextMenuSelectionKey={selectedNode?.key}
                    onContextMenu={onContextMenu}
                />
            </Panel>
        </div>
    );
};

export default FileTree;
