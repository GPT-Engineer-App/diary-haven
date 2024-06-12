import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">My Personal Blog</Heading>
        <Flex as="nav">
          <Link href="#" mx={2}>Home</Link>
          <Link href="#" mx={2}>About</Link>
          <Link href="#" mx={2}>Contact</Link>
        </Flex>
      </Flex>

      <Box as="main" py={8}>
        <Heading as="h2" size="md" mb={4}>Blog Posts</Heading>
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Placeholder Blog Post Title</Heading>
            <Text mt={4}>This is a placeholder for a blog post. Content will go here.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Placeholder Blog Post Title</Heading>
            <Text mt={4}>This is a placeholder for a blog post. Content will go here.</Text>
          </Box>
        </VStack>
      </Box>

      <Box as="footer" py={4} borderTop="1px" borderColor="gray.200" textAlign="center">
        <Text>© 2023 My Personal Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;