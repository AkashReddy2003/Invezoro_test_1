import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(()=>{
    window.scrollTo(0,0);
    document.title="Stay Updated: Industry Trends & Learning Tips by Invezoro";
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Invezoro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Courses</a>
              <a href="#" className="text-indigo-600">Blog</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">{post.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                      alt={post.author}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/post/${post.id}`)}
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-indigo-600 font-semibold">{post.category}</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
                      alt={post.author}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/post/${post.id}`)}
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-600 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-indigo-100 mb-8">Subscribe to our newsletter for the latest educational insights and updates.</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg"
              />
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold">Invezoro</span>
              </div>
              <p className="text-gray-400">Empowering learners worldwide through innovative education technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(1).map(category => (
                  <li key={category}>
                    <a href="#" className="text-gray-400 hover:text-white">{category}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><LinkedIn className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Invezoro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlogList;