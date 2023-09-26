export interface LineProps {
  id: string;
  kind: string;
  mentee: Mentee;
  mentor: Mentor;
  slot: {
    end_time: string;
    start_time: string;
  };
  created_at: string;
  updated_at: string | null;
}

interface Mentee {
  id: number;
  first_name: string;
  last_name: string;
  company: string;
  email: string;
}

interface Mentor {
  first_name: string;
  last_name: string;
}
