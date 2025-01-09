import { FILE_TYPES } from './types';

const FilePreview = ({ selectedNode }) => {
    if (!selectedNode || selectedNode.data !== FILE_TYPES.FILE) {
        return null;
    }

    return (
        <div className="flex-1 p-4">
            <h2 className="text-xl font-medium mb-4">
                File Content: {selectedNode.key}
            </h2>
            <p className="text-gray-600">
                This is a preview of {selectedNode.label}
            </p>
        </div>
    );
};

export default FilePreview;