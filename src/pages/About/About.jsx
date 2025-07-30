@@ .. @@
-import React from 'react'
+import React from 'react';
+import { FaShieldAlt, FaClock, FaUsers, FaMapMarkerAlt, FaAward, FaHeart } from 'react-icons/fa';

 const About = () => {
+  const stats = [
+    { icon: FaUsers, number: '50,000+', label: 'Happy Customers' },
+    { icon: FaMapMarkerAlt, number: '500+', label: 'Routes Covered' },
+    { icon: FaClock, number: '99.8%', label: 'On-Time Performance' },
+    { icon: FaAward, number: '15+', label: 'Years of Service' }
+  ];
+
+  const values = [
+    {
+      icon: FaShieldAlt,
+      title: 'Safety First',
+      description: 'Your safety is our top priority. All our buses undergo regular maintenance and safety checks.'
+    },
+    {
+      icon: FaClock,
+      title: 'Reliability',
+      description: 'We pride ourselves on punctuality and consistent service delivery across all routes.'
+    },
+    {
+      icon: FaHeart,
+      title: 'Customer Care',
+      description: 'Our dedicated customer service team is available 24/7 to assist you with any inquiries.'
+    }
+  ];
+
   return (
-    <div>About</div>
+    <div className="w-full mt-20">
+      {/* Hero Section */}
+      <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 text-white py-20">
+        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
+          <div className="max-w-4xl mx-auto text-center">
+            <h1 className="text-5xl md:text-6xl font-bold mb-6">
+              About Our Journey
+            </h1>
+            <p className="text-xl md:text-2xl text-violet-100 leading-relaxed">
+              Connecting Nigeria, one journey at a time. We've been making travel 
+              safe, comfortable, and affordable for over 15 years.
+            </p>
+          </div>
+        </div>
+      </div>
+
+      {/* Stats Section */}
+      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 -mt-16 relative z-10">
+        <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
+          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
+            {stats.map((stat, index) => (
+              <div key={index} className="text-center">
+                <stat.icon className="text-4xl text-violet-600 dark:text-violet-400 mx-auto mb-4" />
+                <div className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
+                  {stat.number}
+                </div>
+                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
+                  {stat.label}
+                </div>
+              </div>
+            ))}
+          </div>
+        </div>
+      </div>
+
+      {/* Story Section */}
+      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-20">
+        <div className="max-w-4xl mx-auto">
+          <div className="text-center mb-16">
+            <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
+              Our Story
+            </h2>
+            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
+              Founded in 2008 with a simple mission: to make intercity travel in Nigeria 
+              safe, comfortable, and accessible to everyone.
+            </p>
+          </div>
+
+          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
+            <div>
+              <img 
+                src="https://images.pexels.com/photos/1098365/pexels-photo-1098365.jpeg?auto=compress&cs=tinysrgb&w=600" 
+                alt="Modern bus fleet" 
+                className="w-full h-80 object-cover rounded-2xl shadow-lg"
+              />
+            </div>
+            <div className="space-y-6">
+              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
+                From Humble Beginnings
+              </h3>
+              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
+                What started as a small transport company with just 3 buses has grown 
+                into Nigeria's most trusted intercity bus service. We began our journey 
+                connecting Lagos and Ibadan, and today we serve over 500 routes across 
+                all 36 states of Nigeria.
+              </p>
+              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
+                Our commitment to excellence, safety, and customer satisfaction has 
+                earned us the trust of over 50,000 passengers who choose us for their 
+                travel needs every month.
+              </p>
+            </div>
+          </div>
+
+          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
+            <div className="space-y-6 lg:order-2">
+              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
+                Modern Fleet & Technology
+              </h3>
+              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
+                Our fleet consists of modern, well-maintained buses equipped with 
+                air conditioning, comfortable seating, and safety features. We've 
+                invested heavily in technology to provide you with real-time tracking, 
+                online booking, and 24/7 customer support.
+              </p>
+              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
+                Every bus in our fleet undergoes regular maintenance and safety 
+                inspections to ensure your journey is not just comfortable, but 
+                also completely safe.
+              </p>
+            </div>
+            <div className="lg:order-1">
+              <img 
+                src="https://images.pexels.com/photos/1098364/pexels-photo-1098364.jpeg?auto=compress&cs=tinysrgb&w=600" 
+                alt="Bus interior" 
+                className="w-full h-80 object-cover rounded-2xl shadow-lg"
+              />
+            </div>
+          </div>
+        </div>
+      </div>
+
+      {/* Values Section */}
+      <div className="w-full bg-neutral-50 dark:bg-neutral-900/30 py-20">
+        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
+          <div className="text-center mb-16">
+            <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
+              Our Core Values
+            </h2>
+            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
+              These principles guide everything we do and shape the experience we 
+              provide to our customers.
+            </p>
+          </div>
+
+          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
+            {values.map((value, index) => (
+              <div key={index} className="bg-white dark:bg-neutral-900/60 rounded-2xl p-8 shadow-lg border border-neutral-200/50 dark:border-neutral-800/50 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
+                <value.icon className="text-5xl text-violet-600 dark:text-violet-400 mx-auto mb-6" />
+                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
+                  {value.title}
+                </h3>
+                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
+                  {value.description}
+                </p>
+              </div>
+            ))}
+          </div>
+        </div>
+      </div>
+
+      {/* Mission Section */}
+      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-20">
+        <div className="max-w-4xl mx-auto text-center">
+          <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
+            Our Mission
+          </h2>
+          <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
+            To provide safe, reliable, and comfortable transportation services that 
+            connect communities across Nigeria, making travel accessible and enjoyable 
+            for everyone.
+          </p>
+          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl p-8">
+            <h3 className="text-2xl font-bold mb-4">
+              Join Our Journey
+            </h3>
+            <p className="text-lg text-violet-100 mb-6">
+              Experience the difference of traveling with Nigeria's most trusted 
+              bus service. Book your next journey with us today.
+            </p>
+            <button className="bg-white text-violet-600 font-semibold px-8 py-3 rounded-xl hover:bg-violet-50 transition-colors duration-300">
+              Book Your Trip
+            </button>
+          </div>
+        </div>
+      </div>
+    </div>
   )
 }

-export default About
+export default About;