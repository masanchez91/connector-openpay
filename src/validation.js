const joi = require('joi');
const { openpayConfig, webhookConfig } = require('./config');
const ctx = 'sandbox';
const defaultConfig = openpayConfig[ctx];
const defaultWebhookConfig = webhookConfig[ctx];
const validation = {};

validation.setContext = parameters => {
    const context = parameters[ctx];
    const openpay = { ...defaultConfig, ...context }
    return verifyScheme(openpay);
}

const verifyScheme = parameters => {
  const schema = joi.object().keys({
    openpay_id: joi.string().alphanum().required(),
    openpay_url: joi.string().uri().required(),
    openpay_private_key: joi.string().required(),
    openpay_public_key: joi.string().required(),
    openpay_set_production: joi.boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false')
      .default(false),
  }).unknown().required();

  const { error, value: openpay } = joi.validate(parameters, schema);
  if (error) throw new Error('Whoops!', error)


  return openpay;
}

module.exports = validation;