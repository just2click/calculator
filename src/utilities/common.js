export const calculate = (state) => {
    switch (state.operation) {
        case '+':
            state.value += state.operand;
            break;
        case '-':
            state.value -= state.operand;
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

    return state.value;
};

