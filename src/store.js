import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

export default function configureStore(state) {
	const store = createStore(reducer, state, devToolsEnhancer());
	return store;
}
