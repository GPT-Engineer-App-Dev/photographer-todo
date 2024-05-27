import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    if (title.trim() === "") return;
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
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="lg">
          Photographers' Todo App
        </Heading>
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
        </HStack>
      </Flex>

      <Box bg="gray.50" p={6} borderRadius="md" boxShadow="md">
        <VStack spacing={4}>
          <HStack width="100%">
            <Input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <IconButton
              aria-label="Add todo"
              icon={<FaPlus />}
              onClick={addTodo}
            />
          </HStack>

          {todos.map((todo, index) => (
            <HStack
              key={index}
              width="100%"
              p={4}
              bg={todo.completed ? "green.100" : "white"}
              borderRadius="md"
              boxShadow="sm"
              justifyContent="space-between"
            >
              <Box>
                <Text fontWeight="bold">{todo.title}</Text>
                <Text>{todo.description}</Text>
              </Box>
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
            </HStack>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;