# CAEZ Farms - Quick Start Guide

Get the website running in 5 minutes!

## 1️⃣ Install Dependencies

**Frontend (from project root):**
```bash
npm install
```

**Backend (from project root):**
```bash
cd backend
npm install
cd ..
```

## 2️⃣ Configure Email

**Create backend/.env file:**
```bash
cp backend/.env.example backend/.env
```

**Edit backend/.env:**
```
PORT=5000
NODE_ENV=development
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=info@caezfarms.com
FRONTEND_URL=http://localhost:3000
```

For Gmail:
1. Go to https://myaccount.google.com/apppasswords
2. Create an app password
3. Copy the 16-character password into EMAIL_PASSWORD

## 3️⃣ Start Development Servers

**Open Terminal 1 - Frontend:**
```bash
npm run dev
# Opens http://localhost:3000
```

**Open Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

## 4️⃣ Test the Website

1. Open browser: http://localhost:3000
2. Click "Contact" in the navigation
3. Fill out the contact form
4. Submit - you should receive a confirmation email!

## 📁 File Guide

- **Frontend code**: `src/`
  - Pages: `src/pages/`
  - Components: `src/components/`
  - Styles: `src/styles/global.css`

- **Backend code**: `backend/`
  - Routes: `backend/routes/`
  - Utilities: `backend/utils/`
  - Config: `backend/.env`

## 🌐 Website Pages

- **Home** (`/`) - Main landing page
- **About** (`/about`) - Company information
- **Blog** (`/blog`) - News and updates
- **Contact** (`/contact`) - Contact form

## 🔧 Troubleshooting

**Frontend won't start:**
```bash
# Port 3000 in use? Kill it:
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Backend won't start:**
```bash
# Port 5000 in use? Kill it:
lsof -ti:5000 | xargs kill -9
cd backend && npm run dev
```

**Contact form not working:**
1. Check backend is running (Terminal 2)
2. Check `.env` file has correct email credentials
3. Check browser console for errors

## 📝 Code Examples

### Add a Contact Link
**In src/components/Header.jsx:**
```jsx
<Link to="/contact">Contact</Link>
```

### Call API from Frontend
**In any React component:**
```javascript
const response = await fetch('http://localhost:5000/api/products')
const data = await response.json()
console.log(data)
```

### Customize Colors
**In src/styles/global.css:**
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

## 🚀 Build for Production

**Frontend:**
```bash
npm run build
# Creates dist/ folder
```

**Backend:**
```bash
cd backend
npm start
```

## 📚 Full Documentation

- **Main README**: Read `README.md` for detailed setup
- **Backend Docs**: Read `backend/README.md` for API details
- **Code Comments**: All files have detailed comments explaining the code

## ✅ Quick Checklist

- [ ] Installed npm dependencies (frontend + backend)
- [ ] Created backend/.env file
- [ ] Added email credentials to .env
- [ ] Started frontend dev server
- [ ] Started backend dev server
- [ ] Tested contact form
- [ ] Website displays at http://localhost:3000

## 🎉 You're Ready!

The website is now running! Explore the code, make changes, and build amazing features.

All code includes comments to help you understand how everything works.

---

**Need help?** Check the README.md or code comments for detailed explanations.
