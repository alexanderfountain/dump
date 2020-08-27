import axios from 'axios';

export const endPoints = {
    PRODUCTS_SKUS: 'stripe-get-product-skus',
    CREATE_CUSTOMER: 'stripe-create-customer',
    CREATE_CHARGE: 'stripe-create-charge'
    // CREATE_CUSTOMER: 'stripe-create-customer-dev',
    // CREATE_CHARGE: 'stripe-create-charge-dev'
}

export const getProducts = () => {

    const url = process.env.GATSBY_AWS_STRIPE_URL + endPoints.PRODUCTS_SKUS;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify({getProducts: true})
    });

}

export const getSkus = (params) => {

    const url = process.env.GATSBY_AWS_STRIPE_URL + endPoints.PRODUCTS_SKUS;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify({getSkus: true, params: {limit: 100, ...params}})
    });

}

export const getOneSku = (sku) => {

    const url = process.env.GATSBY_AWS_STRIPE_URL + endPoints.PRODUCTS_SKUS;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify({getOneSku: true, sku: sku})
    });

}

export const getCoupons = () => {

    const url = process.env.GATSBY_AWS_STRIPE_URL + endPoints.PRODUCTS_SKUS;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify({getCoupons: true})
    });

}

export const createCustomer = (data) => {

    const url = process.env.GATSBY_AWS_STRIPE_URL + endPoints.CREATE_CUSTOMER;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
    });

}

export const createCharge = (data) => {

    const url = process.env.GATSBY_AWS_STRIPE_URL + endPoints.CREATE_CHARGE;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
    });

}