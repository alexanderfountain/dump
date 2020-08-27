import { charges } from '../constants/Data';
import { findPrice, findTax } from '../constants/Pricing';
/**
 * @typedef {OrderModel}
 */
export default class OrderModel {
    constructor(source) {

        const getPricing = (name, multiplier) => {        
            return findPrice(source.allSkus, name, source.material, multiplier);
        }

        this.id = source.id ? source.id: new Date().getTime();
        this.size = source.size;
        this.material= source.material;
        this.pricingType = source.pricingType;
        this.deliveryDate = source.deliveryDate;
        this.tonsIncluded = source.tonsIncluded;
        this.additionalTons = source.additionalTons;
        this.rentalPeriod = source.rentalPeriod;

        this.county = source.county;
        this.addressComponents = source.addressComponents;
        this.deliveryAddress = source.deliveryAddress ? source.deliveryAddress : '';

        this.company = source.company ? source.company : '';
        this.phone = source.phone ? source.phone : '';
        this.instructions = source.instructions ? source.instructions : '';

        this.additionalDays = this.rentalPeriod - charges.baseRentalPeriod;
        
        this.rentalExtensionFee = getPricing('Rental Extension');
        this.overageFee = this.pricingType === 'tonPricing' ? getPricing('overage', source.overageMultiplier) : null;

        this.baseHaul = {price: getPricing('Base Haul'), taxable: true};
        this.dumpRate = {price: getPricing('dump rate'), taxable: false};
        this.discountedExtensionFee = {price: getPricing('Discounted Rental Extension'), taxable: false};
        this.addon = source.addon ? source.addon : null

        this.tax = (
            Math.ceil(
                (
                    (
                        this.baseHaul.price + (this.additionalDays * this.discountedExtensionFee.price)
                    )
                    * findTax(this.addressComponents.state)
                ) * 100
            ) / 100
        );

        this.total = (
            (this.pricingType === 'flatPricing'
                ? source.flatPrice
                : (
                    this.baseHaul.price
                    + (
                        this.pricingType === 'tonPricing'
                            ? (this.tonsIncluded + this.additionalTons) * this.dumpRate.price
                            : (
                                this.addon
                                    ? (this.dumpRate.price + +this.addon.price) * +this.size
                                    : this.dumpRate.price * +this.size
                            )
                    )
                )
            )
            + (this.additionalDays * this.discountedExtensionFee.price)
        );

    }
}