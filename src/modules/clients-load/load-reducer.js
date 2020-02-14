const initialState = {
    clientsInfo: [],
     isLoading: true,
     errorObject: null,
 };

export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLIENT_CHANGE":
            return {...state,
                value: action.payload
            };
        case "CLIENT_FORM":
            return {...state,
                id: action.payload,
                form: true
            };
        case "CLIENTS_LOADING_ERROR":
            return {...state,
                clientsInfo: [],
                isLoading: false,
                errorObject: action.payload
            };
        case "CLIENTS_REQUESTED":
            return {...state,
                isLoading: true,
                errorObject: null
            };

        case "CLIENTS_LOADED":
            return {...state,
                clientsInfo: action.payload,
                isLoading: false,
                errorObject: null
            };
        default:
            return state
    }

};

