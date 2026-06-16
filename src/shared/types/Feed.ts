export type Feed = {
  id: number;
  image: string;
  today: { label: string; likes: number; comments: number };
  posted: { date: string; likes: number; comments: number };
  type: string;
  uploadDate: string;
};
