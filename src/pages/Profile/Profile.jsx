import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { useAuth } from '../../Context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    state: user?.state || '',
    city: user?.city || ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // Here you would typically update the user data via API
    console.log('Saving user data:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      state: user?.state || '',
      city: user?.city || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-purple-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-24 pb-12">
      <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              My Profile
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Manage your account information and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8 text-center">
                <div className="relative inline-block mb-6">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-violet-200 dark:border-violet-800"
                  />
                  <button className="absolute bottom-0 right-0 bg-violet-600 text-white p-2 rounded-full hover:bg-violet-700 transition-colors duration-200">
                    <FaEdit className="text-sm" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                  {user?.name}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {user?.email}
                </p>
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Travel Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-lg">12</div>
                      <div className="text-violet-200">Trips</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">₦45,000</div>
                      <div className="text-violet-200">Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                    Personal Information
                  </h3>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors duration-200"
                    >
                      <FaEdit className="text-sm" />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <FaSave className="text-sm" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <FaTimes className="text-sm" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      <FaUser className="inline mr-2" />
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl text-neutral-800 dark:text-neutral-100">
                        {user?.name}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl text-neutral-800 dark:text-neutral-100">
                        {user?.email}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      <FaPhone className="inline mr-2" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl text-neutral-800 dark:text-neutral-100">
                        {user?.phone}
                      </div>
                    )}
                  </div>

                  {/* Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        <FaMapMarkerAlt className="inline mr-2" />
                        State
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100"
                        />
                      ) : (
                        <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl text-neutral-800 dark:text-neutral-100">
                          {user?.state || 'Not specified'}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                        City
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 text-neutral-800 dark:text-neutral-100"
                        />
                      ) : (
                        <div className="px-4 py-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl text-neutral-800 dark:text-neutral-100">
                          {user?.city || 'Not specified'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white dark:bg-neutral-900/80 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 p-8 mt-8">
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                  Recent Bookings
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((booking) => (
                    <div key={booking} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl">
                      <div>
                        <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                          Lagos → Abuja
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          Dec 15, 2024 • Seat 12A
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-violet-600 dark:text-violet-400">
                          ₦8,500
                        </div>
                        <div className="text-sm text-green-600 dark:text-green-400">
                          Completed
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;