export interface Availability {
  id: number;
  week_day: string;
  from_time: string;
  to_time: string;
  mentor_id: number;
  created_at: string;
  updated_at: string | null;
}

export interface AvailabilitiesModalProps {
  name: string;
  id: number;
}
