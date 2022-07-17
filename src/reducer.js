export const initialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    console.log(action);

    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            break;
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASKET':

            //cloning of basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                //basket is not empty
                newBasket.splice(index, 1)
            }
            else {
                console.log(`Canr remove product (id: ${action.id} as its not there)`)
            }
            return {
                ...state,
                basket: newBasket

            };
            break;
        default:
            return state;
    }
}

export default reducer;