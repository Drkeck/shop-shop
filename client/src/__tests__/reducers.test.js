import {
    UPDATE_PRODUCTS,
    UPDATE_CURRENT_CATEGORY,
    UPDATE_CATEGORIES
} from '../utils/actions';
import {reducer} from '../utils/reducers';
const initalState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};

test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initalState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initalState.products.length).toBe(0)
})

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initalState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initalState.categories.length).toBe(1)
})

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initalState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(initalState.currentCategory).toBe('1');
})