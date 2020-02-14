const initialState = {
    form: false,
    id: null
};

export default function formReducer (state = initialState, action) {
    switch (action.type) {
        case "CLIENT_FORM_CLOSE":
            return {...state,
                form: false,
                id: null
            };
        case "CLIENT_FORM_CHANGE":
            return {...state,
                [action.payload[0]]: action.payload[1]
            };
        case "CLIENT_FORM_OPEN":
            return {...state,
                id: action.payload,
                form: true
            };
        default:
            return state
    }

};
