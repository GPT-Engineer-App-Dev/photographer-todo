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
  Spacer,
  useBreakpointValue,
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

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.lg" p={4}>
      <Box bg="blue.500" w="100%" p={4} color="white" mb={4}>
        <Flex align="center">
          <Heading as="h1" size="lg">
            Photographers' Todo App
          </Heading>
          <Spacer />
          <HStack spacing={4}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </HStack>
        </Flex>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Todo Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              bg="white"
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
            />
            <Textarea
              placeholder="Todo Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              bg="white"
              borderColor="gray.300"
              _hover={{ borderColor: "gray.400" }}
            />
            <Button colorScheme="blue" onClick={addTodo} w="full">
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
            boxShadow="md"
            bg={todo.completed ? "green.100" : "white"}
          >
            <HStack justify="space-between" align={isMobile ? "start" : "center"}>
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold" fontSize="lg">
                  {todo.title}
                </Text>
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