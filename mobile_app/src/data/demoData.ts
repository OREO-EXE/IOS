export const demoUser = {
  id: 'u1',
  name: 'Alex Johnson',
  email: 'alex.j@campusuniversity.edu',
  university: 'Campus University',
  major: 'Computer Science',
  avatar: 'https://i.pravatar.cc/150?u=alex',
  stats: {
    eventsAttended: 12,
    clubsJoined: 5,
    badgesEarned: 3,
    engagementScore: 82,
  },
  joinedClubs: ['c1', 'c3'],
  registeredEvents: ['e1'],
  interests: ['Computer Science', 'AI & Robotics', 'Gaming']
};

export const demoEvents = [
  {
    id: 'e1',
    title: 'Cybersecurity Workshop',
    description: 'Learn the fundamentals of ethical hacking, network security, and cryptography. We will cover real-world attack vectors and defense mechanisms. Bring your laptops!',
    date: new Date().toISOString(), // Today
    location: 'Innovation Lab',
    time: '2:00 PM - 4:00 PM',
    category: 'Technology',
    attendees: 128,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    organizer: 'OWASP Student Chapter',
    highlights: ['Live Hacking Demo', 'Certificate of Participation', 'Networking']
  },
  {
    id: 'e2',
    title: 'AI & Robotics Expo',
    description: 'Explore the latest student projects in Artificial Intelligence and Robotics. From autonomous drones to natural language processing models.',
    date: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    location: 'Main Auditorium',
    time: '10:00 AM - 4:00 PM',
    category: 'Technology',
    attendees: 342,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    organizer: 'AI & Robotics Club',
    highlights: ['Robot Wars', 'Keynote by Industry Expert', 'Project Showcase']
  },
  {
    id: 'e3',
    title: 'Cultural Fest 2026',
    description: 'The biggest cultural extravaganza of the year! Music, dance, drama, and food stalls from all over the country.',
    date: new Date(Date.now() + 86400000 * 2).toISOString(),
    location: 'University Grounds',
    time: '5:00 PM - 11:00 PM',
    category: 'Cultural',
    attendees: 1250,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    organizer: 'Student Council',
    highlights: ['Live Concert', 'Food Trucks', 'Art Exhibition']
  },
  {
    id: 'e4',
    title: 'Developer Community Meetup',
    description: 'Monthly meetup for developers. Talk about web development, app development, and open source contribution.',
    date: new Date(Date.now() + 86400000 * 3).toISOString(),
    location: 'Block A, Room 302',
    time: '5:30 PM - 7:30 PM',
    category: 'Technology',
    attendees: 85,
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
    organizer: 'Developer Community',
    highlights: ['Tech Talks', 'Pizza', 'Networking']
  },
  {
    id: 'e5',
    title: 'Inter-College Basketball Finals',
    description: 'Cheer for our university team as they face off against rival colleges in the grand finale.',
    date: new Date(Date.now() + 86400000 * 5).toISOString(),
    location: 'Indoor Stadium',
    time: '4:00 PM - 7:00 PM',
    category: 'Sports',
    attendees: 420,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    organizer: 'Sports Board',
    highlights: ['Live Commentary', 'Half-time Show']
  },
  {
    id: 'e6',
    title: 'Startup Pitch Deck Workshop',
    description: 'Learn how to craft a compelling pitch deck for your startup idea and attract investors.',
    date: new Date(Date.now() + 86400000 * 6).toISOString(),
    location: 'Incubation Center',
    time: '3:00 PM - 5:00 PM',
    category: 'Innovation',
    attendees: 64,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    organizer: 'Entrepreneurship Cell',
    highlights: ['Investor Insights', 'Mock Pitches']
  },
  {
    id: 'e7',
    title: 'Campus Photography Walk',
    description: 'Join us for a golden hour photography walk around the historic parts of our campus.',
    date: new Date(Date.now() + 86400000 * 7).toISOString(),
    location: 'Main Gate',
    time: '5:00 PM - 7:00 PM',
    category: 'Arts',
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    organizer: 'Photography Club',
    highlights: ['Composition Tips', 'Group Photo']
  },
  {
    id: 'e8',
    title: 'Local Hack Day',
    description: 'A 12-hour mini-hackathon to build fun projects, learn new skills, and hang out with friends.',
    date: new Date(Date.now() + 86400000 * 10).toISOString(),
    location: 'Library Basement',
    time: '9:00 AM - 9:00 PM',
    category: 'Hackathons',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    organizer: 'Tech Society',
    highlights: ['Free Swag', 'Mentorship', 'Mini-challenges']
  },
  {
    id: 'e9',
    title: 'Mental Health Awareness Seminar',
    description: 'An open discussion on student mental health, coping strategies, and available campus resources.',
    date: new Date(Date.now() - 86400000 * 2).toISOString(), // Past
    location: 'Seminar Hall 2',
    time: '2:00 PM - 4:00 PM',
    category: 'Community',
    attendees: 210,
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
    organizer: 'Wellness Center',
    highlights: ['Guest Speaker', 'Q&A Session']
  },
  {
    id: 'e10',
    title: 'Guitar Basics Workshop',
    description: 'Always wanted to play the guitar? Join our beginner-friendly workshop and learn your first chords!',
    date: new Date(Date.now() + 86400000 * 12).toISOString(),
    location: 'Music Room',
    time: '4:30 PM - 6:00 PM',
    category: 'Arts',
    attendees: 30,
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
    organizer: 'Music Society',
    highlights: ['Acoustic Guitars Provided', 'Jam Session']
  }
];

