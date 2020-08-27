import React, { Component } from 'react';

import Colors from '../../constants/Colors';

class StepSummary extends Component {

    state = {
        childHeight: 0,
		error: false
    }

    componentDidUpdate() {
        if (this.childWrap && this.childWrap.firstChild && this.state.childHeight !== this.childWrap.offsetHeight) {
            this.setState({childHeight: this.childWrap.offsetHeight});
        }
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        console.warn('Caught error in StepSummary: ', error);
        console.warn('Error info from StepSummary: ', info);
		this.setState({error: true});
    }

    render() {

        if (this.state.error) {
			return (
				<div
				    style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
				>
				    Step successfully selected
					<div
                        onClick={this.props.onHide}
                        style={{
                            color: Colors.tintColor,
                            cursor: 'pointer',
                            fontSize: 14,
                            marginBottom: 7
                        }}
                    >
                        Change
                    </div>
				</div>
			)
		}

        return (
            <div
                style={{
                    display: 'flex', justifyContent: 'space-between', marginBottom: -6,
                    transition: this.props.show ? 'opacity 2s ease-in, max-height 2s ease-in' : 'opacity 0.8s ease-out, max-height 0.8s ease',
                    opacity: this.props.show ? 1 : 0,
                    maxHeight: this.props.show ? this.state.childHeight : 0,
                    overflow: 'hidden'
                }}
            >

                <div style={{fontWeight: 600}}>

                    <div ref={el => {this.childWrap = el;}}>
                        {this.props.children}
                    </div>

                </div>

                <div
                    onClick={this.props.onHide}
                    style={{
                        color: Colors.tintColor,
                        cursor: 'pointer',
                        fontSize: 14,
                        marginBottom: 7
                    }}
                >
                    Change
                </div>
            </div>
        );
    }
};

export default StepSummary;