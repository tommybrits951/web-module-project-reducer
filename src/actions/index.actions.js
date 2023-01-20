export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const DISPLAY_NUM = "DISPLAY_NUM";
export const CALCULATE_VALUE = 'CALCULATE_VALUE';
export const DELETE_DIGIT = "DELETE_DIGIT";
export const CLEAR_SCREEN = "CLEAR_SCREEN";
export const CHECK_MEMORY = "CHECK_MEMORY";
export const UP_ONE = "UP_ONE";



export const displayNum = (num) => {
    return {type: DISPLAY_NUM, payload: num}
}



export const calculateValue = () => {
    return {type:CALCULATE_VALUE}
} 

export const deleteDigit = () => {
    return {type: DELETE_DIGIT}
}

export const clearScreen = () => {
    return {type: CLEAR_SCREEN}
}


export const checkMemory = () => {
    return {type: CHECK_MEMORY}
}

export const clearMemory = () => {
    return {type: CLEAR_MEMORY}
}

export const upOne = () => {
    return {type: UP_ONE}
}