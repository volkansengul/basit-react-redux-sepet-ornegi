const initialState = {
    basketList : []
};

export default function BasketReducer(state=initialState, action){

    let updatedList = state.basketList;
    switch(action.type){
        case 'Add':
            if (updatedList[action.payload.id]===undefined){
                updatedList[action.payload.id] = action.payload;
                updatedList[action.payload.id].count = 1;
            } else {
                updatedList[action.payload.id].count += 1;
            }
            return {
                ...state,
                basketList: updatedList
            };
            break;
        case 'Remove':
            delete(updatedList[action.payload]);
            return {
                ...state,
                basketList: updatedList
            };
            return state;
            break;
        default:
            return state;
            break;
    }
}