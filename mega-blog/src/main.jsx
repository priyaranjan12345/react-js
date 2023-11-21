import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLauout } from './components/index.js'
import AllPost from './pages/AllPostPage.jsx'
import AddPostPage from './pages/AddPostPage.jsx'
import EditPostPage from './pages/EditPostPage.jsx'
import PostPage from './pages/PostPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: (
          <AuthLauout authentication={false}>
            <LoginPage />
          </AuthLauout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLauout authentication={false}>
            <SignupPage />
          </AuthLauout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLauout authentication={true}>
            {" "}
            <AllPost />
          </AuthLauout>
        )
      },
      {
        path: "/add-post",
        element: (
          <AuthLauout authentication={true}>
            {" "}
            <AddPostPage />
          </AuthLauout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLauout authentication={false}>
            {" "}
            <EditPostPage />
          </AuthLauout>
        )
      },
      {
        path: "/post/:slug",
        element: <PostPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
