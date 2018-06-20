import * as types from '../types';
import { clearDisplay, calculate, reset } from '../../utilities/common.js';

const state = {
    value: 0,
    operand: 0,
    digits: '0',
    operation: '',
    isInProcess: false,
    actionStarted: null
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
        if (state.actionStarted !== null) {
            state = calculate(state);
        }
        state.actionStarted = true;
        state.operation = payload;
        state.operand = state.value;
    },
    execute: (state, payload) => {
        debugger;
        switch (payload.toLowerCase()) {
            case 'c':
                state = reset();
                break;
            case '=':
                state = calculate(state);
                break;
            case 'del':
                if (state.digits === '') {
                    state = reset();
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