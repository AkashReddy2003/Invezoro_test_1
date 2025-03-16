import React from 'react';
import { GraduationCap, Award, AlignCenterVertical as Certificate, BookOpen, Clock, Calendar, Star, Trophy } from 'lucide-react';

function ProfilePage() {
  // Mock data - in a real app this would come from your backend
  const user = {
    name: "Sarah Johnson",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    completedCourses: 12,
    inProgressCourses: 3,
    totalCertificates: 8,
    badges: 15
  };

  const courses = [
    {
      id: 1,
      title: "Advanced Web Development",
      progress: 100,
      completed: true,
      duration: "12 weeks",
      startDate: "Jan 15, 2024"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      progress: 75,
      completed: false,
      duration: "16 weeks",
      startDate: "Feb 1, 2024"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 100,
      completed: true,
      duration: "8 weeks",
      startDate: "Dec 1, 2023"
    }
  ];

  const badges = [
    { id: 1, name: "Quick Learner", icon: <Star className="w-6 h-6" /> },
    { id: 2, name: "Course Creator", icon: <BookOpen className="w-6 h-6" /> },
    { id: 3, name: "Achievement Hunter", icon: <Trophy className="w-6 h-6" /> }
  ];

  const certificates = [
    {
      id: 1,
      name: "Web Development Master",
      issueDate: "Feb 2024",
      credential: "WD-2024-001"
    },
    {
      id: 2,
      name: "Data Science Specialist",
      issueDate: "Jan 2024",
      credential: "DS-2024-045"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">My Learning Dashboard</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center gap-6">
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.role}</p>
            </div>
            <div className="ml-auto grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{user.completedCourses}</div>
                <div className="text-sm text-gray-600">Completed Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{user.badges}</div>
                <div className="text-sm text-gray-600">Earned Badges</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <GraduationCap className="text-indigo-600" />
                  My Courses
                </h3>
              </div>
              <div className="space-y-4">
                {courses.map(course => (
                  <div key={course.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{course.title}</h4>
                      <span className={`px-2 py-1 rounded text-sm ${
                        course.completed 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {course.completed ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Started: {course.startDate}
                      </span>
                    </div>
                    {!course.completed && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Badges Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-indigo-600" />
                <h3 className="text-xl font-semibold">Earned Badges</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {badges.map(badge => (
                  <div key={badge.id} className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="text-indigo-600 mb-2">{badge.icon}</div>
                    <span className="text-sm text-center font-medium">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Certificate className="text-indigo-600" />
                <h3 className="text-xl font-semibold">Certificates</h3>
              </div>
              <div className="space-y-4">
                {certificates.map(cert => (
                  <div key={cert.id} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>Issued: {cert.issueDate}</p>
                      <p>Credential ID: {cert.credential}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;