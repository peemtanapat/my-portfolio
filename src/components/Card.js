import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <VStack spacing={4}>
    <Box backgroundColor="white" borderRadius="lg">
      <Image src={imageSrc} borderTopRadius="lg" borderBottomRadius="lg" />
      <Heading size="md" margin="3" color="black">{title}</Heading>
      <Text marginLeft="3" marginRight="3" color="black" fontWeight="light">{description}</Text>
      <a href="" target="_blank">
        <HStack margin="3">
          <Text fontWeight="medium" color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
        </HStack>
      </a>
    </Box>
  </VStack>;
};

export default Card;
