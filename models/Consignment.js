import mongoose from 'mongoose';

const consignmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    brandName: { type: String, required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    weight: { type: String, required: true },
    imageUrl: { type: String },
    platform: { type: String, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const Consignment = mongoose.model('Consignment', consignmentSchema);

export default Consignment;
