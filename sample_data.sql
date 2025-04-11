-- Insert user info
INSERT INTO user_info (name, title, description, avatar_url, email, phone, location)
VALUES (
  'Your Name',
  'Full Stack Developer',
  'A passionate developer with expertise in web development and software engineering.',
  'https://example.com/avatar.jpg',
  'your.email@example.com',
  '+1234567890',
  'Hanoi, Vietnam'
);

-- Insert skill categories
INSERT INTO skill_categories (name, icon)
VALUES 
  ('Frontend Development', 'ri-code-s-slash-line'),
  ('Backend Development', 'ri-server-line'),
  ('DevOps & Tools', 'ri-tools-line');

-- Insert skills
INSERT INTO skills (category_id, name, level)
VALUES 
  (1, 'JavaScript', 90),
  (1, 'React', 85),
  (1, 'HTML/CSS', 95),
  (2, 'Node.js', 80),
  (2, 'Python', 75),
  (2, 'MongoDB', 85),
  (3, 'Docker', 70),
  (3, 'Git', 90),
  (3, 'AWS', 65);

-- Insert projects
INSERT INTO projects (title, type, description, thumbnail_url, technologies, github_url, demo_url)
VALUES 
  (
    'E-Commerce Platform',
    'Full Stack Application',
    'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    '["React", "Node.js", "MongoDB", "Stripe"]',
    'https://github.com',
    'https://demo.com'
  ),
  (
    'Task Management App',
    'Frontend Application',
    'A modern task management application with features like drag-and-drop task organization, categories, priority levels, and deadline notifications.',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    '["React", "Redux", "Tailwind CSS", "Firebase"]',
    'https://github.com',
    NULL
  );

-- Insert achievements
INSERT INTO achievements (title, organization, description, icon, icon_color, bg_color)
VALUES 
  (
    'Best Innovation Award',
    'TechConf 2023',
    'Received the Best Innovation Award for developing a groundbreaking AI-driven recommendation system that improved user engagement by 35%.',
    'ri-award-line',
    'text-primary-600 dark:text-primary-400',
    'bg-primary-100 dark:bg-primary-900/30'
  ),
  (
    'Open Source Contributor',
    'Major Framework Project',
    'Active contributor to a major open-source framework with over 10 accepted pull requests and recognition as a valuable community member.',
    'ri-medal-line',
    'text-secondary-600 dark:text-secondary-400',
    'bg-secondary-100 dark:bg-secondary-900/30'
  );

-- Insert experiences
INSERT INTO experiences (role, company, period, description, responsibilities, badge_color)
VALUES 
  (
    'Senior Full Stack Developer',
    'Tech Innovations Inc.',
    '2021 - Present',
    'Led a team of developers in building scalable web applications for enterprise clients. Implemented microservices architecture that improved system performance by 40%.',
    '["Developed and maintained multiple React-based frontend applications", "Designed RESTful APIs and GraphQL endpoints for various services", "Implemented CI/CD pipelines to improve development workflow", "Mentored junior developers and conducted code reviews"]',
    'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300'
  ),
  (
    'Frontend Developer',
    'Digital Solutions LLC',
    '2018 - 2021',
    'Worked on developing responsive user interfaces for various web applications. Collaborated with designers and backend developers to implement new features.',
    '["Built interactive UI components using React and Redux", "Optimized application performance and loading speeds", "Implemented responsive designs for mobile and desktop", "Integrated third-party APIs and services"]',
    'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300'
  ); 

  -- Insert user info
INSERT INTO user_info (name, title, description, avatar_url, email, phone, location)
VALUES (
  'Your Name',
  'Full Stack Developer',
  'A passionate developer with expertise in web development and software engineering.',
  'https://example.com/avatar.jpg',
  'your.email@example.com',
  '+1234567890',
  'Hanoi, Vietnam'
);

-- Insert skill categories
INSERT INTO skill_categories (name, icon)
VALUES 
  ('Frontend Development', 'ri-code-s-slash-line'),
  ('Backend Development', 'ri-server-line'),
  ('DevOps & Tools', 'ri-tools-line');

-- Insert skills
INSERT INTO skills (category_id, name, level)
VALUES 
  (1, 'JavaScript', 90),
  (1, 'React', 85),
  (1, 'HTML/CSS', 95),
  (2, 'Node.js', 80),
  (2, 'Python', 75),
  (2, 'MongoDB', 85),
  (3, 'Docker', 70),
  (3, 'Git', 90),
  (3, 'AWS', 65);

-- Insert projects
INSERT INTO projects (title, type, description, thumbnail_url, technologies, github_url, demo_url)
VALUES 
  (
    'E-Commerce Platform',
    'Full Stack Application',
    'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    '["React", "Node.js", "MongoDB", "Stripe"]',
    'https://github.com',
    'https://demo.com'
  ),
  (
    'Task Management App',
    'Frontend Application',
    'A modern task management application with features like drag-and-drop task organization, categories, priority levels, and deadline notifications.',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    '["React", "Redux", "Tailwind CSS", "Firebase"]',
    'https://github.com',
    NULL
  );

-- Insert achievements
INSERT INTO achievements (title, organization, description, icon, icon_color, bg_color)
VALUES 
  (
    'Best Innovation Award',
    'TechConf 2023',
    'Received the Best Innovation Award for developing a groundbreaking AI-driven recommendation system that improved user engagement by 35%.',
    'ri-award-line',
    'text-primary-600 dark:text-primary-400',
    'bg-primary-100 dark:bg-primary-900/30'
  ),
  (
    'Open Source Contributor',
    'Major Framework Project',
    'Active contributor to a major open-source framework with over 10 accepted pull requests and recognition as a valuable community member.',
    'ri-medal-line',
    'text-secondary-600 dark:text-secondary-400',
    'bg-secondary-100 dark:bg-secondary-900/30'
  );

-- Insert experiences
INSERT INTO experiences (role, company, period, description, responsibilities, badge_color)
VALUES 
  (
    'Senior Full Stack Developer',
    'Tech Innovations Inc.',
    '2021 - Present',
    'Led a team of developers in building scalable web applications for enterprise clients. Implemented microservices architecture that improved system performance by 40%.',
    '["Developed and maintained multiple React-based frontend applications", "Designed RESTful APIs and GraphQL endpoints for various services", "Implemented CI/CD pipelines to improve development workflow", "Mentored junior developers and conducted code reviews"]',
    'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300'
  ),
  (
    'Frontend Developer',
    'Digital Solutions LLC',
    '2018 - 2021',
    'Worked on developing responsive user interfaces for various web applications. Collaborated with designers and backend developers to implement new features.',
    '["Built interactive UI components using React and Redux", "Optimized application performance and loading speeds", "Implemented responsive designs for mobile and desktop", "Integrated third-party APIs and services"]',
    'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300'
  ); 
  UPDATE user_info 
SET 
  facebook = 'https://facebook.com/your-profile',
  twitter = 'https://twitter.com/your-profile',
  github = 'https://github.com/your-profile',
  linkedin = 'https://linkedin.com/in/your-profile',
  youtube = 'https://youtube.com/your-channel',
  zalo = 'https://zalo.me/your-number',
  discord = 'your-discord-username'
WHERE id = 1;