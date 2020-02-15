const initialState = {
    isNeedToOpenContract: false,
    isNeedToAddContract: false,
    contractInfo: {},
    id: ""
};

export default function contractFormReducer(state = initialState, action)  {
    switch (action.type) {
        case "NEW_OBJECT_FORM":
            return {
                isNeedToOpenContract: false,
                isNeedToAddContract: true,
                contractInfo: {},
                id: action.payload
            };
        case "CHANGE_OBJECT_FORM":
            return {...state,
                [action.payload[0]]: action.payload[1]
            };
        case "CLOSE_OBJECT_SUCCESS":
            return {
                isNeedToOpenContract: false,
                contractInfo: {}
            };
        case "OPEN_OBJECT_SUCCESS":
            return {...state,
                isNeedToOpenContract: true,
                contractInfo: action.payload
            };
        default:
            return state
    }
};
