import React from 'react';
import {ContextMenu} from 'primereact/contextmenu';
import {FILE_TYPES} from './types';

const FileContextMenu = ({ menuRef, onAddNode, selectedNode, onHide, onDeleteNode }) => {
    const menuModel = [
        selectedNode?.data === FILE_TYPES.FOLDER && {
            label: 'Add Folder',
            icon: 'pi pi-folder',
            command: () => onAddNode(FILE_TYPES.FOLDER, selectedNode?.key),
        },
        selectedNode?.data === FILE_TYPES.FOLDER && {
            label: 'Add File',
            icon: 'pi pi-file',
            command: () => onAddNode(FILE_TYPES.FILE, selectedNode?.key),
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => onDeleteNode(selectedNode?.key),
        },
    ].filter(Boolean)

    return (
        <ContextMenu
            model={menuModel}
            ref={menuRef}
            onHide={onHide}
            appendTo={document.body}
        />
    );
};


export default FileContextMenu;