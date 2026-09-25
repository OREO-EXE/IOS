import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../store/AppContext';

export default function CalendarScreen() {
  const navigation = useNavigation<any>();
  const { events } = useAppContext();
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('CALENDAR'); // CALENDAR, UPCOMING

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const hasEventOnDate = (d: number) => {
    const dateStr = new Date(year, month, d).toDateString();
    return events.some(e => new Date(e.date).toDateString() === dateStr);
  };

  const selectedDateEvents = events.filter(e => new Date(e.date).toDateString() === selectedDate.toDateString());
  
  const upcomingEvents = [...events].filter(e => new Date(e.date) >= new Date(new Date().setHours(0,0,0,0))).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const renderEventCard = (event: any) => (
    <TouchableOpacity 
      key={event.id} 
      style={styles.eventCard}
      onPress={() => navigation.navigate('EventDetails', { event })}
    >
      <View style={styles.eventTimeline}>
        <Text style={styles.timelineTime}>{event.time.split('-')[0].trim()}</Text>
        <View style={styles.timelineDot} />
        <View style={styles.timelineLine} />
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventCategory}>{event.category}</Text>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <View style={styles.eventMeta}>
          <Ionicons name="location-outline" size={14} color="#8F92A1" />
          <Text style={styles.eventMetaText}>{event.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Smart Calendar</Text>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'CALENDAR' && styles.activeTab]}
          onPress={() => setActiveTab('CALENDAR')}
        >
          <Text style={[styles.tabText, activeTab === 'CALENDAR' && styles.activeTabText]}>CALENDAR</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'UPCOMING' && styles.activeTab]}
          onPress={() => setActiveTab('UPCOMING')}
        >
          <Text style={[styles.tabText, activeTab === 'UPCOMING' && styles.activeTabText]}>UPCOMING</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {activeTab === 'CALENDAR' ? (
          <>
            <View style={styles.calendarCard}>
              <View style={styles.calendarHeader}>
                <TouchableOpacity onPress={prevMonth} style={styles.navBtn}>
                  <Ionicons name="chevron-back" size={24} color="#F5F6FA" />
                </TouchableOpacity>
                <Text style={styles.monthText}>{monthNames[month]} {year}</Text>
                <TouchableOpacity onPress={nextMonth} style={styles.navBtn}>
                  <Ionicons name="chevron-forward" size={24} color="#F5F6FA" />
                </TouchableOpacity>
              </View>
              
              <View style={styles.weekDays}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <Text key={i} style={styles.weekDayText}>{day}</Text>
                ))}
              </View>
              
              <View style={styles.daysGrid}>
                {Array.from({ length: firstDay }).map((_, i) => <View key={`empty-${i}`} style={styles.dayCell} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const d = i + 1;
                  const isSelected = selectedDate.getDate() === d && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
                  const isToday = new Date().getDate() === d && new Date().getMonth() === month && new Date().getFullYear() === year;
                  const hasEvent = hasEventOnDate(d);
                  
                  return (
                    <TouchableOpacity 
                      key={d} 
                      style={[styles.dayCell, isSelected && styles.selectedDayCell, isToday && !isSelected && styles.todayCell]}
                      onPress={() => setSelectedDate(new Date(year, month, d))}
                    >
                      <Text style={[styles.dayText, isSelected && styles.selectedDayText, isToday && !isSelected && styles.todayText]}>{d}</Text>
                      {hasEvent && <View style={[styles.eventDot, isSelected && styles.selectedEventDot]} />}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={styles.scheduleHeader}>
              <Text style={styles.scheduleTitle}>Events on {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}</Text>
            </View>

            {selectedDateEvents.length > 0 ? (
              selectedDateEvents.map(renderEventCard)
            ) : (
              <View style={styles.emptyState}>
                <Ionicons name="calendar-outline" size={48} color="#2D303E" />
                <Text style={styles.emptyText}>No events scheduled on this date.</Text>
              </View>
            )}
          </>
        ) : (
          <View>
            {upcomingEvents.map(event => (
              <View key={event.id}>
                <Text style={styles.upcomingDateHeader}>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</Text>
                {renderEventCard(event)}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 16 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA' },
  
  tabsContainer: { flexDirection: 'row', marginHorizontal: 20, backgroundColor: '#1E2029', borderRadius: 12, padding: 4, marginBottom: 20, borderWidth: 1, borderColor: '#2D303E' },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  activeTab: { backgroundColor: '#2D303E' },
  tabText: { color: '#8F92A1', fontSize: 13, fontWeight: 'bold' },
  activeTabText: { color: '#F5F6FA' },
  
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  
  calendarCard: { backgroundColor: '#1E2029', borderRadius: 20, padding: 20, marginBottom: 24, borderWidth: 1, borderColor: '#2D303E' },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  navBtn: { padding: 4 },
  monthText: { color: '#F5F6FA', fontSize: 18, fontWeight: 'bold' },
  
  weekDays: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  weekDayText: { color: '#8F92A1', fontSize: 12, fontWeight: 'bold', width: 32, textAlign: 'center' },
  
  daysGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  dayCell: { width: `${100/7}%`, height: 48, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  dayText: { color: '#F5F6FA', fontSize: 16 },
  selectedDayCell: { backgroundColor: '#8B7CFF', borderRadius: 24 },
  selectedDayText: { color: '#FFFFFF', fontWeight: 'bold' },
  todayCell: { borderWidth: 1, borderColor: '#8B7CFF', borderRadius: 24 },
  todayText: { color: '#8B7CFF', fontWeight: 'bold' },
  eventDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#00B894', marginTop: 2 },
  selectedEventDot: { backgroundColor: '#FFFFFF' },
  
  scheduleHeader: { marginBottom: 16 },
  scheduleTitle: { color: '#F5F6FA', fontSize: 18, fontWeight: 'bold' },
  
  eventCard: { flexDirection: 'row', marginBottom: 16 },
  eventTimeline: { width: 60, alignItems: 'center', marginRight: 12 },
  timelineTime: { color: '#8F92A1', fontSize: 12, fontWeight: '600', marginBottom: 8 },
  timelineDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#3DD9F5', zIndex: 1 },
  timelineLine: { width: 2, flex: 1, backgroundColor: '#2D303E', marginTop: -2 },
  
  eventContent: { flex: 1, backgroundColor: '#1E2029', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: '#2D303E' },
  eventCategory: { color: '#8B7CFF', fontSize: 12, fontWeight: 'bold', marginBottom: 6 },
  eventTitle: { color: '#F5F6FA', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  eventMeta: { flexDirection: 'row', alignItems: 'center' },
  eventMetaText: { color: '#8F92A1', fontSize: 12, marginLeft: 6 },
  
  emptyState: { alignItems: 'center', marginTop: 40, padding: 20 },
  emptyText: { color: '#8F92A1', fontSize: 14, marginTop: 12 },
  
  upcomingDateHeader: { color: '#FDCB6E', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 12, marginTop: 8 }
});
