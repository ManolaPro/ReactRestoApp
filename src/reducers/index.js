const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ADD_ITEM_TO_CARD':
            const id = action.payload;
            const itemCaunt = state.items.findIndex(item=> item.id === id);
            if (itemCaunt >= 0) {
                const itemState = state.items.find(item=> item.id === id);
                const newItem = {
                    ...itemState,
                    caunt: ++itemState.caunt
                    
                }
                return {
                    ...state,
                    items:[
                        ...state.items.slice(0, itemCaunt),
                        newItem,
                        ...state.items.slice(itemCaunt + 1),
                    ],
                    totalPrice: state.totalPrice + newItem.price
                };
            }
            
            
            const item = state.menu.find(item=> item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                caunt: 1
            };
            return {
                ...state,
                items:[
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };
        case 'REMOVE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['caunt'];
            console.log(state.items[itemIndex])
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - price
            }
        default:
            return state;
    }
}

export default reducer;