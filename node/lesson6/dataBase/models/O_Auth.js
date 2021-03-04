const { Schema, model } = require('mongoose');
// const { dataBaseTables: { O_AUTH, USER } } = require('../../constant');

const oAuthSchema = new Schema({
    access_token: { type: String },
    refresh_token: { type: String },
    _user_id: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = model('O_Auth', oAuthSchema);
