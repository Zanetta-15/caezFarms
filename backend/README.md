# CAEZ Farms Backend API

Express.js backend server for the CAEZ Farms website. Handles contact form submissions, email notifications, and provides API endpoints for product and blog data.

## Quick Start

### Installation

```bash
# Install dependencies
npm install
```

### Configuration

```bash
# Create .env file from template
cp .env.example .env

# Edit .env with your email service credentials
```

### Running the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server will start on port 5000 (or custom PORT in .env).

## Project Structure

```
backend/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── .env                   # Environment variables (create from .env.example)
├── .env.example           # Template for environment variables
├── .gitignore             # Git ignore rules
├── routes/                # API route handlers
│   ├── contact.js         # Contact form endpoint
│   └── api.js             # General API endpoints
└── utils/                 # Utility functions
    ├── validation.js      # Input validation
    └── email.js           # Email sending
```

## API Endpoints

### Health Check
**GET** `/api/health`
- Check if backend is running
- Response: `{ status: "success", message: "...", timestamp: "..." }`

### Contact Form
**POST** `/api/contact`
- Submit contact form
- Body: `{ name, email, subject, message }`
- Validates input and sends emails
- Response: `{ status: "success", message: "..." }`

**GET** `/api/contact/health`
- Check if contact service is active

### Products
**GET** `/api/products`
- Get list of all products
- Response: Array of product objects with name, description, highlights

### Blog
**GET** `/api/blog`
- Get list of blog posts
- Response: Array of blog post objects

**GET** `/api/blog/:id`
- Get single blog post by ID
- Response: Blog post object with full content

### Company Info
**GET** `/api/company-info`
- Get general company information
- Response: Company details (name, location, mission, vision, etc.)

## Code Explained

### server.js - Main Server File

```javascript
// MIDDLEWARE - Code that runs on every request
app.use(cors())           // Allow frontend to make requests
app.use(express.json())   // Parse JSON request bodies

// ROUTES - Define API endpoints
app.get('/api/health')    // Health check endpoint
app.use('/api/contact')   // Contact form routes
app.use('/api', apiRoutes) // General API routes
```

### routes/contact.js - Contact Form Handler

```javascript
// POST request receives form data
// 1. Validates input (name, email, subject, message)
// 2. Sends email to company
// 3. Sends confirmation email to user
// 4. Returns success/error response
```

**Validation checks:**
- Name: 2-100 characters
- Email: Valid email format
- Subject: 3-200 characters
- Message: 10-5000 characters

### utils/validation.js - Input Validation

Validates form data before processing:
- Email format checking
- String length validation
- Input sanitization to prevent XSS attacks

### utils/email.js - Email Sending

Uses Nodemailer to send emails:
1. **Company notification** - Sends form data to company email
2. **User confirmation** - Sends confirmation email to user

## Environment Variables

Create `.env` file with these variables:

```
# Server
PORT=5000
NODE_ENV=development

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=info@caezfarms.com

# CORS
FRONTEND_URL=http://localhost:3000
```

### Email Service Options

- **Gmail**: `gmail` (recommended for development)
- **Outlook**: `outlook365`
- **Yahoo**: `yahoo`
- **Custom SMTP**: Configure in email.js

## Setting Up Email

### Gmail (Recommended)

1. Enable 2-factor authentication: https://myaccount.google.com/security
2. Create App Password: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your device)
4. Copy the 16-character password
5. Add to `.env`:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

### Other Email Services

Refer to [Nodemailer SMTP Documentation](https://nodemailer.com/smtp/)

## Request Examples

### Contact Form Submission

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Partnership Inquiry",
    "message": "I am interested in learning more about CAEZ Farms..."
  }'
```

Response:
```json
{
  "status": "success",
  "message": "Your message has been sent successfully..."
}
```

### Get Products

```bash
curl http://localhost:5000/api/products
```

Response:
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Elite Hybrid Coconut",
      "description": "...",
      "highlights": [...]
    }
  ]
}
```

## Error Handling

The server returns appropriate HTTP status codes and error messages:

- **200** - Success
- **400** - Bad request (validation error)
- **404** - Route not found
- **500** - Server error

Example error response:
```json
{
  "status": "error",
  "message": "Email format is invalid",
  "errors": ["Email format is invalid"]
}
```

## Extending the Backend

### Add a New API Endpoint

1. Create function in `routes/api.js`:
```javascript
router.get('/new-endpoint', (req, res) => {
  // Get data
  const data = { ... }
  
  // Send response
  res.json({
    status: 'success',
    data: data
  })
})
```

2. Call from frontend:
```javascript
const response = await fetch('http://localhost:5000/api/new-endpoint')
const data = await response.json()
```

### Add Email Validation

Edit `utils/validation.js` and add new validation function:
```javascript
export function validateCustomField(value) {
  // Add validation logic
  return isValid
}
```

## Troubleshooting

### Port 5000 Already in Use

Kill the process:
```bash
# macOS/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Emails Not Sending

1. Check `.env` file exists and has correct values
2. Verify email credentials are correct
3. Check backend console for error messages
4. Ensure EMAIL_SERVICE matches your email provider

### CORS Errors

If frontend can't reach backend:
1. Ensure `FRONTEND_URL` in `.env` matches frontend URL
2. Check backend is running on port 5000
3. Verify CORS middleware is enabled in `server.js`

### Module Not Found Errors

```bash
# Make sure you're in backend directory
cd backend

# Reinstall dependencies
rm -rf node_modules
npm install
```

## Security Notes

1. **Never commit .env file** - Uses are in .gitignore
2. **Validate all input** - All form data is validated before processing
3. **Sanitize input** - XSS prevention built into validation
4. **Use HTTPS in production** - Enable SSL/TLS on production server
5. **Protect email credentials** - Use app passwords, not main account passwords

## Dependencies

- **express** - Web framework
- **cors** - Enable cross-origin requests
- **nodemailer** - Email functionality
- **dotenv** - Environment variables

## Performance

- Lightweight Express server
- Built-in error handling
- Email sending is asynchronous (doesn't block requests)
- CORS configuration is optimized

## Support

For questions about the backend code, refer to detailed comments in each file explaining:
- What each function does
- How to use each endpoint
- How to extend functionality

---

**CAEZ Farms Backend API** - Built for sustainable agriculture 🌱
