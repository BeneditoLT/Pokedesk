import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const FormField = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    color: #red;
    border-radius: 8px;
    margin-right: 10px;
    font-size: 34px; 
  }

  input,
  select {
    padding: 8px;
    font-size: 14px;
    border-radius: 8px;
  }

  p {
    color: red;
    margin-top: 5px;
  }
`;

export const SearchButton = styled.button`
  padding: 10px;
  background-color: rgb(157 29 45);;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4da081;
  }
`;