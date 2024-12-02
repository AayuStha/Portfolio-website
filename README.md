# Portfolio Website

A modern, responsive portfolio website built with React, and Firebase. Features a smooth animations, and an interactive user interface.

<!-- ![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=600) -->

## 🚀 Features

- **Responsive Design**: Seamless experience across all devices
- **Modern UI/UX**: Smooth animations and transitions using Framer Motion
- **Dynamic Content**: Firebase-powered contact form and content management
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Tech Stack

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - Framer Motion

- **Backend/Services**:
  - Firebase Realtime Database
  - Firebase Hosting

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
portfolio-website/
├── src/
│   ├── assets/
│   │   ├── images/        # Static images
│   ├── components/        # Reusable UI components
│   ├── sections/          # Main page sections
│   ├── data/             # Static content and configurations
│   ├── types/            # TypeScript type definitions
│   └── config/           # Configuration files
└── package.json
```

## 🎨 Key Components

- **Dynamic Sections**: About, Projects, Experience, Skills
- **Contact Form**: Firebase-integrated messaging system
- **Responsive Navigation**: Mobile-friendly menu with smooth scrolling

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project
2. Enable Realtime Database
3. Set up authentication if required
4. Update Firebase configuration in `src/config/firebase.ts`

### Content Management

Update content in `src/data/index.ts`:
- Projects
- Experience
- Skills
- Personal Information

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## ⚡ Performance Optimization

- Optimized images
- Code splitting
- Efficient state management

## 🔐 Security

- Environment variables for sensitive data
- Firebase security rules
- Input validation
- XSS protection

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting service:
   ```bash
   # Example for Firebase Hosting
   firebase deploy
   ```

## 👤 Author

**Aayush Shrestha**
- Email: aayustha21@gmail.com
- GitHub: [github.com/aayush](https://github.com/AayuStha)
- LinkedIn: [linkedin.com/in/aayush](https://linkedin.com/in/ayz-sth)

## 🙏 Acknowledgments

- React ecosystem maintainers
- Firebase team for backend services

---

Made with ❤️ by Aayush Shrestha