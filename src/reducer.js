export const initialState = {
    bascket: [],
    user: null
}

export const getBascketTotal = (bascket) =>
    bascket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {

    console.log(action);

    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            break;
        case 'ADD_TO_BASCKET':
            return {
                ...state,
                bascket: [...state.bascket, action.item]
            };
            break;
        case 'REMOVE_FROM_BASCKET':

            //cloning of bascket
            let newBascket = [...state.bascket];
            const index = state.bascket.findIndex((bascketItem) => bascketItem.id === action.id)

            if (index >= 0) {
                //bascket is not empty
                newBascket.splice(index, 1)
            }
            else {
                console.log(`Canr remove product (id: ${action.id} as its not there)`)
            }
            return {
                ...state,
                bascket: newBascket

            };
            break;
        default:
            return state;
    }
}

export default reducer;