import { keyboardLayout, specialButtons } from '../settings/keyboard';

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

const findInJaggedArray = (array, lookFor) => {
    let index = 0;
    const size = array.length;
    while (index < size) {
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

export const reset = (state) => {
    state.value = 0;
    state.operand = 0;
    state.digits = '0';
    state.operation = '';
    state.isInProcess = false;
    state.actionStarted = null;

    return state;
}

export const handleKeyboardEvent = (ev, store) => {
    let specialButtonsClicked = (specialButtons.indexOf(ev.key) >= 0);

    if (specialButtonsClicked) {
        if (ev.key === specialButtons[0]) { // Backspace

        } else if (ev.key === specialButtons[1]) { // Enter
            store.dispatch('execute', '=');
        }
    } else {
        let shiftClicked = ev.shiftKey;
        if (!shiftClicked) {
          const key = findInJaggedArray(keyboardLayout, ev.key);
          if (key) {
              switch (key.type) {
                case 'number':
                    store.dispatch('numberClick', key.value);
                    break;
                case 'operation':
                    store.dispatch('setOperation', key.value);
                    break;
                case 'execute':
                    store.dispatch('execute', key.value);
                    break;
              }
          }
        } else {
          // Support keyboard keys with shift
          console.log(ev.key);
          switch (ev.key) {
            case '*':
                store.dispatch('setOperation', '*');
                break;
            case '?':
                store.dispatch('setOperation', '/');
                break;
            case '+':
                store.dispatch('setOperation', '+');
                break;
            case '-':
                store.dispatch('setOperation', '-');
                break;
          }
        }
    }

}