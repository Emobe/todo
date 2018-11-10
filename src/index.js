import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
	AppBar,
	CssBaseline,
	Typography,
	Toolbar,
	Grid
} from '@material-ui/core';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import Theme from './theme';
import { TodoList } from 'containers';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={Theme}>
			<CssBaseline />
			<AppBar color="primary">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Todo Example
					</Typography>
				</Toolbar>
			</AppBar>
			<Grid container>
				<Grid item lg={4} />
				<Grid item lg={4}>
					<TodoList />
				</Grid>
				<Grid item lg={4} />
			</Grid>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
