import { materials, salesTax } from './Data';

export const findPrice = (allSkus, name, material, multiplier) => {

    // Array of objects get Key from value
    const materialKey = Object.keys(materials).find(key => materials[key] === material);

    let sku = {price: 0};

    switch(name) {
        case 'Rental Extension':
            sku = allSkus.find(item => {
                if (
                    materialKey
                    && item.attributes.material === materialKey
                    && item.attributes.type === 'rentalExtension'
                    && item.metadata.discounted === 'false'
                ) {
                    return item
                };
                return (
                    item.attributes.material === 'null'
                    && item.attributes.type === 'rentalExtension'
                    && item.metadata.discounted === 'false'
                )
            });
            break;
        case 'Discounted Rental Extension':
            sku = allSkus.find(item => {
                if (
                    materialKey
                    && item.attributes.material === materialKey
                    && item.attributes.type === 'rentalExtension'
                    && item.metadata.discounted === 'true'
                ) {
                    return item
                };
                return (
                    item.attributes.material === 'null'
                    && item.attributes.type === 'rentalExtension'
                    && item.metadata.discounted === 'true'
                )
            });
            break;
        case 'Base Haul':
            sku = allSkus.find(item => {
                if (
                    materialKey
                    && item.attributes.material === materialKey
                    && item.attributes.type === 'haul'
                ) {
                    return item
                };
                return (
                    item.attributes.material === 'null' &
                    item.attributes.type === 'haul'
                )
            });
            break;
        case 'dump rate':
            if (materialKey) {
                sku = allSkus.find(item => (
                    item.attributes.type === 'dumpRate'
                    && item.attributes.material === materialKey
                ));
            }
            break;
        case 'overage':
            if (materialKey) {
                let overageSku = allSkus.find(item => (
                    item.attributes.type === 'dumpRate'
                    && item.attributes.material === materialKey
                    && item.metadata.pricingType === 'tonPricing'
                ));

                sku = {price: overageSku.metadata.overage}
            }
            break;
        default: break;
    }

    let price = sku.price.toString().slice(0, -2)
        + '.' +
        sku.price.toString().slice(-2);

    if (multiplier) price = Math.ceil(+price * multiplier);

    return +price;
}

export const findTax = (state) => (
    salesTax.find(item => item.state === state).amount
);