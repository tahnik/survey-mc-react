export function page_data(state=[], action) {
    switch (action.type) {
        case "PAGE_1":
            return [...state, action.payload];
    }
    return state;
}
