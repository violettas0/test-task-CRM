const initialState = {
    isNeedToOpen: false,
    contractInfo: {}
};

export default function contractFormReducer(state = initialState, action)  {
    switch (action.type) {
        case "CHANGE_OBJECT_FORM":
            return {...state,
                [action.payload[0]]: action.payload[1]
            };
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
