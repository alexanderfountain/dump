import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import { connect } from 'react-redux';
import { addOrder } from '../state/app';

import FormatQuote from '@material-ui/icons/FormatQuote';

import ContactOptions from '../components/buttons/ContactOptions';
import DialogWrapper from '../components/DialogWrapper';
import Layout from '../structure/Layout';
import MaterialSelectionGuide from '../components/content/RollOffMaterialSelectionGuide';
import PrimaryButton from '../components/buttons/PrimaryButton';
import RollOffMaterial from '../components/ordering/RollOffMaterial';
import RollOffRentalPeriod from '../components/ordering/RollOffRentalPeriod';
import RollOffServiceInfo from '../components/ordering/RollOffServiceInfo';
import RollOffSize from '../components/ordering/RollOffSize';
import RollOffWeightLimit from '../components/ordering/RollOffWeightLimit';
import RollOffYardAddons from '../components/ordering/RollOffYardAddons';
import SizingGuide from '../components/content/RollOffSizingGuide';

import Colors from '../constants/Colors';
import Paths from '../constants/Paths';
import { findPrice } from '../constants/Pricing';

import { TenYdDimensions, TwentyYdDimensions, ThirtyYdDimensions, FortyYdDimensions } from '../assets/icons/services';

import OrderModel from '../models/OrderModel';

const overageMultiplier = 1.2;

const rentalPeriods = [
    {days: 14, price: 0},
    {days: 17, price: 0},
    {days: 21, price: 0},
    {days: 24, price: 0}
];

const initialDumpsters = {
    '10': {
        size: '10',
        pickups: '4',
        image: TenYdDimensions,
        show: true,
        starting: null,
        pricingType: null,
        price: null
    },
    '20': {
        size: '20',
        pickups: '8',
        image: TwentyYdDimensions,
        show: true,
        starting: null,
        pricingType: null,
        price: null
    },
    '30': {
        size: '30',
        pickups: '12',
        image: ThirtyYdDimensions,
        show: true,
        starting: null,
        pricingType: null,
        price: null
    },
    '40': {
        size: '40',
        pickups: '16',
        image: FortyYdDimensions,
        show: true,
        starting: null,
        pricingType: null,
        price: null
    }
}

const toolTipDelay = 200;

