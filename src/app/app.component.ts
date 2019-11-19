import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ScannedActionsSubject, Store } from '@ngrx/store';
import { ShoppingListStore } from './store';
import { loadShoppingList, ShoppingListActions } from './store/actions';
import { filter } from 'rxjs/operators';
import { ShoppingListLoadResult } from './store/reducer';
import { ShoppingItem } from './store/model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
    shoppingList$: Observable<ShoppingListLoadResult>;

    subscriptions: Subscription[] = [];

    constructor(private store: Store<ShoppingListStore>, private actions$: ScannedActionsSubject) {
        this.shoppingList$ = this.store.select(state => state.shoppingList);
    }

    ngOnInit() {
        this.subscriptions.push(
            this.actions$.pipe(
                filter(action => action.type === ShoppingListActions.LOAD_SHOPPING_LIST_FAILURE)
            ).subscribe(
                action => console.log(action)
            )
        );

        this.store.dispatch(loadShoppingList());
    }

    sortedTags(item: ShoppingItem) {
        return item.tags.sort();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
