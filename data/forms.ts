import ShortText from "@/components/widgets/shortText";
import { WidgetType } from "./types/widgetType";
import LongText from "@/components/widgets/longText";
import MultipleChoice from "@/components/widgets/multipleChoice";
import HeaderText from "@/components/widgets/headerText";
import FullNameText from "@/components/widgets/fullnameText";
import SingleChoice from "@/components/widgets/singleChoice";

export type formType = {
  id: number;
  title: string;
  description?: string;
  widgets: WidgetType[];
};

export const forms: formType[] = [
  {
    id: 1,
    title: "Form 1",
    description: "This is the first form",
    widgets: [
      {
        id: 8287338,
        name: "Full Name",
        type: FullNameText,
        data: {
          header: "Full Name",
          subheader1: "First Name",
          subheader2: "Last Name",
        },
      },
      {
        id: 7899543,
        name: "LongText",
        type: LongText,
        data: {
          header: "Kısa Yazı",
          subheader: "bu bir kısa yazı",
        },
      },
      {
        id: 2153463,
        name: "Multiple Choice",
        type: MultipleChoice,
        data: {
          header: "This For Test",
          choices: ["Choice 1", "Choice 2", "Choice 3"],
        },
      },
    ],
  },
  {
    id: 2,
    title: "Form 2",
    description: "This is the second form",
    widgets: [],
  },
];
