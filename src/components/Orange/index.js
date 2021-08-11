import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElements'
import { OrangeContainer, OrangeBg, Videog, OrangeContent, OrangeH1, OrangeP, OrangeBtnWrapper, ArrowForward, ArrowRight } from './Orangeelements'


export const Orange = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }



    return (
        <OrangeContainer>
            <OrangeBg>
                <Videog autoPlay loop muted src={Video} type='video/mp4'/>
            </OrangeBg>
            <OrangeContent>
                <OrangeH1>Oranges Global</OrangeH1>
                <OrangeP>
                    Like Every Orange, You Are Organically Unique
                </OrangeP>
                <OrangeBtnWrapper>
                    <Button to="cart"
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>
                        Get Started {hover? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </OrangeBtnWrapper>
            </OrangeContent>

        </OrangeContainer>
    )
}
