const initialState = {
    form: false,
    newForm: false,
    id: null
};

export default function clientFormReducer (state = initialState, action) {
    switch (action.type) {
        case "CLIENT_MAKE_NEW_FORM":
            return {
                form: false,
                id: action.payload,
                newForm: true
            };
        case "CLIENT_FORM_CLOSE":
            return {
                form: false,
                newForm: false,
                id: null
            };
        case "CLIENT_FORM_CHANGE":
            return {...state,
                [action.payload[0]]: action.payload[1]
            };
        case "CLIENT_FORM_OPEN":
            return {...state,
                id: action.payload,
                form: true,
                newForm: false
            };
        default:
            return state
    }

};
