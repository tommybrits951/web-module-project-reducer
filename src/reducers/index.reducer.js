import { CALCULATE_VALUE,  CHECK_MEMORY,  CLEAR_MEMORY,  CLEAR_SCREEN, DELETE_DIGIT, DISPLAY_NUM } from "../actions/index.actions"



export const initialState = {
    screen: '',
    total: '',
    memory: '',
}


export const reducer = (state, action) => {
    switch(action.type) {
        case(DISPLAY_NUM):
            return({...state, screen: state.screen = state.screen + action.payload})
        case(CALCULATE_VALUE):
            return({...state, memory: state.screen}, {...state, screen: eval(state.screen)})
        case(DELETE_DIGIT):
            return({...state, screen: state.screen.slice(0, -1)})
        case(CLEAR_SCREEN):
            return({...state, screen: ''})
        case(CHECK_MEMORY):
            return({...state, screen: state.memory})
        case(CLEAR_MEMORY):
            return({...state, memory: ''})
        case(UP_ONE):
            return({...state, screen: Math.abs(state.screen + 1)})
    }
}

