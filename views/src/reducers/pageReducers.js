export function page_data(state={}, action) {
    switch (action.type) {
        case "SIGN_IN":
            return {...state, credentials: action.payload};
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
        case "PAGE_7":
            console.log(action.payload);
            return {...state, page7: action.payload};
        case "PAGE_8":
            console.log(action.payload);
            return {...state, page8: action.payload};
        case "PAGE_9":
            console.log(action.payload);
            return {...state, page9: action.payload};
        case "PAGE_10":
            console.log(action.payload);
            return {...state, page10: action.payload};
        case "PAGE_11":
            console.log(action.payload);
            return {...state, page11: action.payload};
        case "PAGE_12":
            console.log(action.payload);
            return {...state, page12: action.payload};
        case "PAGE_13":
            console.log(action.payload);
            return {...state, page13: action.payload};
        case "PAGE_14":
            console.log(action.payload);
            return {...state, page14: action.payload};
        case "PAGE_15":
            console.log(action.payload);
            return {...state, page15: action.payload};
        case "PAGE_16":
            console.log(action.payload);
            return {...state, page16: action.payload};
        case "PAGE_17":
            console.log(action.payload);
            return {...state, page17: action.payload};
        case "PAGE_18":
            console.log(action.payload);
            return {...state, page18: action.payload};
    }
    return state;
}
