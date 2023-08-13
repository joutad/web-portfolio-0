// pages/works/[id].js
import { Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Works } from '../../pages/works'; // Assuming you have some data source

const WorkPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the work item data based on the id
  const workItem = Works.find((item) => item.id === id);

  if (!workItem) {
    return <div>Work item not found.</div>;
  }

  return (
    <Box w="100%" textAlign="center">
      <Image src={workItem.thumbnail} alt={workItem.title} className="grid-item-thumbnail" />
      <Text mt={2} fontSize={20}>
        {workItem.title}
      </Text>
      <Text fontSize={14}>{workItem.description}</Text>
    </Box>
  );
};

export default WorkPage;
