export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "EdTech Trends",
  "Online Learning Tips",
  "Career Growth",
  "Student Success Stories",
  "Financial Literacy"
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of EdTech: Trends to Watch in 2025",
    excerpt: "Discover the emerging technologies and methodologies that will shape education in the coming years.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "EdTech Trends",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800",
    featured: true
  },
  {
    id: 2,
    title: "How AI is Transforming Online Learning",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we learn and teach online.",
    author: "Michael Chen",
    date: "March 14, 2024",
    category: "EdTech Trends",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
    featured: true
  },
  {
    id: 3,
    title: "Top 5 Free Resources to Learn Financial Literacy",
    excerpt: "Essential resources for students to build strong financial foundations.",
    author: "Emily Rodriguez",
    date: "March 13, 2024",
    category: "Financial Literacy",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800",
    featured: true
  },
  {
    id: 4,
    title: "Mastering Time Management in Online Learning",
    excerpt: "Effective strategies for balancing studies with other commitments.",
    author: "David Kim",
    date: "March 12, 2024",
    category: "Online Learning Tips",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
  },
  {
    id: 5,
    title: "From Bootcamp to Tech Lead: A Success Story",
    excerpt: "How one student transformed their career through online education.",
    author: "Jessica Patel",
    date: "March 11, 2024",
    category: "Student Success Stories",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
  },
  {
    id: 6,
    title: "Essential Soft Skills for Remote Work Success",
    excerpt: "Developing the interpersonal skills needed in the digital workplace.",
    author: "Thomas Anderson",
    date: "March 10, 2024",
    category: "Career Growth",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800"
  },
  {
    id: 7,
    title: "Understanding Cryptocurrency: A Beginner's Guide",
    excerpt: "Navigate the basics of digital currencies and blockchain technology.",
    author: "Alex Morgan",
    date: "March 9, 2024",
    category: "Financial Literacy",
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800"
  },
  {
    id: 8,
    title: "The Power of Project-Based Learning",
    excerpt: "How hands-on projects enhance understanding and retention.",
    author: "Maria Garcia",
    date: "March 8, 2024",
    category: "EdTech Trends",
    imageUrl: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800"
  },
  {
    id: 9,
    title: "Building a Professional Network Online",
    excerpt: "Strategies for meaningful connections in the digital age.",
    author: "James Wilson",
    date: "March 7, 2024",
    category: "Career Growth",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800"
  },
  {
    id: 10,
    title: "The Impact of VR in Education",
    excerpt: "How virtual reality is creating immersive learning experiences.",
    author: "Sarah Johnson",
    date: "March 6, 2024",
    category: "EdTech Trends",
    imageUrl: "https://images.unsplash.com/photo-1592478811341-4d9c69339e07?auto=format&fit=crop&w=800"
  },
  {
    id: 11,
    title: "Smart Budgeting for College Students",
    excerpt: "Practical financial tips for managing student life.",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    category: "Financial Literacy",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
  },
  {
    id: 12,
    title: "Effective Note-Taking in Online Classes",
    excerpt: "Digital tools and techniques for better organization.",
    author: "Michael Chen",
    date: "March 4, 2024",
    category: "Online Learning Tips",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800"
  },
  {
    id: 13,
    title: "From Teacher to Tech Entrepreneur",
    excerpt: "One educator's journey in revolutionizing online learning.",
    author: "Rachel Foster",
    date: "March 3, 2024",
    category: "Student Success Stories",
    imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800"
  },
  {
    id: 14,
    title: "The Rise of Micro-Credentials",
    excerpt: "How short-form certifications are changing education.",
    author: "David Kim",
    date: "March 2, 2024",
    category: "EdTech Trends",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
  },
  {
    id: 15,
    title: "Mastering Remote Job Interviews",
    excerpt: "Tips for standing out in virtual hiring processes.",
    author: "Jessica Patel",
    date: "March 1, 2024",
    category: "Career Growth",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800"
  }
];