import React from "react";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";

import { Container, SearchContainer, Input, SearchButton } from "./styles";

function Home() {
  return (
    <Container>
      <Header title="Teste" />
      <SearchContainer>
        <Input placeholder="Procurar Filmes" placeholderTextColor="#ddd" />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}

export default Home;
