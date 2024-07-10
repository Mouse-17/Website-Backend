import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './Routes/UserRoutes.js';
import adminRoutes from './Routes/AdminRoutes.js';
import quotationRoutes from './routes/QuotationRoutes.js';
import experienceRoutes from './routes/ExperienceRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
import consignmentRoutes from './routes/ConsignmentRoutes.js';
import influencerRoutes from './routes/InfluencerRoutes.js';
import liveCommerceRoutes from './routes/LiveCommerceRoutes.js';
import config from './config.js';


const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:5173',
    withCredentials: true
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/quotations', quotationRoutes);
app.use('/api/experience-groups', experienceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/consignments', consignmentRoutes);
app.use('/api/influencers', influencerRoutes);
app.use('/api/live-commerce', liveCommerceRoutes);

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
