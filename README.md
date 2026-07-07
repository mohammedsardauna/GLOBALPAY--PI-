# GLOBALPAY PI - Production-Ready Pi Network Payment Marketplace dApp

A decentralized global payment marketplace dApp built for the Pi Network ecosystem. Full-stack application with Node.js backend, modern frontend, and GitHub-based deployment infrastructure.

## 🚀 Features

### Core Payment System
- ✅ Sign in with Pi, Google, Facebook
- ✅ Pi Network wallet integration & verification
- ✅ Payment creation, requests, server-side approval
- ✅ Duplicate payment prevention & fraud detection
- ✅ Merchant settlement & commission calculation
- ✅ Escrow-ready transactions
- ✅ Automatic payment status synchronization
- ✅ QR code payments
- ✅ Downloadable receipts & transaction records

### Dashboard & UI
- ✅ Unified light-blue responsive dashboard (desktop & mobile)
- ✅ Navigation bar: Home, Dashboard, Wallet, Payments, Marketplace, Merchants, Transactions, Analytics, Reports, Notifications, Support, Settings
- ✅ Bottom tools bar: Home, Wallet, Scan QR, Send, Receive, History, Profile
- ✅ Mobile-optimized interface

### Admin Dashboard
- ✅ User & merchant management
- ✅ Wallet & transaction monitoring
- ✅ Commission & exchange rate management
- ✅ Marketplace products & categories
- ✅ Order management
- ✅ Analytics & reports
- ✅ Security & audit logs
- ✅ Dispute & refund management
- ✅ Real-time monitoring

### Support & AI
- ✅ Support portal with ticket system
- ✅ FAQs & knowledge base
- ✅ Live chat & messaging
- ✅ Google Gemini AI integration
- ✅ Intelligent customer support
- ✅ Fraud detection assistance
- ✅ Transaction summaries & recommendations

### Advanced Features
- ✅ Multilingual support
- ✅ Multi-currency with automatic conversion
- ✅ Secure user profiles & merchant verification
- ✅ Email alerts & push notifications
- ✅ Transaction history & search/filtering
- ✅ API keys & secure REST APIs
- ✅ Testnet & Mainnet environments
- ✅ HTTPS encryption & JWT authentication
- ✅ Rate limiting & audit logging

## 🛠 Tech Stack

```
Frontend:
- HTML5, CSS3, JavaScript (Vanilla)
- Responsive design
- PWA support

Backend:
- Node.js + Express.js
- MongoDB with Mongoose
- WebSocket (Socket.io) for real-time
- Redis for caching

Authentication:
- JWT (JSON Web Tokens)
- OAuth 2.0 (Pi, Google, Facebook)
- Secure session management

Integrations:
- Pi Network SDK
- Google Gemini AI
- Stripe/Payment APIs
- Nodemailer for emails
- QR Code generation

Infrastructure:
- GitHub Actions (CI/CD)
- Docker & Docker Compose
- GitHub Pages (static assets)
- Environment variable management
```

## 📦 Project Structure

```
GLOBALPAY--PI-/
├── public/                      # Frontend static files
│   ├── index.html              # Main HTML
│   ├── css/
│   │   ├── styles.css          # Global styles (light-blue theme)
│   │   ├── dashboard.css       # Dashboard styles
│   │   └── responsive.css      # Mobile responsive
│   └── js/
│       ├── app.js              # Main app logic
│       ├── auth.js             # Authentication logic
│       ├── pi-sdk.js           # Pi Network SDK integration
│       ├── wallet.js           # Wallet functions
│       └── ui.js               # UI interactions
├── src/
│   ├── server.js               # Express server entry
│   ├── config/
│   │   ├── database.js         # MongoDB connection
│   │   ├── pi-network.js       # Pi Network configuration
│   │   ├── gemini-ai.js        # Google Gemini AI
│   │   └── constants.js        # App constants
│   ├── middleware/
│   │   ├── auth.js             # JWT middleware
│   │   ├── errorHandler.js     # Error handling
│   │   ├── validation.js       # Request validation
│   │   └── rateLimit.js        # Rate limiting
│   ├── controllers/
│   │   ├── authController.js   # Auth endpoints
│   │   ├── paymentController.js # Payment processing
│   │   ├── walletController.js  # Wallet management
│   │   ├── merchantController.js # Merchant APIs
│   │   ├── adminController.js   # Admin panel
│   │   ├── supportController.js # Support tickets & AI
│   │   └── analyticsController.js # Reports
│   ├── models/
│   │   ├── User.js
│   │   ├── Merchant.js
│   │   ├── Wallet.js
│   │   ├── Transaction.js
│   │   ├── Payment.js
│   │   ├── PaymentRequest.js
│   │   ├── SupportTicket.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── Commission.js
│   │   └── AuditLog.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── walletRoutes.js
│   │   ├── merchantRoutes.js
│   │   ├── adminRoutes.js
│   │   ├── supportRoutes.js
│   │   ├── marketplaceRoutes.js
│   │   └── analyticsRoutes.js
│   ├── services/
│   │   ├── piNetworkService.js
│   │   ├── paymentService.js
│   │   ├── walletService.js
│   │   ├── geminiAIService.js
│   │   ├── emailService.js
│   │   ├── qrCodeService.js
│   │   └── analyticsService.js
│   └── utils/
│       ├── validators.js
│       ├── encryption.js
│       ├── helpers.js
│       └── logger.js
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # GitHub Actions CI
│   │   ├── deploy.yml          # GitHub Actions Deploy
│   │   └── tests.yml           # Automated tests
│   └── ISSUE_TEMPLATE/         # Issue templates
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yml
├── tests/                       # Test files
├── docs/                        # Documentation
├── .env.example                 # Environment template
├── .gitignore
├── README.md
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (local or MongoDB Atlas)
- GitHub account with repository access
- Pi Network developer credentials

### Installation

```bash
# Clone repository
git clone https://github.com/mohammedsardauna/GLOBALPAY--PI-.git
cd GLOBALPAY--PI-

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

