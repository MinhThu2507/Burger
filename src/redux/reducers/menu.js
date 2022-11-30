import { INCREASE_DECREASE } from "../types/burgerType";

const initialState = {
    menu: {
        salad: 10,
        cheese: 15,
        beef: 20
    },

    total: 90

}

const menuReducer = ((state = initialState, action) => {
    switch (action.type) {
        case INCREASE_DECREASE: 
            {
                const { propBurger, type } = action.payload;
                console.log(propBurger, type, state.total);
                return {
                    ...state,
                    total: state.total += type * state.menu[propBurger]
                }
            }
        
        default:
            return { ...state }
    }
})

export default menuReducer