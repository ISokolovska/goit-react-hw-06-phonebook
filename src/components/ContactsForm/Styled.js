import styled from 'styled-components';

export const AddContactsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const AddContactsInput = styled.input`
  width: 350px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 400;
`;

export const Button = styled.button`
  text-align: center;
  width: 250px;
  padding: 10px;
  font-size: 25px;
  font-weight: 600;
  &:hover {
    background-color: lightgreen;
  }
`;
