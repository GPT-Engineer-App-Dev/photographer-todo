import { useState } from "react";
import {
  Box,
  Container,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Checkbox,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (title.trim() === "" || description.trim() === "") return;
    setTodos([...todos, { title, description, completed: false }]);
    setTitle("");
    setDescription("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Box bg="blue.500" w="100%" p={4} color="white" mb={4}>
        <Heading as="h1" size="lg">
          Photographers' Todo App
        </Heading>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Input
              placeholder="Todo Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Todo Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button colorScheme="blue" onClick={addTodo}>
              Add Todo
            </Button>
          </VStack>
        </Box>
        {todos.map((todo, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg={todo.completed ? "green.100" : "white"}
          >
            <HStack justify="space-between">
              <VStack align="start">
                <Text fontWeight="bold">{todo.title}</Text>
                <Text>{todo.description}</Text>
              </VStack>
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;