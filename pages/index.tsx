import { FormEvent, useState } from "react";
import { Flex, Image, Button, Text } from "@chakra-ui/core";
import Input from "../components/Input";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");

  function handleSignUpToNewsletter(e: FormEvent) {
    e.preventDefault();
    axios.post("/api/subscribe", { email });
  }

  return (
    <Flex as="main" height="100vh" justifyContent="center" alignItems="center">
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image marginBottom={8} src="/gleear.png" alt="Gleear" />

        <Text
          textAlign="center"
          fontSize="sm"
          color="#fff"
          marginBottom={2}
        >
          Assine a newsletter da Gleear e receba as atualizações sobre nosso projeto!
        </Text>

        <Input
          placeholder="Seu melhor e-mail"
          marginTop={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="purple.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: "#7fdce3" }}
        >
          INSCREVER
        </Button>
      </Flex>
    </Flex>
  );
}
