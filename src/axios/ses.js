import axios from "axios";

export const endPoints = {
    CONTACT_US: 'alliance-contact',
    ORDER_PLACED_ROLL_OFF: 'order-placed-roll-off',
    QUOTE_COMMERCIAL: 'quote-commercial',
    QUOTE_JUNK_REMOVAL: 'quote-junk-removal',
    QUOTE_ON_DEMAND_PICKUP: 'quote-on-demand-pickup',
    QUOTE_RESIDENTIAL:'quote-residential',
    QUOTE_ROLL_OFF: 'quote-roll-off',
    SCHEDULE_WASTE_AUDIT: 'schedule-waste-audit',
    SEND_FEEDBACK: 'send-feedback',
    IE_FORM: 'ie-form',
    CART_ABANDONED: 'cart-abandoned'
}

export function sendEmail(endPoint, data) {

    const url = process.env.GATSBY_AWS_SES_URL + endPoint;

    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
    });

}