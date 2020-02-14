const initialState = {
    isNeedToOpen: false,
    contractInfo: {}
};

export default function contractFormReducer(state = initialState, action)  {
    switch (action.type) {
        case "CLOSE_OBJECT_SUCCESS":
            return {
                isNeedToOpen: false,
                contractInfo: {}
            };
        case "OPEN_OBJECT_SUCCESS":
            return {...state,
                isNeedToOpen: true,
                contractInfo: action.payload
            };
        default:
            return state
    }
};
