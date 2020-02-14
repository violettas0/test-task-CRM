const initialState = {
    searchValue: ' ',
    filteredInfo: [],
    search: false
};

export default function searchReducer(state = initialState, action)  {
    switch (action.type) {
        case "SEARCH_SUCCESS":
            return {
                searchValue: action.value,
                filteredInfo: action.filter,
                search: true
            };
        default:
            return state
    }

};