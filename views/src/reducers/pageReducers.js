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
        case "PAGE_3":
            console.log(state);
            return {...state, page3: action.payload};
        case "PAGE_4":
            console.log(state);
            return {...state, page4: action.payload};
        case "PAGE_5":
            console.log(state);
            return {...state, page5: action.payload};
        case "PAGE_6":
            console.log(action.payload);
            return {...state, page6: action.payload};
    }
    return state;
}
