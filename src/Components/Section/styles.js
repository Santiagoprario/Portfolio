import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
  width: 100%;
  height: 400px;
  padding-bottom: 0px;
  background-color: ${({ background }) => background || 'rgba(128,128,128, 0.80)'};
  text-align: ${({ textAlign }) => textAlign || 'right'};
  align-items: ${({ itemAlign }) => itemAlign || 'flex-start'};
`;

const ImageContainer = styled.div`
   width: 50%;
   margin-top: -50px;
`;

const TextContainer = styled.div`
  width: 50%;
  padding-bottom: 10px;
`;


export default { Container, ImageContainer, TextContainer };
