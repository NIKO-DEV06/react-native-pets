import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import { backSvg } from "../helpers/svgs";
import i1 from "../assets/Rectangle1.png";
import i2 from "../assets/Rectangle2.png";
import i3 from "../assets/Rectangle3.png";
import i4 from "../assets/Rectangle4.png";
import i5 from "../assets/Rectangle5.png";
import i6 from "../assets/Rectangle6.png";
import OrderItem from "./OrderItem";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const ordersData = [
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: i2,
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: i3,
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: i4,
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: i5,
  },
  {
    name: "Angel R.",
    work: "Furniture Assembly",
    item: "TV Mounting Apr 24   12:30 pm",
    amount: "$44.39/hr",
    img: i6,
  },
];

const FinishedOrdersPage = () => {
  return (
    <ScrollView>
      <StyledView className="mx-[28]">
        <TouchableOpacity className="px-[21] py-[17] rounded-lg border-[1px] border-gray-200 mt-[10] flex items-center w-[15] bg-[#F2F2F2]">
          <SvgXml xml={backSvg} width={18} height={18} />
        </TouchableOpacity>
        <StyledText className="text-[30px] mt-[10] mb-[20] font-bold">
          Finished orders
        </StyledText>
        <StyledView className="border-[1px] border-[#D9D9D9] flex justify-center pt-[40] pb-[30] rounded-2xl">
          <StyledImage source={i1} className="flex mx-auto" />
          <StyledView className="flex flex-col pt-[20] gap-1 ml-[33]">
            <StyledText className="text-[18px] tracking-wider font-semibold ml-[33]">
              Angel R.
            </StyledText>
            <StyledText className="text-[17px] text-[#00000080]  ml-[33]">
              TV Mounting 2:00 pm
            </StyledText>
            <StyledView className="flex flex-row mx-[33] justify-between">
              <StyledText className="font-semibold text-[17px] text-[#00000080]">
                $80.73/hr
              </StyledText>
              <StyledText className="text-[#00000080] text-[17px]">
                1:14:59
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="flex flex-row gap-2 justify-center mx-[33] pt-[18]">
            <TouchableOpacity className="bg-[#D9D9D9] rounded-xl">
              <StyledText className=" px-[30] py-[10] text-[17px]">
                Report issue
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#58C0DB] rounded-xl">
              <StyledText className="text-white px-[50] py-[10] text-[17px]">
                Done
              </StyledText>
            </TouchableOpacity>
          </StyledView>
        </StyledView>

        {ordersData.map((order) => (
          <OrderItem
            name={order.name}
            work={order.work}
            item={order.item}
            amount={order.amount}
            img={order.img}
          />
        ))}
      </StyledView>
    </ScrollView>
  );
};

export default FinishedOrdersPage;
