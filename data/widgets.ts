import ShortText from "@/components/widgets/shortText";
import { WidgetType } from "./types/widgetType";
import LongText from "@/components/widgets/longText";
import SingleChoice from "@/components/widgets/singleChoice";
import MultipleChoice from "@/components/widgets/multipleChoice";
import ImageBox from "@/components/widgets/imageBox";
import HeaderText from "@/components/widgets/headerText";
import FullNameText from "@/components/widgets/fullnameText";

export const widgetButtons: WidgetType[] = [
  {
    id: 1,
    name: "Short Text",
    type: ShortText,
    data: {
      header: "",
      subheader: "",
    },
  },
  {
    id: 2,
    name: "Long Text",
    type: LongText,
    data: {
      header: "",
      subheader: "",
    },
  },
  {
    id: 3,
    name: "Single Choice",
    type: SingleChoice,
    data: {
      header: "",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
    },
  },
  {
    id: 4,
    name: "Multiple Choice",
    type: MultipleChoice,
    data: {
      header: "",
      choices: ["Choice 1", "Choice 2", "Choice 3"],
    },
  },
  {
    id: 5,
    name: "Image",
    type: ImageBox,
    data: null,
  },
  {
    id: 6,
    name: "Header",
    type: HeaderText,
    data: {
      header: "",
      subheader: "",
    },
  },
  {
    id: 7,
    name: "Full Name",
    type: FullNameText,
    data: {
      header: "Full Name",
      subheader1: "First Name",
      subheader2: "Last Name",
    },
  },
];
