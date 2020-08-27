import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

class Map extends Component {

	state = {
		showIframe: false
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({showIframe: true});
		}, 1500);
	}

	render() {
		if (this.props.source) {
			return (
				<div
					style={{maxWidth: 670, margin: '30px auto 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
				>
					{
						this.state.showIframe
							? <iframe width='100%' height={450} frameBorder={0} style={{border: 0}}
							src={`https://www.google.com/maps/embed/v1/${this.props.source}&key=${process.env.GATSBY_AWS_GOOGLE_MAP}`} allowFullScreen title={this.props.title}></iframe>
							: <CircularProgress color="secondary" />
					}
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Map;