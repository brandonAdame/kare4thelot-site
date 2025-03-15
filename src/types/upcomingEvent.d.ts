export interface UpcomingEvent {
  id: number;
  created_at: string;
  image: string;
  event_title: string;
  event_description: string;
  event_registration_link?: string;
  event_date: string;
  event_time: string;
  event_location: string;
  chip_label?: string;
}