const OrderRollOff = (props) => {

    const [county, setCounty] = useState('');
    const [deliveryDate, setDeliveryDate] = useState(null);
    const [material, setMaterial] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedTons, setSelectedTons] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [selectedAddon, setSelectedAddon] = useState(null);
    const [addressComponents, setAddressComponents] = useState('');

    const [allSkus, setAllSkus] = useState([]);
    const [address, setAddress] = useState('');
    const [startAddress, setStartAddress] = useState('');
    const [dumpsters, setDumpsters] = useState({...initialDumpsters});
    
    const [showMaterial, setShowMaterial] = useState(true);
    const [showSize, setShowSize] = useState(true);
    const [showServiceInfo, setShowServiceInfo] = useState(true);

    const [DialogContent, setDialogContent] = useState(null);

    const [dumpRateSku, setDumpRateSku] = useState(null);

    useEffect(() => {
        if (props.location && props.location.state && props.location.state.skuData) {
            const value = props.location.state.skuData;
            setCounty(value.county);
            setAddressComponents(value.addressComponents);

            setAddress(
                value.addressComponents.address
                    ? value.addressComponents.address + ' ' + value.addressComponents.town + ', ' + value.addressComponents.state
                    : value.addressComponents.town
            );

            setStartAddress(
                value.addressComponents.address
                    ? value.addressComponents.address + ' ' + value.addressComponents.town + ', ' + value.addressComponents.state
                    : value.addressComponents.town
            );

            setAllSkus(value.skus)
        }
    }, [props.location]);

    const getDialogContent = () => {
        if (DialogContent) return DialogContent;
        return 'Error';
    }

    const checkIfPricingExists = (field, value) => {
        // Check after county is picked
        // Check after material is picked
        // Set state variables for them from here or navigate away if does not exist

        let exists = false;
        
        switch(field) {
            case 'county':
                exists = value.pricingExists;

                if (exists) {

                    if (county && value.county !== county) {
                        setMaterial(null);
                        setSelectedSize(null);
                        setSelectedTons(null);
                        setSelectedAddon(null);
                        setShowMaterial(true);
                        setShowSize(true);
                    }               

                    setCounty(value.county);
                    setAddressComponents(value.addressComponents);
                    setAddress(value.addressComponents.address);
                }

                break;
            case 'material':
                exists = allSkus.find(item => {
                    return (
                        item.attributes.type === 'dumpRate'
                        && item.attributes.county === county
                        && item.attributes.material === value.key
                    )
                });
                if (exists) {
                    let updatedDumpsters = {
                        ...dumpsters
                    };
                    
                    let startingObj = exists.metadata.pricingType === 'tonPricing'
                        ? JSON.parse(exists.metadata.tonStarting)
                        : null;

                    let sizesAvailable = exists.metadata.pricingType === 'yardPricing' 
                        ? exists.metadata.sizesAvailable.split(',')
                        : null;

                    let flatSizes = exists.metadata.pricingType === 'flatPricing'
                        ? JSON.parse(exists.metadata.prices)
                        : null; 

                    Object.keys(dumpsters).forEach(key => {
                        if (
                            exists.metadata.pricingType === 'tonPricing'
                            && startingObj[key]
                        ) {
                            updatedDumpsters[key] = {
                                ...updatedDumpsters[key],
                                show: true,
                                starting: startingObj[key],
                                pricingType: exists.metadata.pricingType
                            }
                        } else if (
                            exists.metadata.pricingType === 'yardPricing'
                            && sizesAvailable.indexOf(key) >= 0
                        ) { 
                            updatedDumpsters[key] = {
                                ...updatedDumpsters[key],
                                show: true,
                                pricingType: exists.metadata.pricingType
                            }
                        } else if (
                            exists.metadata.pricingType === 'flatPricing'
                            && flatSizes[key]
                        ) { 
                            updatedDumpsters[key] = {
                                ...updatedDumpsters[key],
                                show: true,
                                price: flatSizes[key],
                                pricingType: exists.metadata.pricingType
                            }
                        } else {
                            updatedDumpsters[key] = {
                                ...updatedDumpsters[key],
                                show: false,
                                starting: null,
                                pricingType: null,
                                price: null
                            }
                        }
                    });

                    setDumpsters({...updatedDumpsters});

                    setDumpRateSku(exists);
                    setMaterial(value.material);
                    setShowMaterial(false);
                }
                break;
            default: break;
        }

        if (!exists) navigate(Paths.quoteRollOff, {state: {noPricing: true}})

    }

    const getPricing = (name, multiplier) => {        
        if (allSkus && allSkus.length > 0) {
            return findPrice(allSkus, name, material, multiplier);
        }

        return '';
    }

    const getTonOptions = () => {
        if (
            dumpRateSku
            && selectedSize
        ) {
            const tonString = dumpRateSku.metadata.tonLimits;
            const tonObj = JSON.parse(tonString);
            return tonObj[selectedSize];
        }

        return [0, 0, 0, 0];
    }

    const addToCartHandler = () => {
        const tonsIncluded = +dumpsters[selectedSize].starting;
        const additionalTons = selectedTons - tonsIncluded;

        const orderObj = {
            allSkus: allSkus,
            county: county,
            addressComponents: addressComponents,
            deliveryAddress: address,
            size: selectedSize,
            material: material,
            pricingType: dumpRateSku.metadata.pricingType,
            deliveryDate: deliveryDate,
            tonsIncluded: tonsIncluded,
            additionalTons: additionalTons,
            rentalPeriod: selectedPeriod.days,
            addon: selectedAddon ? selectedAddon : null,
            flatPrice: +dumpsters[selectedSize].price,
            overageMultiplier: selectedTons < tonsIncluded 
                ? overageMultiplier : null
        }

        const newOrderModel = new OrderModel(orderObj);

        if (
            newOrderModel.total
        ) {
            props.onAddOrder({...newOrderModel});
            navigate(Paths.cart);
        } else {
            console.error('Error pricing was undefined');
            alert(
                `An error occurred. Please refresh the page and try again. Or call ${Paths.telDisplay}`
            )
        }
    }

    return (
        <Layout
            bgColor='#FFFFFF'
            mainStyles={{paddingLeft: 20, paddingRight: 20, position: 'relative', maxWidth: '100vw'}}
            hideMobileBtns
            restrictWidth
            title='Order A Roll Off Dumpster'
            description='Order A Roll Off Dumpster Online In Seconds. Clear Straight Forward Pricing. No Over The Phone Hassle. Easy Checkout Process.'
            pageContext={props.pageContext}
            canonicalPath={props.location.pathname}
        >

            <div
                style={{padding: '37px 0 39px', borderBottom: 'solid 12px #FFFFFF', textAlign: 'center', marginBottom: 27}}
            >
                <h1
                    style={{margin: '0 0 6px', fontSize: 28}}
                >
                    Roll Off Dumpster Rental Pricing
                </h1>
                <p
                    style={{fontSize: 14, margin: '0 auto', maxWidth: 295}}
                >
                    Buy and schedule online to get flexible pricing. Fast and reliable service.
                </p>
            </div>

            {/* Service Info */}
            <RollOffServiceInfo
                styles={styles}
                show={showServiceInfo}
                toggleShow={setShowServiceInfo}
                deliveryDate={deliveryDate}
                setDeliveryDate={setDeliveryDate}
                startAddress={startAddress}
                county={county}
                onAddressSelect={(returnObj) => checkIfPricingExists('county', returnObj)}
                setProductSkus={setAllSkus}
                toolTipDelay={toolTipDelay}
            />

            {/* Material */}
            <RollOffMaterial
                styles={styles}
                show={showMaterial}
                onHide={() => setShowMaterial(true)}
                material={material}
                openDialog={() => setDialogContent(MaterialSelectionGuide)}
                setShowMaterial={setShowMaterial}
                materialSelected={(obj) => checkIfPricingExists('material', obj)}
                selectedSize={selectedSize}
                disabled={!county || !deliveryDate}
                sizeReset={() => {
                    setSelectedTons(null);
                    setSelectedSize(null);
                    setShowSize(true);
                }}
            />

            {/* Size */}
            <RollOffSize
                styles={styles}
                show={showSize}
                onHide={() => setShowSize(true)}
                selectedSize={selectedSize}
                openDialog={() => setDialogContent(SizingGuide)}
                dumpsters={dumpsters}
                disabled={!material}
                sizeSelectedHandler={(item) => {
                    setSelectedSize(item.size);
                    setSelectedTons(item.starting);
                    setShowSize(false);
                    if (!selectedPeriod) setSelectedPeriod(rentalPeriods[0]);
                }}
                haul={getPricing('Base Haul')}
                dumpRate={getPricing('dump rate')}
            />

            <div style={{
                ...styles.stepWrapper,
                borderBottom: 0, margin: '0 auto 37px',
                opacity: !selectedSize ? 0.3 : 1
            }}>

                {/* Weight Limit */}
                {
                    !dumpRateSku || (dumpRateSku && dumpRateSku.metadata.pricingType === 'tonPricing')
                        ? <RollOffWeightLimit
                            styles={styles}
                            dumpRateSku={dumpRateSku}
                            // openDialog={() => setDialogContent(WeightLimitGuide)}
                            overage={
                                getPricing(
                                    'overage',
                                    selectedSize
                                        ? selectedTons < JSON.parse(dumpRateSku.metadata.tonStarting)[selectedSize]
                                            ? overageMultiplier
                                            : null
                                        : null
                                )
                            }
                            dumpRate={getPricing('dump rate')}
                            tonOptions={getTonOptions()}
                            startingTons={
                                selectedSize
                                    ? JSON.parse(dumpRateSku.metadata.tonStarting)[selectedSize]
                                    : null
                            }
                            selectedTons={selectedTons}
                            setSelectedTons={setSelectedTons}
                            toolTipDelay={toolTipDelay}
                        />
                        : null
                }

                {/* Yard Pricing Addons */}
                {
                    dumpRateSku && dumpRateSku.metadata.pricingType === 'yardPricing'
                        ? <RollOffYardAddons
                            styles={styles}
                            selectedSize={selectedSize}
                            dumpRateSku={dumpRateSku}
                            setSelectedAddon={setSelectedAddon}
                            selectedAddon={selectedAddon}
                        />
                        : null
                }
                
                {/* Rental Period */}
                <RollOffRentalPeriod
                    styles={styles}
                    extensionPrice={getPricing('Rental Extension')}
                    discountedExtension={getPricing('Discounted Rental Extension')}
                    rentalPeriods={rentalPeriods}
                    selectedSize={selectedSize}
                    selectedPeriod={selectedPeriod}
                    setSelectedPeriod={setSelectedPeriod}
                    deliveryDate={deliveryDate}
                />

                <div
                    style={{maxWidth: 335, margin: '37px auto 0'}}
                >
                    <PrimaryButton
                        disabled={
                            !county
                            || !material
                            || !selectedSize
                            || (
                                !selectedTons
                                && dumpRateSku
                                && dumpRateSku.metadata.pricingType === 'tonPricing'
                            )
                            || !selectedPeriod
                        }
                        fullWidth
                        onClick={addToCartHandler}
                        id='add-to-cart'
                    >
                        add to cart
                    </PrimaryButton>
                </div>

            </div>

            <div
                style={{backgroundColor: Colors.allianceBlue, margin: '0 -20px', textAlign: 'center', color: '#FFFFFF', padding: '37px 20px 57px', borderBottom: `solid 15px ${Colors.mainBg}`}}
            >
                <h2 style={{margin: 0}}>Need help?</h2>
                <p>
                    We are happy to help you with any questions you may have.<br />Contact us by:
                </p>
                <ContactOptions
                    extraButtons={[
                        {
                            label: 'Request a quote',
                            icon: <FormatQuote style={{fontSize: 25}} />,
                            onClick: () => navigate(Paths.quoteRollOff)
                        }
                    ]}
                />
            </div>

            {/* Dialogs */}
            <DialogWrapper
                open={DialogContent ? true : false}
                onClose={() => setDialogContent(null)}
                maxWidth='md'
                cancelLabel='close'
            >
                {getDialogContent()}
            </DialogWrapper>
            
        </Layout>
    );
};

const styles = {
    stepWrapper: {
        borderBottom: 'solid 1px #D8D8D8',
        paddingBottom: 27,
        margin: '0 auto 37px',
        maxWidth: 525
    },
    header: {
        margin: 0,
        marginBottom: 7
    },
    descText: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 7
    },
    helpIcon: {
        fontSize: 14,
        marginBottom: 5,
        color: '#232323'
    },
    link: {
        color: Colors.tintColor,
        cursor: 'pointer',
        fontSize: 14,
        marginBottom: 7
    },
    dumpsterWrapper: {
        padding: 10,
        textAlign: 'center',
        borderRadius: 4,
        marginBottom: 11,
        display: 'block',
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    squareSelectsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: 339,
        margin: '0 auto',
        textAlign: 'center'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddOrder: (order) => dispatch(addOrder(order))
    }
}

export default connect(null, mapDispatchToProps)(OrderRollOff);