import { createStore } from 'redux';
import reducer from '../utils/reducers';

const Shop = createStore(reducer);
export default Shop;