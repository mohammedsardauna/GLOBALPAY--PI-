import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import authRoutes from './src/routes/authRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';
import walletRoutes from './src/routes/walletRoutes.js';
import merchantRoutes from './src/routes/merchantRoutes.js';
import marketplaceRoutes from './src/routes/marketplaceRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import supportRoutes from './src/routes/supportRoutes.js';
import analyticsRoutes from './src/routes/analyticsRoutes.js';
import webhookRoutes from './src/routes/webhookRoutes.js';

// Import middleware
import errorHandler from './src/middleware/errorHandler.js';
import { logger } from './src/utils/logger.js';

// Import database
import connectDB from './src/config/database.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// ============ SECURITY MIDDLEWARE ============
app.use(helmet());
app.use(cors({
  origin: (process.env.CORS_ORIGIN || 'http://localhost:3000').split(','),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key']
}));

// ============ PARSING MIDDLEWARE ============
app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ============ LOGGING MIDDLEWARE ============
app.use(morgan('combined', { stream: logger.stream }));

// ============ STATIC FILES ============
app.use(express.static(path.join(__dirname, 'public')));

// ============ HEALTH CHECK ============
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '2.0.0'
  });
});

// ============ API ROUTES ============
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/merchants', merchantRoutes);
app.use('/api/marketplace', marketplaceRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/webhooks', webhookRoutes);

// ============ ROOT ENDPOINT ============
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'GLOBALPAY PI',
    version: '2.0.0',
    description: 'Production-ready decentralized global payment marketplace dApp for Pi Network',
    status: 'running',
    environment: process.env.NODE_ENV || 'development',
    pi_network: {
      mode: process.env.PI_ENVIRONMENT || 'testnet',
      sdk: 'official-pi-sdk',
      features: ['payment-processing', 'wallet-verification', 'merchant-settlement']
    },
    ai: {
      provider: 'OpenAI',
      model: 'gpt-4',
      features: ['customer-support', 'fraud-detection', 'recommendations']
    },
    features: {
      multivendor: true,
      marketplace: true,
      admin_dashboard: true,
      support_portal: true,
      analytics: true,
      mobile_responsive: true,
      qr_payments: true,
      multilingual: true
    },
    endpoints: {
      auth: '/api/auth',
      payments: '/api/payments',
      wallet: '/api/wallet',
      merchants: '/api/merchants',
      marketplace: '/api/marketplace',
      admin: '/api/admin',
      support: '/api/support',
      analytics: '/api/analytics',
      webhooks: '/api/webhooks'
    },
    docs: 'https://github.com/mohammedsardauna/GLOBALPAY--PI-'
  });
});

// ============ 404 HANDLER ============
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`
    }
  });
});

// ============ ERROR HANDLER ============
app.use(errorHandler);

// ============ START SERVER ============
const server = app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║          🚀 GLOBALPAY PI - Payment Marketplace             ║
║                   v2.0.0 - Production Ready                ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  📍 Server: http://localhost:${PORT}
║  🌍 Environment: ${process.env.NODE_ENV || 'development'}
║  📡 Pi Network: ${process.env.PI_ENVIRONMENT || 'testnet'}
║  🤖 AI Provider: OpenAI (ChatGPT)
║  💾 Database: MongoDB
║  🏪 Mode: Multivendor Marketplace
║                                                            ║
║  Available Endpoints:                                     ║
║  ├─ /api/auth        (Authentication)                    ║
║  ├─ /api/payments    (Payment Processing)                ║
║  ├─ /api/wallet      (Wallet Management)                 ║
║  ├─ /api/merchants   (Merchant Operations)               ║
║  ├─ /api/marketplace (Multivendor Store)                 ║
║  ├─ /api/admin       (Admin Dashboard)                   ║
║  ├─ /api/support     (Support Portal + AI)               ║
║  ├─ /api/analytics   (Reports & Analytics)               ║
║  └─ /api/webhooks    (Webhook Handlers)                  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
  `);
});

// ============ GRACEFUL SHUTDOWN ============
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

// ============ UNHANDLED REJECTION HANDLER ============
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection:', err);
  console.error('Unhandled Rejection:', err);
});

export default app;
