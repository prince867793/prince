-- Create contact_messages table
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table (optional - for dynamic project management)
CREATE TABLE projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  features TEXT[] NOT NULL,
  github TEXT,
  demo TEXT,
  image TEXT,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_posts table (optional - for future blog section)
CREATE TABLE blog_posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  published BOOLEAN DEFAULT FALSE,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_messages (allow inserts from anyone)
CREATE POLICY "Allow contact form submissions" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create policies for projects (public read access)
CREATE POLICY "Allow public read access to projects" ON projects
  FOR SELECT USING (true);

-- Create policies for blog_posts (public read access for published posts)
CREATE POLICY "Allow public read access to published blog posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Insert sample projects (optional)
INSERT INTO projects (title, description, technologies, features, github, demo, category) VALUES
(
  'OKPUJA – Puja & Astrology Booking Platform',
  'A comprehensive platform for booking religious ceremonies and astrology consultations with real-time scheduling and payment integration.',
  ARRAY['Next.js', 'PostgreSQL', 'AWS', 'Docker', 'SSL', 'CI/CD'],
  ARRAY[
    'Deployed application on AWS EC2 with Docker containerization',
    'Integrated SSL certificates and automated CI/CD pipelines',
    'Implemented scalable booking and authentication systems with monitoring',
    'Real-time notifications and payment processing'
  ],
  'https://github.com/princekumar205086/okpuja',
  'https://okpuja.com',
  'Full Stack'
),
(
  'Healthcare E-Commerce Platform',
  'A robust e-commerce solution for healthcare products with advanced inventory management and secure payment processing.',
  ARRAY['Django', 'AWS S3', 'PostgreSQL', 'CloudFront', 'REST APIs'],
  ARRAY[
    'Built comprehensive REST APIs with Django framework',
    'Deployed backend on AWS with auto-scaling capabilities',
    'Configured CloudFront + S3 for media delivery, improving speed by 30%',
    'Implemented secure payment gateway integration'
  ],
  'https://github.com/princekumar205086/healthcare-ecommerce',
  'https://healthcare-demo.vercel.app',
  'Backend'
),
(
  'PTPI – Tutor Recruitment Platform',
  'A platform connecting qualified tutors with students, featuring advanced matching algorithms and comprehensive management tools.',
  ARRAY['Django', 'React.js', 'DigitalOcean', 'PostgreSQL', 'Redis'],
  ARRAY[
    'Managed end-to-end deployment and security configurations on cloud',
    'Automated database backups and optimized DB performance',
    'Implemented tutor-student matching algorithm',
    'Real-time chat and video calling integration'
  ],
  'https://github.com/princekumar205086/ptpi',
  'https://ptpi-demo.vercel.app',
  'Full Stack'
);