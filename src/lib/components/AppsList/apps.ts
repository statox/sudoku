export const gameSection = {
    name: 'Game',
    apps: [
        {
            name: 'Game',
            description: 'Play sudoku',
            link: '/game'
        }
    ]
};

export const utilsSection = {
    name: 'Utils',
    apps: [
        {
            name: 'Wave Function Collapse generator',
            description: 'Generate new grid and see the WFC algorithm in action',
            link: '/generator'
        },
        {
            name: 'Human solver',
            description:
                'Autogenerate grids and see how a human would solve it, listing possible values in each cell and identifying possible moves.',
            link: '/human-solver'
        },
        {
            name: 'Computer solver',
            description: 'Input any grid and let the machine solve it with a DFS algorithm',
            link: '/computer-solver'
        }
    ]
};

export const allApps = [gameSection, utilsSection];
