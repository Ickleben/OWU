const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, require: true },
    password: { type: String, require: true },
    age: { type: Number, default: 18 },
    cars: [{ type: Schema.Types.ObjectId, ref: 'Car' }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });
userSchema.virtual('full_name').get(function() {
    return `${this.name} ${this.age}`;
});

userSchema.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id',
});

userSchema
    .pre('find', function() {
        this.populate('userCars');
    })
    .pre('findOne', function() {
        this.populate('userCars');
    });
module.exports = model('User', userSchema);
