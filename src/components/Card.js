import { Box, Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return <VStack spacing={4}>
    <Box backgroundColor="white" borderRadius="md">
      <Image src={imageSrc} borderTopRadius="md" borderBottomRadius="md" />
      <Heading>{title}</Heading>
      <Text color="black">{description}</Text>
      <a href="" target="_blank">
        <HStack>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
        </HStack>
      </a>
      {/* <Box textAlign="left">
        <Button rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
          See More
        </Button>
      </Box> */}
    </Box>
  </VStack>;
};

export default Card;
