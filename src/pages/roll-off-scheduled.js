import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { connect } from 'react-redux';
import { clearOrders } from '../state/app';

import Check from '@material-ui/icons/CheckCircle';

import Feedback from '../components/Feedback';
import Layout from '../structure/Layout';
import RollOffSummary from '../components/ordering/RollOffSummary';
import SocialShareButtons from '../components/buttons/SocialShareButtons';

import Colors from '../constants/Colors';
import PrimaryButton from '../components/buttons/PrimaryButton';

import Paths from '../constants/Paths';
import { windowGlobal } from '../constants/Window';

class RollOffScheduled extends Component {

    componentDidMount() {
        windowGlobal.localStorage.clear();
    }

    componentWillUnmount() {
        windowGlobal.localStorage.clear();
        this.props.onClearOrders();
    }

    render() {
        return (
            <Layout
                mainStyles={{padding: '0 20px 200px'}}
                hideMobileBtns
                restrictWidth
                title='Dumpster Rental Scheduled'
            >

                <div
                    style={{margin: '97px auto 27px', textAlign: 'center'}}
                >
                    <Check
                        style={{fontSize: 80, color: Colors.success}}
                    />
                </div>

                <h2
                    style={{margin: '0 auto 37px', maxWidth: 335, textAlign: 'center'}}
                >
                    Your deliver is scheduled!
                </h2>

                <h3
                    style={{textAlign: 'center', maxWidth: 525, fontWeight: 400, margin: '0 auto 17px'}}
                >
                    Let everyone know how easy it was to order with Alliance Disposal
                </h3>

                <div
                    style={{textAlign: 'center'}}
                >
                    {/* Facebook Share Button */}
                    <SocialShareButtons />
                    
                </div>

                <div
                    style={{backgroundColor: '#FFFFFF', padding: 20, margin: '37px -20px'}}
                >
                    <h2
                        style={{margin: '0 0 17px'}}
                    >
                        Order summary
                    </h2>
                    <p
                        style={{color: 'rgba(0, 0, 0, 0.68)'}}
                    >
                        Remember you cannot load above the top rim of the dumpster.
                    </p>

                    {this.props.orders.map(order => (
                        <RollOffSummary
                            key={order.id}
                            order={order}
                            email={this.props.location.state.email}
                            grandTotal={this.props.location.state.grandTotal}
                        />
                    ))}

                </div>

                {
                    this.props.location.state
                        ? (
                            <Feedback
                                title='How has your experience been so far?'
                                data={{
                                    name: this.props.location.state.name,
                                    email: this.props.location.state.email,
                                    page: Paths.rollOffScheduled
                                }}
                                style={{margin: '0 auto'}}
                            />
                        )
                        : null
                }

                <div
                    style={{maxWidth: 335, margin: '0 auto', marginTop: 50}}
                >
                    <PrimaryButton
                        onClick={() => navigate(Paths.home)}
                        fullWidth
                        style={{marginTop: 67}}
                    >
                        explore more solutions
                    </PrimaryButton>
                </div>

            </Layout>
        );
    }
};

const mapStateToProps = state => {
    return {
        orders: state.app.orders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClearOrders: () => dispatch(clearOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RollOffScheduled);