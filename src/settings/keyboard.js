export const keyboardLayout = [
    {
        key: 'row1' ,
        buttons:
        [
            { key: 'one', value: 1, type: 'number' },
            { key: 'two', value: 2, type: 'number' },
            { key: 'three', value: 3, type: 'number' },
            { key: 'plus', value: '+', type: 'operation' }
        ]
    },
    {
        key: 'row2',
        buttons: [
            { key: 'four', value: 4, type: 'number' },
            { key: 'five', value: 5, type: 'number' },
            { key: 'six', value: 6, type: 'number' },
            { key: 'minus', value: '-', type: 'operation' }
        ]
    },
    {
        key: 'row3',
        buttons: [
            { key: 'seven', value: 7, type: 'number' },
            { key: 'eight', value: 8, type: 'number' },
            { key: 'nine', value: 9, type: 'number' },
            { key: 'multiply', value: '*', type: 'operation' }
        ]
    },
    {
        key: 'row4',
        buttons: [
            { key: 'claer', value: 'C', type: 'execute' },
            { key: 'zero', value: 0, type: 'number' },
            { key: 'equal', value: '=', type: 'execute' },
            { key: 'divide', value: '/', type: 'operation' }
        ]
    }
];

export const clickableButtons = [
    1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'c', 0, '=', '/'
];

export const specialButtons = [
    'Backspace', 'Enter'
]