import { FETCH_OBJECTS_SUCCESS} from "./contract-load-types"

const objectInfoLoaded = (objs) => {
    return {type: FETCH_OBJECTS_SUCCESS, payload: objs};
};



export { objectInfoLoaded }