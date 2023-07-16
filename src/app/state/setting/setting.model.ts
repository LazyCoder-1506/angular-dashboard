export interface Setting {
  layout: 'row' | 'column';
  cardSize: 'small' | 'large';
  chartSize: 'small' | 'large';
  sectionOrder: string[];
  cardOrder: string[];
  chartOrder: string[];
}