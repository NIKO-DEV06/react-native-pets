import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import { rescheduleSvg } from "../helpers/svgs";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

interface Orders {
  name: string;
  work: string;
  item: string;
  amount: string;
  img: ImageSourcePropType;
}

const OrderItem = ({ name, work, item, amount, img }: Orders) => {
  return (
    <StyledView className="flex flex-row justify-between mt-5 items-center">
      <StyledImage source={img} />
      <StyledView className="">
        <StyledText className="text-[15px] tracking-wider font-semibold">
          {name}
        </StyledText>
        <StyledText className="text-[15px] tracking-wider">{work}</StyledText>
        <StyledText className="text-[#00000080] text-[15px]">{item}</StyledText>
        <StyledText className="text-[#00000080] text-[15px]">
          {amount}
        </StyledText>
      </StyledView>
      <SvgXml xml={rescheduleSvg} width={26} height={26} />
    </StyledView>
  );
};

export default OrderItem;
