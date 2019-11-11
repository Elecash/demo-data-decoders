import { JsonDecoder } from 'ts.data.json';
import { ShoppingItem } from './model';

export const ShoppingItemDecoder = JsonDecoder.object<ShoppingItem>({
    title: JsonDecoder.string,
    count: JsonDecoder.number,
    tags: JsonDecoder.array<string>(JsonDecoder.string, 'ShoppingItemTags[]'),
    available: JsonDecoder.boolean
}, 'ShoppingItemDecoder');

export const ShoppingListDecoder = JsonDecoder.array<ShoppingItem>(
    ShoppingItemDecoder, 'ShoppingItemDecoder[]'
);
