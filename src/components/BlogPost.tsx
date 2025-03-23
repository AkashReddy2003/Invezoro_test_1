import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Linkedin as LinkedIn, Heart, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogData';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentPostId = Number(id);
  const post = blogPosts.find(post => post.id === currentPostId);

  const { previousPost, nextPost } = useMemo(() => {
    const currentIndex = blogPosts.findIndex(post => post.id === currentPostId);
    return {
      previousPost: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
      nextPost: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
    };
  }, [currentPostId]);

  const [commentForm, setCommentForm] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentForm(prev => ({
      ...prev,
      saveInfo: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission here
    console.log('Comment submitted:', commentForm);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 hover:text-indigo-700"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

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
              <button 
                onClick={() => navigate('/')}
                className="text-indigo-600"
              >
                Blog
              </button>
              <a href="#" className="text-gray-500 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="text-indigo-600 hover:text-indigo-700 mb-8 flex items-center"
        >
          ← Back to Blog
        </button>

        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm text-indigo-600 font-semibold">{post.category}</span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

        <div className="flex items-center mb-8">
          <img
            src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
            alt={post.author}
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-medium text-gray-900">{post.author}</p>
            <p className="text-gray-500">Educational Technology Specialist</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          
          {/* Sample content - in a real app, this would come from the API */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Evolution of Educational Technology</h2>
          <p className="text-gray-600 mb-6">
            The landscape of educational technology has undergone significant transformation in recent years.
            With the advent of artificial intelligence, machine learning, and advanced analytics, we're seeing
            unprecedented opportunities for personalized learning experiences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Trends Shaping the Future</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li className="mb-2">Artificial Intelligence in Education</li>
            <li className="mb-2">Personalized Learning Paths</li>
            <li className="mb-2">Virtual and Augmented Reality</li>
            <li className="mb-2">Gamification of Learning</li>
          </ul>

          <p className="text-gray-600 mb-6">
            These innovations are not just changing how we teach and learn; they're revolutionizing
            the entire educational ecosystem. From K-12 to higher education and professional development,
            technology is breaking down barriers and creating new possibilities.
          </p>
        </div>

        {/* Post Navigation */}
        <div className="border-t border-gray-200 my-8 pt-8">
          <div className="flex justify-between text-sm">
            {previousPost ? (
              <div>
                <p className="text-gray-500">Previous:</p>
                <Link 
                  to={`/post/${previousPost.id}`}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {previousPost.title}
                </Link>
              </div>
            ) : (
              <div></div>
            )}
            {nextPost ? (
              <div className="text-right">
                <p className="text-gray-500">Next:</p>
                <Link 
                  to={`/post/${nextPost.id}`}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {nextPost.title}
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Leave a Reply</h3>
          <p className="text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                Comment *
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                required
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={commentForm.comment}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={commentForm.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={commentForm.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={commentForm.website}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                checked={commentForm.saveInfo}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="saveInfo" className="ml-2 text-sm text-gray-600">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Social Sharing */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500">
                <Heart className="h-6 w-6" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                <Share2 className="h-6 w-6" />
                <span>Share</span>
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#1DA1F2]">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4267B2]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0077B5]">
                <LinkedIn className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter */}
      <div className="bg-indigo-600 py-16">
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
                <li><button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">Blog</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
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

export default BlogPost;