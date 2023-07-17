export interface Setting {
  layout: 'row' | 'column';
  cardSize: 'small' | 'large';
  chartType: 'donut' | 'column';
  sectionOrder: string[];
  cardOrder: string[];
  chartOrder: string[];
}