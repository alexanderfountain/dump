import React from 'react';
import PropTypes from 'prop-types';

const low = '#4FB768';
const med = '#0091FF';
const high = '#FF7E18';

const DisposalRateScore = (props) => {

    const calcScore = () => {
        // For NJ Only Right Now
        // Not even all counties && uses #'s from under county name on cheat sheet
        const highest = 127;
        const cheapest = 77;
        const scaleMax = 100;
        const scaleMin = 0;

        const score = Math.round(((props.price - cheapest) / (highest - cheapest)) * ((scaleMax - scaleMin) + scaleMin));
        return score;
    }

    const getScoreColor = (score) => {
        if (score < 40) return low;
        if (score > 70) return high;
        return med;
    }

    return (
        <div>
            <p>
                Alliance Disposal's Disposal Rate Score shows you how expensive it is to get rid of waste in your county. The scale is from 0 to 100. With 0 being the cheapest county and 100 being the most expensive county. Disposal rates are mostly affected by the fees and standards that the county sets. 
            </p>

            <div
                style={{fontSize: 42, textAlign: 'center', fontWeight: 600, color: getScoreColor(calcScore())}}
            >
                {calcScore()}
            </div>

            <div
                style={{margin: '27px auto 37px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <div
                    style={styles.barWrapper}
                >
                    <div style={{...styles.barItem, backgroundColor: low, borderTopLeftRadius: 4, borderBottomLeftRadius: 4}} />
                    <div style={{...styles.barItem, backgroundColor: med,}} />
                    <div style={{...styles.barItem, backgroundColor: high, borderTopRightRadius: 4, borderBottomRightRadius: 4}} />
                </div>
                <div
                    style={styles.barWrapper}
                >
                    <div style={styles.barText}>
                        0 - 39
                    </div>
                    <div style={styles.barText}>
                        40 - 69
                    </div>
                    <div style={styles.barText}>
                        70 - 100
                    </div>
                </div>
            </div>

            <p>
                {props.paragraph}
            </p>
        </div>
    );
};

const styles = {
    barWrapper: {
        width: 335,
        height: 32,
        display: 'flex'
    },
    barItem: {
        width: '33.33%',
        height: '100%'
    },
    barText: {
        width: '33.33%',
        textAlign: 'center',
        marginTop: 7
    }
}

DisposalRateScore.propTypes = {
    price: PropTypes.number.isRequired,
    paragraph: PropTypes.string
}

export default DisposalRateScore;