import React from 'react'
import Styled from './styles.js';
import { Typography } from '@mui/material';

function Section({title, text, img, textAlign, background, reverse, itemAlign}) {
  return (
    <Styled.Container textAlign={textAlign} background={background} reverse={reverse} itemAlign={itemAlign}>
        <Styled.TextContainer>
            <Typography variant='h2'>{title}</Typography>
            <Typography variant='body1'>{text}</Typography>
        </Styled.TextContainer>
        <Styled.ImageContainer>
            <img src={img} alt="Saludo"  />
        </Styled.ImageContainer>
    </Styled.Container>
  )
}

export default Section;
