import React, { useState } from 'react';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import CTABlue from '../components/CTABlue';
import Layout from '../structure/Layout';
import PageHeader from '../components/PageHeader';
import PicContent from '../components/PicContent';
import PrimaryButton from '../components/buttons/PrimaryButton';
import SectionWrapper from '../components/SectionWrapper';
import TelDisplay from '../components/TelDisplay';
import TextButton from '../components/buttons/TextButton';

import Colors from '../constants/Colors';
import { dumpsterSizes } from '../constants/Data';
import Paths from '../constants/Paths';

import { Pickup, GarbageBag, Dresser } from '../assets/icons/misc';

import ContactOptions from '../components/buttons/ContactOptions';

const useStyles = makeStyles({
    selected: {
        backgroundColor: '#FFFFFF!important',
        borderBottom: 0,
        color: Colors.allianceBlue + '!important',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    label: {
        textTransform: 'capitalize',
    },
});

const holdsAboutIconSize = 28;
const holdsAboutIconColor = '#979797';

const sizeOptions = ['10', '20', '30', '40'];

const DumpsterSizes = (props) => {
    
    const data = useStaticQuery(graphql`
        query {
            RollOff30Red: file(relativePath: { eq: "dumpster-sizes.png" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TreesGrowingPots: file(relativePath: { eq: "trees-growing-pots.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            DressersInDumpster: file(relativePath: { eq: "dumpster-sizes-chart-by-yard.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TenYardDumpsterSize: file(relativePath: { eq: "dumpster-sizes-10-yard.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            TwentyYardDumpsterSize: file(relativePath: { eq: "dumpster-sizes-20-yard.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            ThirtyYardDumpsterSize: file(relativePath: { eq: "dumpster-sizes-30-yard.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            FortyYardDumpsterSize: file(relativePath: { eq: "dumpster-sizes-40-yard.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const [size, setSize] = useState('10');
    const [slide, setSlide] = useState(false);
    const classes = useStyles();

    const sizeSelectedHandler = (event, value) => {
        setSlide(true);
        setSize(value);
        setTimeout(() => {
            setSlide(false);
        }, 200);
    }

    return (
        <Layout
            title='Dumpster Sizes'
            description='Find The Right Size Dumpster For Your Project. Same Day Dumpster Rentals Available. Hassle Free Online Checkout. 10 Yard To 40 Yard Roll Off Containers.'
            bgColor='#FFFFFF'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
            restrictWidth
        >
            <div
                style={{backgroundColor: Colors.mainBg}}        
            >
                <PageHeader
                    title='Dumpster Sizes'
                    subTitle='We have the right sized dumpster for your next project'
                    image={{
                        path: data.RollOff30Red.childImageSharp.fluid,
                        alt: 'Dumpster sizes – find the right sized dumpster for your project'
                    }}
                    imageWrapper={{width: '80%', margin: '0 auto'}}
                    btnText='get pricing'
                    searchField
                />
            </div>

            <SectionWrapper
                title='Available sizes'
            >
                <p>
                    The right size dumpster for you depends on how much material you are disposing of. A dumpster's capacity is based on how much volume it can hold, measured in cubic yards. There are five dumpster rental sizes available, each with different capacities. Sizes range from 10 to 40 cubic yards, so there's a size for every project type.
                </p>

                <p>
                    The dumpster's name is equivalent to the volume it can hold. For example a <i>10 Yard Dumpster</i> can hold 10 cubic yards of debris.
                </p>

                <p>
                    Browse through the dumpster sizes chart below to find the best one for your project.
                </p>

                <div
                    style={{marginTop: 47, border: 'solid 1px #979797', borderRadius: 4, textAlign: 'center'}}
                >

                    <ToggleButtonGroup
                        value={size}
                        exclusive
                        onChange={sizeSelectedHandler}
                        aria-label="Select a dumpster size for more details"
                    >
                        {
                            sizeOptions.map((item, index) => (
                                <ToggleButton
                                    key={item}
                                    value={item} 
                                    aria-label={`${item} Yard Dumpster`}
                                    disabled={item === size}
                                    style={{...styles.toggleButton, borderRight: item === '40' ? 0 : 'solid 1px #FFFFFF'}}
                                    classes={{
                                        selected: classes.selected
                                    }}
                                >
                                    {item} Yard
                                </ToggleButton>
                            ))
                        }
                    </ToggleButtonGroup>

                    <div
                        style={{position: 'relative', overflow: 'hidden', display: 'flex', height: 700}}
                    >
                        
                        {dumpsterSizes.map((item) => (
                            <div
                                key={item.size}
                                style={{
                                    position: 'absolute',
                                    left: (item.size === size) ? 0 : -3000,
                                    opacity: slide ? 0 : 1,
                                    transition: slide ? 'opacity 100ms 100ms, left 100ms 100ms' : 'left 100ms 100ms, opacity 100ms 100ms',
                                    minWidth: '100%',
                                    minHeight: 700,
                                    maxWidth: '100%',
                                    maxHeight: 700
                                }}
                            >
                                <h3
                                    style={{marginTop: 27, marginBottom: 10}}
                                >
                                    {item.size} Yard Dumpster
                                </h3>

                                <TextButton
                                    to={item.page}
                                >
                                    Learn more about {item.size} yard dumpsters
                                </TextButton>

                                <div
                                    style={{maxWidth: 375, margin: '0 auto'}}
                                >
                                    <Img
                                        fluid={
                                            item.size === '10'
                                                ? data.TenYardDumpsterSize.childImageSharp.fluid
                                                : item.size === '20'
                                                ? data.TwentyYardDumpsterSize.childImageSharp.fluid
                                                : item.size === '30'
                                                ? data.ThirtyYardDumpsterSize.childImageSharp.fluid
                                                : item.size === '40'
                                                ? data.FortyYardDumpsterSize.childImageSharp.fluid
                                                : data.TenYardDumpsterSize.childImageSharp.fluid
                                        }
                                        alt={`Dumpster sizes - ${item.size} yard dumpster`}
                                        style={{margin: '0px 10px'}}
                                    />
                                </div>
                            
                                <div
                                    style={{display: 'flex', justifyContent: 'space-between', textAlign: 'center', padding: 5}}
                                >
                                    <div
                                        style={styles.holdsAboutDiv}
                                    >
                                        <div>
                                            <Pickup
                                                size={holdsAboutIconSize}
                                                borderColor={holdsAboutIconColor}
                                                />
                                        </div>
                                        <div>
                                            x {item.pickup}
                                        </div>
                                        <div>
                                            Pickup truck beds
                                        </div>
                                    </div>

                                    <div
                                        style={styles.holdsAboutDiv}
                                    >
                                        <div>
                                            <GarbageBag
                                                size={holdsAboutIconSize}
                                                borderColor={holdsAboutIconColor}
                                            />
                                        </div>
                                        <div>
                                            x {item.garbageBags}
                                        </div>
                                        <div>
                                            Garbage bags
                                        </div>
                                    </div>

                                    <div
                                        style={styles.holdsAboutDiv}
                                    >
                                        <div>
                                            <Dresser
                                                size={holdsAboutIconSize}
                                                borderColor={holdsAboutIconColor}
                                            />
                                        </div>
                                        <div>
                                            x {item.size}
                                        </div>
                                        <div>
                                            Dressers
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{...styles.detailsWrapper, backgroundColor: '#F9F9F9', border: 'solid 1px #979797', borderRadius: 4, fontWeight: 600, margin: '20px -1px 0'}}
                                >
                                    <div
                                        style={{width: '50%'}}
                                    >
                                        Dimensions
                                    </div>

                                    <div
                                        style={{width: '50%'}}
                                    >
                                        Volume
                                    </div>
                                </div>

                                <div
                                    style={{...styles.detailsWrapper, marginBottom: 20}}
                                >
                                    <div
                                        style={{width: '50%'}}
                                    >
                                        {item.length}ft long x {item.width}ft wide x {item.height}ft high
                                    </div>
                                    
                                    <div
                                        style={{width: '50%'}}
                                    >
                                        {item.size} cubic yards
                                    </div>
                                </div>

                                <PrimaryButton
                                    onClick={() => navigate(Paths.orderRollOff)}
                                    className='order-roll-off'
                                    fullWidth
                                    style={{position: 'absolute', bottom: 0, left: 0}}
                                >
                                    order now
                                </PrimaryButton>

                            </div>
                        ))}
                    </div>

                </div>
            </SectionWrapper>

            <SectionWrapper
                title='Finding the right size dumpster for you'
            >
                <p>
                    When selecting a dumpster size you'll want to consider: the type of material you have, how long your project will go on for and the amount of debris you'll put into the dumpster. If you have a lot of heavy debris or an ongoing project you'll want to steer towards the larger sizes to make sure you have enough room.
                </p>

                <p>
                    use our <Link to={Paths.rollOffSizingGuide}>roll off sizing guide</Link> to see dumpster sizes chart broken down by projects. It will help give you a better idea of what size you'll need. Or give us a call at <TelDisplay />. We're always happy to help you find the best solution for your project.
                </p>
            </SectionWrapper>

            <div
                className='greyBorders'
            >
                <PicContent
                    title={`Rent a dumpster,\nmake a difference`}
                    wrapperStyles={{height: 350, fontWeight: 500}}
                    image={{
                        path: data.TreesGrowingPots.childImageSharp.fluid,
                        alt: 'No matter the dumpster size Alliance Disposal plants a tree every time you rent a dumpster'
                    }}
                    link={{label: 'Plant A Tree Program', to: `${Paths.about}#plant-a-tree`}}
                    light
                >
                    <p>
                        For every dumpster you rent from Alliance Disposal we plant a tree in a forest in need.
                    </p>
                </PicContent>
            </div>

            <SectionWrapper
                title='How do you calculate dumpster sizes?'
                styles={{paddingBottom: 0}}
            >
                <p>
                    The capacity of a dumpster is calculated from the outside in. The exterior dimensions of the dumpster, it's footprint, are measured in feet which can be used to calculate the volume it can hold in cubic yards.
                </p>

                <p>
                    A cubic yard is simply a measure of volume. 1 cubic yard of space will take up a space that is 3ft long by 3ft wide by 3ft high.
                </p>

                <p>
                    The formula to calculate cubic yards is:
                </p>

                <div
                    className='p'
                    style={{textAlign: 'center'}}
                >
                    <div>
                        Length x Width x Height
                    </div>
                    <div
                        style={{width: 230, height: 1, backgroundColor: '#232323', margin: '7px auto'}}
                    />
                    <div>
                        27
                    </div>
                </div>

                <p>
                    So if you multiple the dumpster's length by width by height and divide that number by twenty-seven you'll get it's cubic yardage. Well it'll actually come out to be a little more than its yardage to account for the width of the dumpster's walls.
                </p>

                <p>
                    The graphic below will help you better visualize how big one cubic yard is compared to a 10 yard dumpster.
                </p>

                <Img
                    fluid={data.DressersInDumpster.childImageSharp.fluid}
                    alt='A graphic showing the relation between a one cubic yard dresser to a 10 cubit yard dumpster.'
                    style={{margin: '39px -20px 0'}}
                />
            </SectionWrapper>

            <CTABlue
                title='I know what size I need'
            />

            <SectionWrapper
                title='Is this all new to you?'
                styles={{backgroundColor: Colors.mainBg, paddingTop: 40, paddingBottom: 79}}
            >
                <p>
                   Most people only rent a dumpster once or twice in a lifetime. We're here to help you with this new experience so that it goes smoothly. If you need help at any step of the way you can contact us by:
                </p>

                <div>
                    <ContactOptions />
                </div>

                <p>
                    No matter which method you choose our friendly Alliance Disposal team members will help you through this journey.
                </p>

                <p>
                    If you want to continue reading up on dumpster rentals you can visit our knowledge base and browse through our <Link to={Paths.guides}>roll off dumpster rental guides</Link>.
                </p>
            </SectionWrapper>

        </Layout>
    );
};

const styles = {
    toggleButton: {
        height: '100%',
        minHeight: 38,
        marginLeft: 0,
        backgroundColor: Colors.allianceBlue,
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderTop: 0,
        borderLeft: 0
    },
    holdsAboutDiv: {
        width: '33.33%',
        margin: '0 5px'
    },
    detailsWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        textAlign: 'center'
    }
}

export default DumpsterSizes;