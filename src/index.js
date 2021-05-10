const Openpay = require('openpay');
const validation = require('./validation');

const setConnection = openpay_access => {
    const openpay = validation.setContext(openpay_access);
    return new Openpay(
        openpay.openpay_id,
        openpay.openpay_private_key,
        openpay.openpay_set_production,
    )
};

const createClientOpenpay = async parameters => {
    const { openpay_access, client } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.create(client, (error, response) => (
            resolve({ error, client: response })
        ))
    ))
};

const updateClientOpenpay = async parameters => {
    const { openpay_access, customerId, client } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.update(customerId, client, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const createBankAccounts = async parameters => {
    const { client_openpay_id, bank_account, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.bankaccounts.create(client_openpay_id, bank_account, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const deleteBankAccount = async parameters => {
    const { customerId, bankaccountId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.bankaccounts.delete(customerId, bankaccountId, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const getAllBankAccount = async parameters => {
    const { customerId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.bankaccounts.list(customerId, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const createWebHook = async parameters => {
    const { webhook, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.webhooks.create(webhook, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const createSpeiReference = async parameters => {
    const { customerId, bankChargeRequest, access } = parameters;
    const connection = setConnection(access);
    return new Promise((resolve) => (
        connection.customers.charges.create(customerId, bankChargeRequest, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const getCommerce = async parameters => {
    const { openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.merchant.get(function (error, customerId = connection.merchantId) {
            resolve({ error, response: customerId });
        })
    ))
};

const createPayouts = async parameters => {
    const { openpayCustomerId, payoutRequest, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.payouts.create(openpayCustomerId, payoutRequest, (error, response) => (
            resolve({ error, response })
        ))
    ))
};

const deleteClientOpenpay = async parameters => {
    const { openpayCustomerId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.delete(openpayCustomerId, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const deleteWebHook = async parameters => {
    const { webhookId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.webhooks.delete(webhookId, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const createPlan = async parameters => {
    const { planRequest, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.plans.create(planRequest, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const associateCard = async parameters => {
    const { cardRequest, customerId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.cards.create(customerId, cardRequest, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const userSubscription = async parameters => {
    const { subscriptionRequest, customerId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.subscriptions.create(customerId, subscriptionRequest, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const unsubscribePlan = async parameters => {
    const { customerId, subscriptionId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.subscriptions.delete(customerId, subscriptionId, (error, response) => (
            resolve({ error, response })
        ))
    ))
}
const deleteCard = async parameters => {
    const { customerId, cardId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.cards.delete(customerId, cardId, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const updateSubscription = async parameters => {
    const { customerId, subscriptionId, subscriptionRequest, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.subscriptions.update(customerId, subscriptionId, subscriptionRequest, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const cancelPaymentOrder = async parameters => {
    const { customerId, transactionId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.customers.payouts.delete(customerId, transactionId, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

const getPlans = async parameters => {
    const { planId, openpay_access } = parameters;
    const connection = setConnection(openpay_access);
    return new Promise((resolve) => (
        connection.plans.get(planId, (error, response) => (
            resolve({ error, response })
        ))
    ))
}

module.exports = {
    createSpeiReference,
    createClientOpenpay,
    createWebHook,
    createBankAccounts,
    createPayouts,
    deleteBankAccount,
    getAllBankAccount,
    getCommerce,
    updateClientOpenpay,
    deleteClientOpenpay,
    deleteWebHook,
    createPlan,
    associateCard,
    userSubscription,
    unsubscribePlan,
    deleteCard,
    updateSubscription,
    cancelPaymentOrder,
    getPlans,
};