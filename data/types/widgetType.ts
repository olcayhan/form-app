export type formType = {
  id: number;
  title: string;
  widgets: WidgetType[];
};

export type WidgetType = {
  id: number;
  name: string;
  data: widgetDataType;
};

export type widgetDataType = {
  header?: string;
  subheader?: string;
  subheader2?: string;
  choices?: string[];
  image?: string;
};
