# Parents & Children React App

## 📌 Description

This is a simple React app that demonstrates **parent-child communication** in React. The app presents two questions:

1. **Who has the best fries?** (Shows logos for McDonald's, Chick-fil-A, Wendy's, and Popeyes)
2. **Which console is better?** (Shows logos for Nintendo, PlayStation, and Xbox)

Each question has a **Change button**, allowing users to **cycle through the images** corresponding to each option. This app uses **React state and props** to handle updates between the parent and child components.

---

## 🚀 How to Run the App

### 📌 Prerequisites

Make sure you have the following installed on your computer:

- **Node.js** (Download from [nodejs.org](https://nodejs.org))
- **npm** (comes with Node.js)

### 📌 Steps to Install & Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/aunajec/parents-and-children.git
   cd parents-and-children
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the App:**
   ```bash
   npm start
   ```
4. **Open in Browser:**
   The app will open automatically, or go to:
   ```
   http://localhost:3000
   ```

---

## 📸 Screenshot

Here’s a preview of the app:



---

## 🛠️ Technologies Used

- **React** (Component-based UI development)
- **JavaScript** (Frontend logic)
- **HTML & CSS** (Page structure & styling)

---

## 👨‍💻 How the App Works

- The **Parent Component** (`Parent.js`) manages the state for each child.
- The **Child Components** (`Child.js`) display a **question**, an **image**, and a **Change button**.
- When the **Change button** is clicked:
  - The child **notifies the parent**.
  - The **parent updates the child's content** (cycling through images).

---

## ✅ Features

✔ **Dynamically updates images** on button click.\
✔ **Uses React state & props** for communication between components.\
✔ **Simple and interactive UI.**

---

## 📌 Notes

- **Images are stored in** `public/assets/`.
- **If images are missing, make sure to add them to the correct folder.**
- **If the app doesn't run, double-check that all dependencies are installed using:**
  ```bash
  npm install
  ```

---

## 📤 Submitting Your Work

Once your app is working:

1. **Record a screen capture** of the app running.
2. **Upload to GitHub** and share the link.

---

## 👤 Author

**Aunaje' Caldwell**\
📧 [caldwellaunaje@gmail.com](mailto\:caldwellaunaje@gmail.com)\
🔗 [GitHub Profile](https://github.com/aunajec)

---

🎉 Enjoy using the app!

