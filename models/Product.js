import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    brandName: { type: String, required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    weight: { type: String, required: true },
    imageUrl: { type: String },
    businessRegistration: { type: String, required: true },
    ingredientList: { type: String, required: true },
    consulateConfirmation: { type: String, required: true },
    salesCertification: { type: String, required: true },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
