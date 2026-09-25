export const demoUser = {
  id: 'u1',
  name: 'Rahul Sharma',
  email: 'rahul.s@college.edu',
  avatar: 'https://i.pravatar.cc/150?img=11',
  university: 'National Institute of Technology',
  major: 'Computer Science',
  year: '3rd Year',
  interests: ['Coding', 'AI', 'Robotics'],
  achievements: [
    { id: 'a1', title: 'First Place - Hackathon', icon: 'trophy' },
    { id: 'a2', title: 'Top Contributor', icon: 'star' }
  ]
};

export const demoEvents = [
  {
    id: 'e1',
    title: 'TechNova 2026',
    description: 'The biggest technical symposium of the year featuring hackathons, coding contests, and guest lectures.',
    date: '2026-10-15T09:00:00.000Z',
    location: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
    organizer: 'Tech Club',
    participants: 1250,
    tags: ['Tech', 'Hackathon'],
    registered: false,
  },
  {
    id: 'e2',
    title: 'Campus Cultural Fest',
    description: 'Annual cultural festival with music, dance, and art exhibitions.',
    date: '2026-11-05T18:00:00.000Z',
    location: 'Open Air Theatre',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80',
    organizer: 'Cultural Council',
    participants: 3000,
    tags: ['Culture', 'Music'],
    registered: true,
  },
  {
    id: 'e3',
    title: 'AI & Robotics Expo',
    description: 'Showcasing the latest student projects in AI and Robotics.',
    date: '2026-09-28T10:00:00.000Z',
    location: 'Exhibition Hall',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80',
    organizer: 'AI & Robotics Club',
    participants: 450,
    tags: ['AI', 'Robotics', 'Expo'],
    registered: false,
  },
];

export const demoClubs = [
  {
    id: 'c1',
    name: 'OWASP Student Chapter',
    description: 'Learn cybersecurity, ethical hacking, and secure coding.',
    members: 150,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80',
    tags: ['Cybersecurity', 'Tech'],
    joined: false,
  },
  {
    id: 'c2',
    name: 'Photography Club',
    description: 'Capture moments and learn professional photography.',
    members: 200,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
    tags: ['Art', 'Photography'],
    joined: true,
  },
  {
    id: 'c3',
    name: 'Entrepreneurship Cell',
    description: 'Build startups, network with founders, and pitch ideas.',
    members: 320,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=500&q=80',
    tags: ['Business', 'Startup'],
    joined: false,
  }
];

export const demoFeed = [
  {
    id: 'f1',
    author: { name: 'Tech Club', avatar: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&q=80' },
    content: 'Registration for TechNova 2026 is now open! Early bird discounts available.',
    timestamp: '2 hours ago',
    likes: 145,
    comments: 23
  },
  {
    id: 'f2',
    author: { name: 'Rahul Sharma', avatar: 'https://i.pravatar.cc/150?img=11' },
    content: 'Just deployed my first full-stack app! Thanks to everyone who helped at the weekend hackathon.',
    timestamp: '5 hours ago',
    likes: 89,
    comments: 12
  },
  {
    id: 'f3',
    author: { name: 'Photography Club', avatar: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=80' },
    content: 'Join us for the campus photo walk this Sunday at 6 AM. Don\'t forget your cameras!',
    timestamp: '1 day ago',
    likes: 210,
    comments: 45
  }
];
