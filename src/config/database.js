import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || process.env.MONGODB_DEV || 'mongodb://localhost:27017/globalpay_pi_dev',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
      }
    );

    logger.info(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`✅ Database connected successfully to ${conn.connection.name}`);

    // Create indexes
    await createIndexes();

    return conn;
  } catch (error) {
    logger.error(`❌ Database connection failed: ${error.message}`);
    console.error(`❌ Database connection failed: ${error.message}`);
    
    // Retry connection after 5 seconds
    console.log('Retrying connection in 5 seconds...');
    setTimeout(() => connectDB(), 5000);
  }
};

const createIndexes = async () => {
  try {
    // User indexes
    const User = mongoose.model('User');
    await User.collection.createIndex({ email: 1 }, { unique: true });
    
    // Transaction indexes
    const Transaction = mongoose.model('Transaction');
    await Transaction.collection.createIndex({ userId: 1, createdAt: -1 });
    
    logger.info('Database indexes created successfully');
  } catch (error) {
    logger.warn(`Index creation warning: ${error.message}`);
  }
};

export default connectDB;
