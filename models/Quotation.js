import mongoose from 'mongoose';

const quotationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    projectName: { type: String, required: true },
    brandName: { type: String, required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    weight: { type: String, required: true },
    imageUrl: { type: String },
    quotationAmount: { type: Number },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const Quotation = mongoose.model('Quotation', quotationSchema);

export default Quotation;
