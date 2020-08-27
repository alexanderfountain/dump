import React from 'react';
import { Link } from 'gatsby';

import Paths from '../../constants/Paths';
import TelDisplay from '../TelDisplay';

const MaterialSelectionGuide = () => {

    const content = [
       {
            header: 'Construction & demolition',
            body: 'Any non hazardous material that you would find at a construction site or home renovation can go in. Ranging from sheet rock and lumber to shingles and concrete. Yard waste and other household trash can also be placed in the dumpster.\n\nIf you have a large amount of concrete or other heavy debris most of the time you will find it cheaper to get a second dumpster specifically for it.'
        },
        {
            header: 'Household items',
            body: 'Whether you’re moving or cleaning out your home most materials you have may go into the dumpster. Furniture and appliances can all go in.'
        },
        {
            header: 'Roofing',
            body: 'From asphalt or wood shingles to clay or slate it can all go in. Other material you may need to dispose of during a roofing job may go in as well.'
        },
        {
            header: 'Brush, branch & logs',
            body: 'Your typical yard waste can go into these dumpsters. Brushes, branches and leaves are all acceptable. If you have logs over 4 inches in diameter or tree stumps they can go in as well, however there is an additional charge for them.'
        },
        {
            header: 'Clean concrete',
            body: 'If you have a lot of concrete that is free of any rebar, trash, wire mesh or other contaminants this is the most cost effect dumpster for you.'
        },
        {
            header: 'Concrete with rebar',
            body: 'Concrete that has rebar, wire mesh or other metals found with typical concrete demolition.'
        },
        {
            header: 'Concrete, brick mix',
            body: 'Concrete that is mixed with asphalt, brick, stone or other heavy materials. With the exception of large amounts of dirt.'
        },
        {
            header: 'Asphalt',
            body: 'Have asphalt from ripping up a driveway, roadway, basketball court or other surface?'
        },
        {
            header: 'Other',
            body: <span>Have a material that isn't in the guide? Not to worry we can still help you. <Link to={Paths.quoteRollOff}>Submit a free roll-off dumpster quote request online</Link> or give us a call at <TelDisplay /> and we'll be happy to help!</span>
        }
    ]

    return (
        <div>
            <h2
                style={{marginTop: 0, marginBottom: 17, textAlign: 'center'}}
            >
                Material Selection Guide
            </h2>

            <p
                style={{textAlign: 'center', maxWidth: 525, margin: '0 auto'}}
            >
                Don't know if a certain material is allowed in a dumpster? Check out our <Link to={Paths.guideWhatCanGoIntoDumpster}>Guide for What Can and Can't Go Into a Dumpster</Link>
            </p>

            {
                content.map(item => (
                    <div
                        key={item.header}
                        style={{marginTop: 37}}
                    >
                        <h3
                            style={{marginTop: 0, marginBottom: 10}}
                        >
                            {item.header}
                        </h3>

                        <p
                            style={{margin: 0}}
                        >
                            {item.body}
                        </p>
                    </div>
                ))
            }

        </div>
    );
};

export default MaterialSelectionGuide;