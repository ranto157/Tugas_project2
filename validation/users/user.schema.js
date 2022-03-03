const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        password: joi.string().min(6).required(),
        name: joi.string().min(3).required(),
        addres:joi.string().max(50).required(),
        join_date:joi.string().max(50).required(),
        phone_number:joi.number().integer().min(1000000000).message("Invalid Mobile Number").required(),
    })
};

module.exports = schema;