import { Box, Flex, Text, VStack, Link, Heading } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={8}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl">Leonard Pauli</Heading>
        <Text fontSize="xl">Software Developer | Tech Enthusiast | Creative Thinker</Text>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Heading as="h2" size="lg" mt={10}>About</Heading>
          <Text textAlign="center" maxWidth="600px">
            Passionate about building scalable software and effective solutions that improve the lives of people around the world. With a background in computer science and extensive experience in full-stack development, I am always looking for new challenges and opportunities to learn and grow.
          </Text>
          <Heading as="h2" size="lg" mt={10}>Projects</Heading>
          <Text textAlign="center" maxWidth="600px">
            My projects range from web applications to mobile apps, focusing on usability, performance, and modern design aesthetics. Check out my GitHub for more details on my project work.
          </Text>
          <Link href="https://github.com" isExternal><FaGithub /> GitHub</Link>
          <Heading as="h2" size="lg" mt={10}>Contact</Heading>
          <VStack>
            <Link href="https://linkedin.com" isExternal><FaLinkedin /> LinkedIn</Link>
            <Link href="mailto:leonard@example.com"><FaEnvelope /> leonard@example.com</Link>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;