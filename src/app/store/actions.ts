import { createAction, props } from '@ngrx/store';
import { ShoppingItem } from './model';

export const ShoppingListActions = {
    LOAD_SHOPPING_LIST: '[Shopping List] Load Items',
    LOAD_SHOPPING_LIST_SUCCESS: '[Shopping List] Load Items Success',
    LOAD_SHOPPING_LIST_FAILURE: '[Shopping List] Load Items Failure'
};

export const loadShoppingList = createAction(ShoppingListActions.LOAD_SHOPPING_LIST);
export const loadShoppingListSuccess = createAction(ShoppingListActions.LOAD_SHOPPING_LIST_SUCCESS, props<{ payload: ShoppingItem[] }>());
export const loadShoppingListFailure = createAction(ShoppingListActions.LOAD_SHOPPING_LIST_FAILURE, props<{ payload: string}>());
