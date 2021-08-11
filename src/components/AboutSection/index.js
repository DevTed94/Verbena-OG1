import React from 'react'
import {Button} from '../ButtonElements'
import {
    AboutContainer,
    InfoWrapper,
    Img,
    ImgWrap,
    Heading,
    Subtitle,
    BtnWrap,
    Column1,
    Column2,
    InfoRow,
    TextWrapper,
    TopLine
} from './AboutElements';

export const AboutSection = ({lightBg,lightText, darkText, topLine, id, img,headLine,buttonLabel,alt,imgStart,description, dark}) => {
    return (
        <>
        <AboutContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="about" primary={!dark} dark={!dark} 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </AboutContainer>
            
        </>
    )
}
