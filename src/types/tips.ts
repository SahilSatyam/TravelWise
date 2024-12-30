export type VacationType = 'leisure' | 'adventure' | 'cultural' | 'urban' | 'mixed';

export interface TravelTip {
  id: string;
  type: 'weather' | 'season' | 'climate' | 'budget' | 'culture';
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  climate: string;
  bestFor: VacationType[];
  averageTemperature: {
    min: number;
    max: number;
  };
}