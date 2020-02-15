const initialState = {
    objectsInfo: [],
};

export default function contractLoadReducer(state = initialState, action)  {
    switch (action.type) {
        case "FETCH_OBJECTS_SUCCESS":
            return {
                objectsInfo: action.payload,
            };
        default:
            return state
    }
};
