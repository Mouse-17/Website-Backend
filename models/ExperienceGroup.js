import mongoose from 'mongoose';

const experienceGroupSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    brandName: { type: String, required: true },
    productName: { type: String, required: true },
    productType: { type: String, required: true },
    weight: { type: String, required: true },
    imageUrl: { type: String },
    targetAudience: { type: String, required: true },
    groupSize: { type: Number, required: true },
    strengths: { type: String },
    status: { type: String, default: 'Pending' }
}, { timestamps: true });

const ExperienceGroup = mongoose.model('ExperienceGroup', experienceGroupSchema);

export default ExperienceGroup;
