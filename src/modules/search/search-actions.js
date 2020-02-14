import {SEARCH_SUCCESS} from "./search-types";

const search = (searchValue, filter) => {
    return {type: SEARCH_SUCCESS, value: searchValue, filter: filter};
};

export {search}