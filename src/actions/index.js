const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCard = (id) => {
    return {
        type: 'ADD_ITEM_TO_CARD',
        payload: id
    };
};
const onDelete = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
    onDelete
};