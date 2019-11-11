import { createReducer, on } from '@ngrx/store';
import { loadShoppingList, loadShoppingListFailure, loadShoppingListSuccess } from './actions';
import { ShoppingItem } from './model';

export interface ShoppingListLoadResult {
    items: ShoppingItem[];
    error: string;
    isLoading: boolean;
}

export const initialState: ShoppingListLoadResult = {
    items: [],
    error: null,
    isLoading: false
};

const reducer = createReducer(initialState,
    on(loadShoppingList, () => {
        return { ...initialState, isLoading: true };
    }),
    on(loadShoppingListSuccess, (state, action) => {
        return { items: action.payload, error: null, isLoading: false };
    }),
    on(loadShoppingListFailure, (state, action) => {
        return { items: null, error: action.payload, isLoading: false };
    })
);

export const shoppingListReducer = (state, action) => {
    return reducer(state, action);
};
