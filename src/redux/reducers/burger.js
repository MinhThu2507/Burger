import { INCREASE_DECREASE } from "../types/burgerType";

const initialState = {
    burger: {
        salad: 2,
        cheese: 2,
        beef: 2
    },
    menu: {
        salad: 10,
        cheese: 15,
        beef: 20
    },

    total: 90
}

const burgerReducer = ((state = initialState, action) => {
    switch (action.type) {
        case INCREASE_DECREASE: {
            const { propBurger, type } = action.payload;
            const burgerUpdate = { ...state.burger }
            // Kiểm tra nếu số lượng < 1 thì return state
            if (state.burger[propBurger] < 1 && type == -1) {
                return { ...state }
            }
            // Cập nhật burger
            burgerUpdate[propBurger] += type;
            state.burger = burgerUpdate

            // Tính tổng tiền
            state.total += type * state.menu[propBurger]
            return { ...state }
        }

        default:
            return { ...state }
    }
})

export default burgerReducer