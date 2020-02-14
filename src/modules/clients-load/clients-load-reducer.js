const initialState = {
    clientsInfo: [],
     isLoading: true,
     errorObject: null,
 };

export default function clientsLoadReducer(state = initialState, action)  {
    switch (action.type) {
        case "FETCH_CLIENTS_FAILURE":
            return {...state,
                clientsInfo: [],
                isLoading: false,
                errorObject: action.payload
            };
        case "FETCH_CLIENTS_REQUESTED":
            return {...state,
                isLoading: true,
                errorObject: null
            };

        case "FETCH_CLIENTS_SUCCESS":
            return {...state,
                clientsInfo: action.payload,
                isLoading: false,
                errorObject: null
            };
        default:
            return state
    }

};

