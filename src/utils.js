export const makeActionCreator = (type, ...argNames) => (...args) => {
	const action = { type };
	argNames.forEach((arg, index) => {
		action[argNames[index]] = args[index];
	});
	return action;
};

export const createReducer = (initialState, handlers) => (
	state = initialState,
	action
) =>
	handlers.hasOwnProperty(action.type)
		? handlers[action.type](state, action)
		: state;
