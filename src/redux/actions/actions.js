import { INCREASE_DECREASE } from "../types/burgerType"

export const increaseDecrease = (data) => {
    return {
        type: INCREASE_DECREASE,
        payload: data
    }
}

