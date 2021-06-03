/*
This component will contain the overview of a movie that is clicked by the user.
Contents will be movie description, release-date, etc.

This was probably the trickiest part of the project. I attempted to create my own modal to pop up
similar to how the current implementation works, but I couldn't get it to work exactly how I wanted it.
After researching some alternatives I found material-ui to help with the heavy lifting. Documentation here https://material-ui.com/components/dialogs/
*/

import {withStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

// Here we're creating some CSS to be injected into the DOM.
const styles = (theme) => ({
	// Root is the styling we're going to pass to the classNames component.
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
});

// Using the higher-order component 'withStyles' we're going to inject the custom style created above into the DOM.
const OverviewTitle = withStyles(styles)((props) => {
	// We destructure to grab the sub-components and classes.
	const {children, classes} = props;

	// Setting our className to 'classes.root' allows us to override any styles that were applied to the component.
	return(
		<MuiDialogTitle disableTypography className={classes.root}>
			<Typography variant='h6'>{children}</Typography>
		</MuiDialogTitle>
	);
});

// Using 'withStyles' again, we're going to change the theme object with our own CSS styling then immediately invoke the function.
const OverviewContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

/* 
This is our Overview component. It will contain any overview information we set within the modal.
Pass in overviewOpen so that the Dialog can check if it is open or not. If true, Dialog is open.
Pass in setOverviewOpen so that we can set overviewOpen to false once we have closed the modal.
Pass in movie to access movie data for the contents of the modal.
*/
const Overview = ({overviewOpen, setOverviewOpen, movie}) => {
	
	// To display the correct release date, we need to format the date to a more user friendly version.
	const formatReleaseDate = (movie) => {
		
		// I tried creating a new Date from the movie.release_date and then using the getDate/getMonth/getFullYear methods
		// but the output was coming out with a different recorded date due to GMT format.
		let {release_date} = movie;
		release_date = release_date.split('-');
		let result = release_date[1] + '-' + release_date[2] + '-' + release_date[0];
		
		return `Release Date: ${result}`
	}

	// Anytime we close the modal, we want to make sure overviewOpen is false so that we'll be able to open another.
	const handleClose = () => {
		setOverviewOpen(false);
	}

	return(
		<div>
			<Dialog onClose={handleClose} open={overviewOpen}>
				<OverviewTitle id='customized-overview-title' onClose={handleClose}>
					<Typography gutterBottom>
						{movie.title}
					</Typography>
					<Typography>
						{formatReleaseDate(movie)}
					</Typography>
				</OverviewTitle>
				<OverviewContent dividers>
					<Typography gutterBottom>
						{movie.overview}
					</Typography>
					<Typography>
						Average User Rating: {movie.vote_average}
					</Typography>					
				</OverviewContent>
			</Dialog>
		</div>
	)
}

export default Overview