Visit `http://localhost:3000`

### Deployment with GitHub

```bash
# Push to GitHub (triggers GitHub Actions)
git add .
git commit -m "Deploy GLOBALPAY PI"
git push origin main

# GitHub Actions automatically:
# - Runs tests
# - Builds Docker image
# - Deploys to production
```

## 🔐 Environment Configuration

```env
# Pi Network
PI_API_URL=https://api.minepi.com
PI_API_KEY=your_pi_api_key
PI_SANDBOX_URL=https://sandbox.minepi.com

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/globalpay

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Facebook OAuth
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Stripe (optional)
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_PUBLIC_KEY=your_stripe_public_key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Redis
REDIS_URL=redis://localhost:6379

# Server
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
```

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register          # Register user
POST   /api/auth/login              # Login
POST   /api/auth/pi-signin          # Pi Network login
POST   /api/auth/google-signin      # Google OAuth
POST   /api/auth/facebook-signin    # Facebook OAuth
POST   /api/auth/logout             # Logout
```

### Payments
```
POST   /api/payments/create         # Create payment
GET    /api/payments/:id            # Get payment
POST   /api/payments/:id/approve    # Server-side approval
POST   /api/payments/verify         # Verify payment
GET    /api/payments/history        # Payment history
POST   /api/payments/:id/receipt    # Download receipt
```

### Wallet
```
GET    /api/wallet/balance          # Get wallet balance
POST   /api/wallet/transfer         # Transfer funds
GET    /api/wallet/history          # Transaction history
POST   /api/wallet/verify           # Verify wallet
```

### Merchant
```
POST   /api/merchants/register      # Register merchant
GET    /api/merchants/profile       # Merchant profile
GET    /api/merchants/analytics     # Merchant dashboard
POST   /api/merchants/settlement    # Request settlement
```

### Marketplace
```
GET    /api/marketplace/products    # List products
POST   /api/marketplace/products    # Add product (merchant)
GET    /api/marketplace/categories  # List categories
POST   /api/orders                  # Create order
```

### Admin
```
GET    /api/admin/users             # List users
GET    /api/admin/merchants         # List merchants
GET    /api/admin/transactions      # Monitor transactions
POST   /api/admin/commissions       # Set commissions
GET    /api/admin/analytics         # System analytics
```

### Support
```
POST   /api/support/tickets         # Create ticket
GET    /api/support/tickets         # List tickets
GET    /api/support/ai-assist       # AI assistance
POST   /api/support/chat            # Live chat
```

## 🤖 AI Integration (Google Gemini)

```javascript
// Intelligent features powered by Gemini AI:
- Smart fraud detection
- Transaction summaries
- Customer support automation
- Payment recommendations
- Merchant insights
- Intelligent search
- Automated responses
```

## 🐳 Docker Deployment

```bash
# Build Docker image
docker build -t globalpay-pi .

# Run with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

## 🔄 GitHub Actions CI/CD

Automated workflows:
- ✅ Tests on every push
- ✅ Code quality checks
- ✅ Security scanning
- ✅ Docker image build
- ✅ Automatic deployment
- ✅ Rollback on failure

## 📊 Monitoring & Analytics

- Real-time transaction monitoring
- User activity tracking
- Payment success rates
- Commission calculations
- Merchant performance
- System health metrics
- Audit logging

## 🔒 Security Features

- HTTPS/TLS encryption
- JWT authentication
- OAuth 2.0 compliance
- Rate limiting (100 req/min)
- CORS protection
- SQL injection prevention
- XSS protection
- CSRF tokens
- Wallet verification
- Payment authentication
- Secure session management
- Encrypted database fields
- Audit trail logging

## 📱 UI/UX

**Dashboard Colors**: Light Blue Theme
- Primary: #1E88E5
- Secondary: #0D47A1
- Background: #F5F5F5
- Text: #212121

**Responsive Breakpoints**:
- Desktop: 1200px+
- Tablet: 768px-1199px
- Mobile: Below 768px

## 🌍 Testnet & Mainnet

Switch environments via `.env`:
```env
PI_ENVIRONMENT=testnet    # or mainnet
```

## 📈 Revenue Model

- Commission-based (transaction fees)
- Low processing fees
- Merchant premium features
- API access tiers
- Enterprise solutions

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

MIT License - see LICENSE file

## 🆘 Support

- GitHub Issues: Report bugs
- GitHub Discussions: Ask questions
- Documentation: /docs
- Support Portal: In-app support system
- Email: support@globalpaypi.com

## 🎯 Roadmap

- [ ] Phase 1: Core payment system ✅
- [ ] Phase 2: Admin dashboard
- [ ] Phase 3: AI integration
- [ ] Phase 4: Mobile app
- [ ] Phase 5: Advanced analytics
- [ ] Phase 6: Enterprise features

## 📞 Contact

**Developer**: mohammedsardauna
- GitHub: [@mohammedsardauna](https://github.com/mohammedsardauna)
- Email: contact@globalpaypi.com

---

**Made with ❤️ for Pi Network Community** 🚀
