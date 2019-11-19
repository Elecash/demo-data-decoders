import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ShoppingListActions } from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingListService } from './service';
import { of } from 'rxjs';

@Injectable()
export class ShoppingListEffects {
    loadShoppingList$ = createEffect(() => this.actions$.pipe(
        ofType(ShoppingListActions.LOAD_SHOPPING_LIST),
        mergeMap(() => this.shoppingListService.getShoppingList()
            .pipe(
                map(items => ({ type: ShoppingListActions.LOAD_SHOPPING_LIST_SUCCESS, payload: items })),
                catchError(error => of({ type: ShoppingListActions.LOAD_SHOPPING_LIST_FAILURE, payload: error.message }))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private shoppingListService: ShoppingListService
    ) {
    }
}
