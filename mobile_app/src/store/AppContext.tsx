import React, { createContext, useContext, useState, ReactNode } from 'react';
import { demoUser, demoEvents, demoClubs, demoFeed, demoAnnouncements, demoAchievements, demoRecentActivity } from '../data/demoData';

interface AppContextType {
  user: typeof demoUser;
  events: typeof demoEvents;
  clubs: typeof demoClubs;
  feed: typeof demoFeed;
  announcements: typeof demoAnnouncements;
  achievements: typeof demoAchievements;
  recentActivity: typeof demoRecentActivity;
  registerForEvent: (eventId: string) => void;
  joinClub: (clubId: string) => void;
  updateInterests: (interests: string[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(demoUser);
  const [events, setEvents] = useState(demoEvents);
  const [clubs, setClubs] = useState(demoClubs);
  const [feed, setFeed] = useState(demoFeed);
  const [announcements, setAnnouncements] = useState(demoAnnouncements);
  const [achievements, setAchievements] = useState(demoAchievements);
  const [recentActivity, setRecentActivity] = useState(demoRecentActivity);

  const registerForEvent = (eventId: string) => {
    if (!user.registeredEvents.includes(eventId)) {
      setUser(prev => ({
        ...prev,
        registeredEvents: [...prev.registeredEvents, eventId],
        stats: { ...prev.stats, eventsAttended: prev.stats.eventsAttended + 1 }
      }));
      
      const event = events.find(e => e.id === eventId);
      if (event) {
        setRecentActivity(prev => [
          { id: Math.random().toString(), text: `Registered for ${event.title}`, time: 'Just now', icon: 'calendar-outline' },
          ...prev
        ]);
        
        // Update local event attendee count
        setEvents(prev => prev.map(e => e.id === eventId ? { ...e, attendees: e.attendees + 1 } : e));
      }
    }
  };

  const joinClub = (clubId: string) => {
    if (!user.joinedClubs.includes(clubId)) {
      setUser(prev => ({
        ...prev,
        joinedClubs: [...prev.joinedClubs, clubId],
        stats: { ...prev.stats, clubsJoined: prev.stats.clubsJoined + 1 }
      }));
      
      const club = clubs.find(c => c.id === clubId);
      if (club) {
        setRecentActivity(prev => [
          { id: Math.random().toString(), text: `Joined ${club.name}`, time: 'Just now', icon: 'people-outline' },
          ...prev
        ]);
        
        // Update club members count
        setClubs(prev => prev.map(c => c.id === clubId ? { ...c, members: c.members + 1 } : c));
      }
    }
  };
  
  const updateInterests = (interests: string[]) => {
    setUser(prev => ({ ...prev, interests }));
  };

  return (
    <AppContext.Provider value={{ 
      user, events, clubs, feed, announcements, achievements, recentActivity,
      registerForEvent, joinClub, updateInterests 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
