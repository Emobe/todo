import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, lightGreen, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		background: { default: grey[900] },
		primary: blueGrey,
		secondary: {
			main: lightGreen[400]
		}
	}
});

export default theme;
