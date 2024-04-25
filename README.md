<h1 align="center" style="font-weight: lighter"> 📚  WordWave - print and publishing website </h1>

**Backend-Repo:** <a href="https://github.com/khanhvi03/webtech-backend.git">https://github.com/khanhvi03/webtech-backend.git</a> 

## ⚙️ Structure
* **Frontend (Client-Side**): Vue (Framework) + TypeScript + Vue-Router + Bootstrap + Axios + Vitest (Testing) + Okta (Authorization/Authentication)
* **Backend (Server-Side)**: Spring Boot + PostgreSQL + Gradle (Testing)

## 🌟 Features
### 1. Submission Management:
* **Works Submission for Writer:** The submission page offers writers a user-friendly interface to submit their literary works. 
* **Submission Handling for Wordwave Editors**: Wordwave Editors can gain overview about writers' submission details through their dashboard.

### 2. Post Management:
* **Browse Posts:** At homepage readers can explore a curated collection of posts, displaying essential details like titles, authors, content, publication dates and updates.
* **Create Posts:** Wordwave Editors can compose new posts based on submissions by providing essential details such as titles, authors, and content through an intuitive interface.
* **Edit Posts:** Wordwave Editors can modify existing posts with simple editing tools, enabling updates to titles, authors, and content.
* **Delete Posts:** Wordwave Editors can manage content management by removing unwanted posts from the system.

### 3. Authentication for Wordwave Editors:
* **Registration/Login + Personalized Dashboard:** Wordwave Editors can register an account and have access to a personalized dashboard 
where they can manage their posts, submissions from writers, and profile information with ease.

## 📸 Preview
### Homepage
<img alt="about.png" src="screenshot/home.png" style="border:1px solid"/>

### Post Details
<img alt="pd.png" src="screenshot/postdetail.png" style="border:1px solid"/>

### About Page
<img alt="about.png" src="screenshot/about.png" style="border:1px solid"/>

### Submit Page
<img alt="submit.png" src="screenshot/Submit.png" style="border:1px solid"/>

### Store Page
<img alt="store.png" src="screenshot/Store.png" style="border:1px solid"/>

### Login
<img alt="login.png" src="screenshot/login.png" style="border:1px solid"/>

### Dashboard
<img alt="dashboard.png" src="screenshot/dashboard.png" style="border:1px solid"/>

### Submissions
<img alt="submissions.png" src="screenshot/submissions.png" style="border:1px solid"/>

### Posts
<img alt="posts.png" src="screenshot/posts.png" style="border:1px solid"/>

### Add Posts
<img alt="create_post.png" src="screenshot/create_post.png" style="border:1px solid"/>

### Profile
<img alt="profile.png" src="screenshot/profile.png" style="border:1px solid"/>

## 🚀 Deploy
* Backend: https://wordwave-backend.up.railway.app
* Frontend: https://wordwave-frontend.netlify.app
  or set in .env.development: VITE_BACKEND_BASE_URL=https://wordwave-backend.up.railway.app
  and use `npm run dev` in terminal
  
