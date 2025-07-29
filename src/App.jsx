@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import { AuthProvider } from './Context/AuthContext';
+import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
 import Navbar from './components/navbar/Navbar';

 import Footer from './components/footer/Footer'
 import Home from './pages/Home/Home';
+import About from './pages/About/About';
 import Bus from './pages/Bus/Bus';
 import Details from './pages/Bus/Details';
 import Checkout from './pages/Checkout/Checkout';
+import Login from './pages/Auth/Login';
+import Signup from './pages/Auth/Signup';
+import Profile from './pages/Profile/Profile';
+import Contact from './pages/Contact/Contact';

 function App() {

   return (
     <>
-      <Router>
-        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
-          {/* Navbar */}
-          <Navbar />
+      <AuthProvider>
+        <Router>
+          <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col'>
+            {/* Navbar */}
+            <Navbar />

-          {/* Home Content */}
-          <Routes>
-            <Route path='/' element={<Home />} />
-            <Route path='/bus' element={<Bus />} />
-            <Route path='/bus/bus-details/:id' element={<Details />} />
-            <Route path='/bus/bus-details/checkout' element={<Checkout />} />
-          </Routes>
-          {/* Footer */}
-          <Footer />
-        </div>
-      </Router>
+            {/* Main Content */}
+            <main className="flex-1">
+              <Routes>
+                <Route path='/' element={<Home />} />
+                <Route path='/about' element={<About />} />
+                <Route path='/bus' element={<Bus />} />
+                <Route path='/bus/bus-details/:id' element={<Details />} />
+                <Route path='/contact' element={<Contact />} />
+                <Route path='/login' element={<Login />} />
+                <Route path='/signup' element={<Signup />} />
+                <Route 
+                  path='/bus/bus-details/checkout' 
+                  element={
+                    <ProtectedRoute>
+                      <Checkout />
+                    </ProtectedRoute>
+                  } 
+                />
+                <Route 
+                  path='/profile' 
+                  element={
+                    <ProtectedRoute>
+                      <Profile />
+                    </ProtectedRoute>
+                  } 
+                />
+              </Routes>
+            </main>
+            
+            {/* Footer */}
+            <Footer />
+          </div>
+        </Router>
+      </AuthProvider>
     </>
   )
 }

 export default App