import { WidgetType } from "./types/widgetType";

export const widgetButtons: WidgetType[] = [
  {
    id: 1,
    name: "ShortText",
    data: {
      header: "",
      subheader: "",
    },
  },
  {
    id: 2,
    name: "LongText",
    data: {
      header: "",
      subheader: "",
    },
  },
  {
    id: 3,
    name: "SingleChoice",
    data: {
      header: "",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
    },
  },
  {
    id: 4,
    name: "MultipleChoice",
    data: {
      header: "",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
    },
  },
  {
    id: 5,
    name: "Image",
    data: {},
  },
  {
    id: 6,
    name: "Header",
    data: {
      header: "",
      subheader: "",
    },
  },
  {
    id: 7,
    name: "FullName",
    data: {
      header: "Full Name",
      subheader: "First Name",
      subheader2: "Last Name",
    },
  },
];
