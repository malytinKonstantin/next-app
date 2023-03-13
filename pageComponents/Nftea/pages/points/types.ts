export interface Point {
  id: string;
  coords: [number, number];
  name: string;
  address: string;
  phone?: string;
  opening?: boolean;
  workingHours?: string;
}
