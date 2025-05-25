# ClothinX Frontend 👕  
Responsive and stylish React-based e-commerce frontend for men's fashion.

## 📚 Overview  
ClothinX Frontend provides a sleek user interface for an online shopping experience focused on men’s clothing. Users can browse, filter, and order trousers, shirts, sportswear, and more. The frontend is fully integrated with a Jenkins pipeline and deployed to Netlify for fast and automated delivery.

## 🚀 Features  
- 🧥 Browse products by categories: trousers, shirts, sportswear  
- 🎨 Filter products by size, color, and type  
- 🔐 User login and JWT-based authentication  
- 📱 Responsive design for all devices  
- 🌐 Integrated with backend API for real-time data  
- 🔄 CI/CD with Jenkins + Netlify deployment  

## 🛠️ Tech Stack  
- React  
- React Router for navigation  
- Axios for API calls  
- Bootstrap 
- Redux (optional for state management)  
- JWT (for auth handling)  
- Jenkins + Netlify (CI/CD pipeline)  

## 📁 Project Structure  
/src/components → UI components  
/src/pages → Route-based views  
/src/services → API utilities  
/src/context → Auth or state context  
App.jsx → Root component  
index.jsx → Entry point  

## ⚙️ Setup Instructions  

### 1. Clone the repository  
git clone https://github.com/your-username/clothinx-frontend.git  
cd clothinx-frontend  

### 2. Install dependencies  
npm install  

### 3. Configure environment variables  
Create a `.env` file with:  
REACT_APP_API_URL=https://backend-ec2-ip/api  

### 4. Start the frontend  
npm run dev  

## 🔄 CI/CD Pipeline (Jenkins + Netlify)  
- Jenkins pulls changes, runs tests, and builds the app.  
- Built frontend is pushed to Netlify using Netlify CLI or GitHub integration.  
- Live deployment is triggered automatically on each push.  

## 🔗 Links  
Backend Repo: https://github.com/your-username/clothinx-backend  
Live Demo: https://clothinx.netlify.app  
