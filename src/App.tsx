import { Routes, Route } from 'react-router-dom';

import SigninForms from './_auth/forms/SigninForms';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import './globals.css';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
                <Route path="/sign-up" element={<SignupForm />} />
                <Route path="/sign-in" element={<SigninForms />} /> 
            </Route>

            {/* private routes */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </main>
  )
}

export default App