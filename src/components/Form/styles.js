import styled from 'styled-components';
import { media } from '../../tokens';

export const FormContent = styled.form`
  ${media.md} {
    display: flex;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 2px solid #30363d;
  border-radius: 4px;
  color: white;
`;

export const Button = styled.button`
  background: #2ea043;
  border: none;
  color: white;
  border-radius: 4px;
  padding: 5px 15px;
  font-weight: 500;
  width: 100%;
  margin: 10px 0;

  ${media.md} {
    margin: 0;
    width: 20%;
    margin-left: 5px;
  }
`;
