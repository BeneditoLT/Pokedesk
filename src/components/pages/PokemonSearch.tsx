import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";
import { FormContainer, FormField, SearchButton } from "./style/PokemonSearch.style";




// Definindo o esquema de validação com Zod
const schema = z.object({
  searchInput: z.string(),
  selectedType: z.string(),
});

// Definindo as propriedades esperadas para o componente
interface PokemonSearchProps {
  onSearch: (searchInput: string, selectedType: string) => void;
}

// Definindo o formato esperado dos dados do formulário
interface FormValues {
  searchInput: string;
  selectedType: string;
}

// Componente funcional PokemonSearch
const PokemonSearch: React.FC<PokemonSearchProps> = ({ onSearch }) => {
  // Configuração do React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // Função chamada ao enviar o formulário
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Validar dados com Zod
      schema.parse(data);
      
      // Chamar a função de busca passando os dados
      onSearch(data.searchInput, data.selectedType);
      
      // Limpar o formulário após a busca
      reset();
    } catch (error) {
      if (error instanceof ZodError) {
        // Exibir mensagens de erro no console
        const errorMessages = error.errors.map((err) => err.message);
        console.error(errorMessages);
      }
    }
  };

  // Renderizar o formulário
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        
        <input type="text" id="searchInput" {...register("searchInput")} placeholder="Nome" />
        {errors.searchInput && <p>{errors.searchInput.message}</p>}
      </FormField>
      <FormField>
        
        <select
          id="typeFilter"
          {...register("selectedType")}
          onChange={(e) => setValue("selectedType", e.target.value)}
        >
          <option value="">Todos os Tipos</option>
          <option value="normal">Normal</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="flying">Flying</option>
          <option value="fighting">Fighting</option>
          <option value="poison">Poison</option>
          <option value="electric">Electric</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="bug">Bug</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
        </select>
        {errors.selectedType && <p>{errors.selectedType.message}</p>}
      </FormField>
      <SearchButton type="submit">Buscar</SearchButton>
    </FormContainer>
  );
};

export default PokemonSearch;
