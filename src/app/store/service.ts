import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/internal-compatibility';
import { ShoppingListDecoder } from './decoder';
import { ShoppingItem } from './model';

@Injectable()
export class ShoppingListService {
    constructor(public http: HttpClient) {}

    getShoppingList() {
        return this.http.get<ShoppingItem[]>('assets/mocks/list.json').pipe(
            concatMap(p => fromPromise(ShoppingListDecoder
                .decodePromise(p)
                .catch(e => {
                    throw new Error(e);
                })
            ))
        );
    }
}
