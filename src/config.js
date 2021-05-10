const openpayConfig = {
    sandbox: {
        openpay_url: "https://sandbox-api.openpay.mx/v1/",
        openpay_url_pdf: "https://sandbox-dashboard.openpay.mx/spei-pdf/",
        openpay_set_production: false,
    },
    production: {
        openpay_url: "https://api.openpay.mx/",
        openpay_url_pdf: "https://dashboard.openpay.mx/spei-pdf/",
        openpay_set_production: true,
    },
};
  

const webhookConfig = {
    sandbox: {
        url: "https://d2pz6u2m5gb9og.cloudfront.net/notifications",
        user: "user",
        password: "123456",
        event_types: [
            "verification",
            "charge.refunded",
            "charge.failed",
            "charge.cancelled",
            "charge.created",
            "charge.succeeded",
            "subscription.charge.failed",
            "payout.created",
            "payout.succeeded",
            "payout.failed",
            "transfer.succeeded",
            "fee.succeeded",
            "fee.refund.succeeded",
            "spei.received",
            "chargeback.created",
            "chargeback.rejected",
            "chargeback.accepted",
            "adjustment.created",
            "order.created",
            "order.activated",
            "order.payment.received",
            "order.completed",
            "order.expired",
            "order.cancelled",
            "order.payment.cancelled"
        ],
    },
    production: {
        url: "https://d2pz6u2m5gb9og.cloudfront.net/notifications",
        user: "user",
        password: "123456",
        event_types: [
            "verification",
            "charge.refunded",
            "charge.failed",
            "charge.cancelled",
            "charge.created",
            "charge.succeeded",
            "subscription.charge.failed",
            "payout.created",
            "payout.succeeded",
            "payout.failed",
            "transfer.succeeded",
            "fee.succeeded",
            "fee.refund.succeeded",
            "spei.received",
            "chargeback.created",
            "chargeback.rejected",
            "chargeback.accepted",
            "adjustment.created",
            "order.created",
            "order.activated",
            "order.payment.received",
            "order.completed",
            "order.expired",
            "order.cancelled",
            "order.payment.cancelled"
        ],
    },
};

module.exports = {
    openpayConfig, 
    webhookConfig 
}; 