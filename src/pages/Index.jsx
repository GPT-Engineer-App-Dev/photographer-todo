import { useState } from "react";
import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Input, 
  Textarea, 
  Button, 
  Checkbox, 
  Heading, 
  Flex 
} from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (title.trim() && description.trim()) {
      setTodos([...todos, { title, description, completed: false }]);
      setTitle("");
      setDescription("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Photographer's Todo App</Heading>
        <Text>Menu</Text>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Add New Todo</Heading>
          <VStack spacing={3}>
            <Input 
              placeholder="Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
            <Textarea 
              placeholder="Description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
            <Button colorScheme="blue" onClick={addTodo}>Add Todo</Button>
          </VStack>
        </Box>
        <Box>
          {todos.map((todo, index) => (
            <HStack 
              key={index} 
              p={4} 
              bg={todo.completed ? "green.100" : "gray.100"} 
              borderRadius="md" 
              boxShadow="md" 
              justifyContent="space-between"
            >
              <VStack align="start">
                <Text fontWeight="bold">{todo.title}</Text>
                <Text>{todo.description}</Text>
              </VStack>
              <Checkbox 
                isChecked={todo.completed} 
                onChange={() => toggleTodo(index)}
              >
                Completed
              </Checkbox>
            </HStack>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;