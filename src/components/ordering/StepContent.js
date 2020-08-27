import React, { Component } from 'react';

class StepContent extends Component {

    state = {
        childHeight: 0
    }

    componentDidMount() {
        if (this.childWrap && this.childWrap.firstChild && this.state.childHeight !== this.childWrap.offsetHeight) {
            this.setState({childHeight: this.childWrap.offsetHeight});
        }
    }

    render() {
        return (
            <div
                style={{
                    maxHeight: this.props.show ? this.state.childHeight + (this.props.extraHeight ? this.props.extraHeight : 0) : 0,
                    opacity: this.props.show ? 1 : 0,
                    overflow: 'hidden',
                    transition: this.props.show ? 'max-height 1.5s ease-out, opacity 1.5s ease-out' : 'max-height 0.8s ease-out, opacity 0.8s ease-out'
                }}
            >

                <div ref={el => {this.childWrap = el;}}>
                    {this.props.children}
                </div>

            </div>
        );
    }
};

export default StepContent;