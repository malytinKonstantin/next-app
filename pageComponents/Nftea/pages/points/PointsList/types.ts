import { Point } from '../types';

export interface PointsListProps {
  items: Point[];
  setItems: (items: Point[]) => void;
}
