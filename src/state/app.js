import { windowGlobal, localStorageVars } from '../constants/Window';

// Initial State
const initialState = {
    orders: [],
    products: null,
    treeCount: '1267',
    tel: '+1-732-366-9355',
    telDisplay: '(732) 366-9355',
    searchParams: ''
};

// Action Creator
const ADD_ORDER = 'ADD_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';
const UPDATE_ORDER = 'UPDATE_ORDER';
const RETRIEVE_ORDERS = 'RETRIEVE_ORDERS';
const CLEAR_ORDERS = 'CLEAR_ORDERS';

const SET_PRODUCTS = 'SET_PRODUCTS';

const SET_TREE_COUNT = 'SET_TREE_COUNT';

const SET_TEL = 'SET_TEL';

const SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS'

export const addOrder = (order) => (
    {
        type: ADD_ORDER,
        order: order
    }
);

export const deleteOrder = (orderId) => (
    {
        type: DELETE_ORDER,
        orderId: orderId
    }
);

export const updateOrder = (order) => (
    {
        type: UPDATE_ORDER,
        order: order
    }
);

export const retrieveOrders = (orders) => (
    {
        type: RETRIEVE_ORDERS,
        orders: orders
    }
);

export const clearOrders = () => (
    {
        type: CLEAR_ORDERS
    }
);

export const setProducts = (products) => (
    {
        type: SET_PRODUCTS,
        products: products
    }
);

export const setTreeCount = (treeCount) => (
    {
        type: SET_TREE_COUNT,
        treeCount: treeCount
    }
);

export const setTel = (tel, telDisplay) => (
    {
        type: SET_TEL,
        tel: tel,
        telDisplay, telDisplay
    }
);

export const setSearchParams = (searchParams) => (
    {
        type: SET_SEARCH_PARAMS,
        searchParams: searchParams
    }
);

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const updatedAddOrders = [...state.orders, action.order];
            windowGlobal.localStorage.setItem(localStorageVars.orders, JSON.stringify(updatedAddOrders));

            return {
                ...state,
                orders: updatedAddOrders
            };
        case DELETE_ORDER:
            const updatedRemoveOrders = state.orders.filter(obj => obj.id !== action.orderId)
            windowGlobal.localStorage.setItem('orders', JSON.stringify(updatedRemoveOrders));
            if (updatedRemoveOrders.length === 0) windowGlobal.localStorage.removeItem(localStorageVars.orders);

            return {
                ...state,
                orders: updatedRemoveOrders
            };
        case UPDATE_ORDER:
            const updatedOrders = state.orders.map(obj => {
                if (obj.id === action.order.id) {
                    return {
                        ...action.order,
                        addressComponents: {
                            ...action.order.addressComponents
                        },
                        baseHaul: {
                            ...action.order.baseHaul
                        },
                        discountedExtensionFee: {
                            ...action.order.discountedExtensionFee
                        },
                        dumpRate: {
                            ...action.order.dumpRate
                        }
                    }
                }

                return obj;
            });

            windowGlobal.localStorage.setItem(localStorageVars.orders, JSON.stringify(updatedOrders));

            return {
                ...state,
                orders: updatedOrders
            };
        case RETRIEVE_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        case CLEAR_ORDERS:
                return {
                    ...state,
                    orders: []
                };
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case SET_TREE_COUNT:
            return {
                ...state,
                treeCount: action.treeCount
            };
        case SET_TEL:
            return {
                ...state,
                tel: action.tel,
                telDisplay: action.telDisplay
            };
        case SET_SEARCH_PARAMS:
            return {
                ...state,
                searchParams: action.searchParams
            }
        default:
            return state;
    }
};