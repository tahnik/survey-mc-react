export function page_data(state={}, action) {
    switch (action.type) {
        case "SIGN_IN":
            return {...state, password: action.payload};
        case "PAGE_1":
            console.log(state);
            return {...state, page1: action.payload};
        case "PAGE_2":
            console.log(state);
            return {...state, page2: action.payload};
    }
    return state;
}
