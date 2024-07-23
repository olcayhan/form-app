import ShortText from "@/components/widgets/shortText";
import { WidgetType } from "./types/widgetType";
import LongText from "@/components/widgets/longText";
import MultipleChoice from "@/components/widgets/multipleChoice";

export type formType = {
  id: string;
  title: string;
  description: string;
  widgets: WidgetType[];
};

export const forms: formType[] = [
  {
    id: "1",
    title: "Form 1",
    description: "This is the first form",
    widgets: [
      {
        id: 7899663,
        name: "Short Text",
        type: ShortText,
        data: {
          header: "Kısa Yazı",
          subheader: "bu bir kısa yazı",
        },
      },
      {
        id: 2374541,
        name: "Long Text",
        type: LongText,
        data: {
          header: "",
          subheader: "",
        },
      },
      {
        id: 2153463,
        name: "Multiple Choice",
        type: MultipleChoice,
        data: {
          header: "",
          choices: ["Choice 1", "Choice 2", "Choice 3"],
        },
      },
    ],
  },
  {
    id: "2",
    title: "Form 2",
    description: "This is the second form",
    widgets: [],
  },
];
