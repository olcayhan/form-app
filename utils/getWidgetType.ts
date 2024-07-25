import FullNameText from "@/components/widgets/fullnameText";
import HeaderText from "@/components/widgets/headerText";
import ImageBox from "@/components/widgets/imageBox";
import LongText from "@/components/widgets/longText";
import MultipleChoice from "@/components/widgets/multipleChoice";
import ShortText from "@/components/widgets/shortText";
import SingleChoice from "@/components/widgets/singleChoice";

const getWidgetType = (name: string) => {
  switch (name) {
    case "ShortText":
      return ShortText;
    case "LongText":
      return LongText;
    case "MultipleChoice":
      return MultipleChoice;
    case "HeaderText":
      return HeaderText;
    case "FullName":
      return FullNameText;
    case "SingleChoice":
      return SingleChoice;
    case "Header":
      return HeaderText;
    case "Image":
      return ImageBox;
    default:
      return null;
  }
};

export default getWidgetType;
