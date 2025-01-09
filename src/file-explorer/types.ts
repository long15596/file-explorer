export const FILE_TYPES = {
    FOLDER: 'FOLDER',
    FILE: 'FILE'
};

export const INITIAL_FILE_STRUCTURE = {
    key: 'root',
    children: [
        {
            key: 'src',
            label: 'src',
            data: FILE_TYPES.FOLDER,
            icon: 'pi pi-folder',
            children: [
                {
                    key: 'src/components',
                    label: 'components',
                    data: FILE_TYPES.FOLDER,
                    icon: 'pi pi-folder',
                    children: [
                        {
                            key: 'src/components/Header.js',
                            label: 'Header.js',
                            data: FILE_TYPES.FILE,
                            icon: 'pi pi-file'
                        },
                        {
                            key: 'src/components/Footer.js',
                            label: 'Footer.js',
                            data: FILE_TYPES.FILE,
                            icon: 'pi pi-file'
                        }
                    ]
                },
                {
                    key: 'src/App.js',
                    label: 'App.js',
                    data: FILE_TYPES.FILE,
                    icon: 'pi pi-file'
                },
                {
                    key: 'src/index.js',
                    label: 'index.js',
                    data: FILE_TYPES.FILE,
                    icon: 'pi pi-file'
                }
            ]
        },
        {
            key: 'public',
            label: 'public',
            data: FILE_TYPES.FOLDER,
            icon: 'pi pi-folder',
            children: [
                {
                    key: 'public/index.html',
                    label: 'index.html',
                    data: FILE_TYPES.FILE,
                    icon: 'pi pi-file'
                },
                {
                    key: 'public/favicon.ico',
                    label: 'favicon.ico',
                    data: FILE_TYPES.FILE,
                    icon: 'pi pi-file'
                }
            ]
        },
        {
            key: 'README.md',
            label: 'README.md',
            data: FILE_TYPES.FILE,
            icon: 'pi pi-file'
        }
    ]
};