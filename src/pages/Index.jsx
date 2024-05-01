import { Box, Input, Button, Table, Thead, Tbody, Tr, Th, Td, useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { client } from 'lib/crud';

const Index = () => {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');
  const toast = useToast();

  const addIdea = async () => {
    if (newIdea) {
      const success = await client.set(`blog-post-idea:${new Date().toISOString()}`, { idea: newIdea });
      if (success) {
        setIdeas([...ideas, newIdea]);
        setNewIdea('');
        toast({
          title: 'Idea added.',
          description: "We've added your blog post idea.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  useEffect(() => {
    const loadIdeas = async () => {
      const data = await client.getWithPrefix('blog-post-idea:');
      if (data) {
        setIdeas(data.map(item => item.value.idea));
      }
    };
    loadIdeas();
  }, []);

  return (
    <Box p={8}>
      <Box mt={10}>
        <Input placeholder="Enter a new blog post idea" value={newIdea} onChange={(e) => setNewIdea(e.target.value)} />
        <Button onClick={addIdea} mt={2}>Add Idea</Button>
        <Table variant="simple" mt={4}>
          <Thead>
            <Tr>
              <Th>Ideas</Th>
            </Tr>
          </Thead>
          <Tbody>
            {ideas.map((idea, index) => (
              <Tr key={index}>
                <Td>{idea}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Index;