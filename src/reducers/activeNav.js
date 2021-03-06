const initialState = {
    list: ['Sản phẩm của shop', 'Bán chạy', 'Ưa thích', 'Yêu thích bởi tôi'],
    idActive: 0,
};

function ActiveNav(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ID':
            const list = [...state.list];
            return { list, idActive: action.payload };

        default:
            return state;
    }
}

export default ActiveNav;
