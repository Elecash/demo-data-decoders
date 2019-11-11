import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingListEffects } from './store/effects';
import { ShoppingListService } from './store/service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({
            shoppingList: shoppingListReducer
        }),
        EffectsModule.forRoot([
            ShoppingListEffects
        ])
    ],
    providers: [
        ShoppingListService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
