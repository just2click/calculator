export const calculate = (state) => {
    switch (state.operation) {
        case '+':
            state.value += state.operand;
            break;
        case '-':
            state.value = state.operand - state.value;
            break;
        case '*':
            state.value *= state.operand;
            break;
        case '/':
            if (state.value !== 0) {
                state.value = state.operand / state.value;
            } else {
                state.value = null;
            }
    }

    if (state.value) {
        state.digits = state.value.toString();
        state.operand = state.value;
    } else {
        state.digits = 'Error';
        state.operand = 0;
    }

    return state;
};

export const findInJaggedArray = (array, lookFor) => {
    let index = 0;
    const size = array.length;
    while (index <= size) {
        const subArray = array[index];
        const element = subArray.buttons.find(button => {
            return button.value.toString().toLowerCase() === lookFor.toLowerCase();
        });
        if (element) {
            return element;
        }
        index++;
    }
}