export const demoClubs = [
  {
    id: 'c1',
    name: 'OWASP Student Chapter',
    description: 'Dedicated to web application security and ethical hacking.',
    members: 542,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=200&q=80',
  },
  {
    id: 'c2',
    name: 'AI & Robotics Club',
    description: 'Building the future with machine learning and autonomous bots.',
    members: 318,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&q=80',
  },
  {
    id: 'c3',
    name: 'Developer Community',
    description: 'A space for coders, designers, and tech enthusiasts to collaborate.',
    members: 426,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&q=80',
  },
  {
    id: 'c4',
    name: 'Entrepreneurship Cell',
    description: 'Fostering innovation and supporting student startups.',
    members: 285,
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&q=80',
  },
  {
    id: 'c5',
    name: 'Photography Club',
    description: 'Capturing moments and exploring visual storytelling.',
    members: 174,
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80',
  },
  {
    id: 'c6',
    name: 'Debate Society',
    description: 'Discussing global issues and honing public speaking skills.',
    members: 112,
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=200&q=80',
  },
  {
    id: 'c7',
    name: 'Music Society',
    description: 'Bands, choirs, and solo artists coming together to create magic.',
    members: 240,
    category: 'Arts',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=200&q=80',
  },
  {
    id: 'c8',
    name: 'Varsity Athletics',
    description: 'Representing the university in track and field, basketball, and more.',
    members: 350,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&q=80',
  }
];

export const demoFeed = [
  {
    id: 'p1',
    author: {
      name: 'Campus Admin',
      avatar: 'https://i.pravatar.cc/150?u=admin',
      role: 'Staff'
    },
    content: '🎉 Library hours extended! We are now open 24/7 during the finals week starting this Monday. Coffee machines have been restocked!',
    timestamp: '2h ago',
    likes: 342,
    comments: 45,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80'
  },
  {
    id: 'p2',
    author: {
      name: 'Sarah Jenkins',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      role: 'Student'
    },
    content: 'Anyone lost a blue HydroFlask near the Innovation Lab? I left it at the reception desk.',
    timestamp: '4h ago',
    likes: 12,
    comments: 3,
  },
  {
    id: 'p3',
    author: {
      name: 'Developer Community',
      avatar: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=200&q=80',
      role: 'Club'
    },
    content: 'Huge shoutout to everyone who participated in our weekend hackathon! The projects were mind-blowing. Winners will be announced tonight! 🚀',
    timestamp: '5h ago',
    likes: 184,
    comments: 22,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
  },
  {
    id: 'p4',
    author: {
      name: 'Dr. Alan Turing',
      avatar: 'https://i.pravatar.cc/150?u=alan',
      role: 'Professor'
    },
    content: 'Reminder: CS301 mid-term project submissions are due this Friday at 11:59 PM. No late submissions will be accepted.',
    timestamp: '1d ago',
    likes: 56,
    comments: 18,
  },
  {
    id: 'p5',
    author: {
      name: 'Photography Club',
      avatar: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80',
      role: 'Club'
    },
    content: 'Photo of the week by @MikeRoss! The golden hour hits the main building perfectly. 🌅',
    timestamp: '2d ago',
    likes: 420,
    comments: 34,
    image: 'https://images.unsplash.com/photo-1607013407627-6ee814329547?w=800&q=80'
  }
];

export const demoAnnouncements = [
  {
    id: 'a1',
    title: 'Registration for Spring 2027 Opens Next Week',
    date: 'Sep 24, 2026'
  },
  {
    id: 'a2',
    title: 'Scheduled Maintenance: Student Portal Offline Sunday 2AM-4AM',
    date: 'Sep 23, 2026'
  },
  {
    id: 'a3',
    title: 'Flu Shots Available at the Wellness Center',
    date: 'Sep 20, 2026'
  }
];

export const demoAchievements = [
  { id: 'b1', name: 'Campus Explorer', icon: 'compass', color: '#3DD9F5', description: 'Attended events across 3 different categories' },
  { id: 'b2', name: 'Event Enthusiast', icon: 'star', color: '#FDCB6E', description: 'Attended 10+ events this semester' },
  { id: 'b3', name: 'Community Builder', icon: 'people', color: '#00B894', description: 'Joined 5+ clubs' },
];

export const demoRecentActivity = [
  { id: 'r1', text: 'Registered for Cybersecurity Workshop', time: '1h ago', icon: 'calendar-outline' },
  { id: 'r2', text: 'Joined OWASP Student Chapter', time: '3h ago', icon: 'people-outline' },
  { id: 'r3', text: 'Earned Campus Explorer badge', time: '1d ago', icon: 'trophy-outline' },
];
