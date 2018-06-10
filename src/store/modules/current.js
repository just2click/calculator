import * as types from '../types';
import { clearDisplay, calculate } from '../../utilities/common.js';

const state = {
    value: 0,
    operand: 0,
    digits: '0',
    operation: '',
    isInProcess: false,
    actionStarted: false
}

const getters = {
    [types.NEXT_VALUE]: state => {

    },

    [types.GET_DISPLAY]: state => {
        return state.digits;
    }
}

const mutations = {
    numberClick: (state, payload) => {
        if (!state.isInProcess) {
            state.isInProcess = true;
            state.digits = payload.toString();
        } else {
            if (state.actionStarted) {
                state.digits = '';
                state.actionStarted = false;
            }
            state.digits += payload.toString();
        }
        state.value = parseInt(state.digits);
    },
    setOperation: (state, payload) => {
        state.actionStarted = true;
        state.operation = payload;
        state.operand = state.value;
    },
    execute: (state, payload) => {
        switch (payload.toLowerCase()) {
            case 'c':
                state.value = 0;
                state.operand = 0;
                state.operation = '';
                state.digits = '0';
                break;
            case '=':
                state.value = calculate(state);
                if (state.value) {
                    state.digits = state.value.toString();
                    state.operand = state.value;
                } else {
                    state.digits = 'Error';
                    state.operand = 0;
                }
                break;
        }
    }
}

const actions = {
    numberClick: ({ commit }, payload) => {
        commit ('numberClick', payload);
    },
    setOperation: ({ commit }, payload) => {
        commit ('setOperation', payload);
    },
    execute: ({ commit }, payload) => {
        commit ('execute', payload);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}