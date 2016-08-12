export function page_data(state={}, action) {
    switch (action.type) {
        case "SIGN_IN":
            return {...state, credentials: action.payload};
        case "PAGE_1":
            return {...state, page1: action.payload};
        case "PAGE_2":
            return {...state, page2: action.payload};
        case "PAGE_3":
            return {...state, page3: action.payload};
        case "PAGE_4":
            return {...state, page4: action.payload};
        case "PAGE_5":
            return {...state, page5: action.payload};
        case "PAGE_6":
            return {...state, page6: action.payload};
        case "PAGE_7":
            return {...state, page7: action.payload};
        case "PAGE_8":
            return {...state, page8: action.payload};
        case "PAGE_9":
            return {...state, page9: action.payload};
        case "PAGE_10":
            return {...state, page10: action.payload};
        case "PAGE_11":
            return {...state, page11: action.payload};
        case "PAGE_12":
            return {...state, page12: action.payload};
        case "PAGE_13":
            return {...state, page13: action.payload};
        case "PAGE_14":
            return {...state, page14: action.payload};
        case "PAGE_15":
            return {...state, page15: action.payload};
        case "PAGE_16":
            return {...state, page16: action.payload};
        case "PAGE_17":
            return {...state, page17: action.payload};
        case "PAGE_18":
            return {...state, page18: action.payload};
        case "FINISH":
            state={};
            return state;
    }
    return state;
}
