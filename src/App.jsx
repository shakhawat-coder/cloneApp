import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
// import Home from "./components/homepage/Home";
import Homepage from "./pages/Homepage";
import EmailVerified from "./components/homepage/EmailVerified";
import ChatPage from "./pages/ChatPage";
import SettingPage from "./pages/SettingPage";
import NotificationPage from "./pages/NotificationPage";
import HomepageContent from "./pages/HomepageContent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/home" element={<Homepage />} /> */}
      <Route path="/" element={<Homepage />}>
        <Route index path="" element={<HomepageContent />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/notification" element={<NotificationPage />} />
      </Route>
      <Route path="/emailVerified" element={<EmailVerified />} />

      <Route path="/*" element={<h1>Error page</h1>} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
