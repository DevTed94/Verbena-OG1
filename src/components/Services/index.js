import React from 'react'
import Icon1 from '../../imgs/og1.png'
import Icon2 from '../../imgs/svg-2.svg'
import Icon3 from '../../imgs/svg-4.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServiceWrapper,
    ServiceH2,
    ServicesP,
    ServiceCard,
    ServiceIcon
} from "./ServiceElements"


export const Services = () => {
    return (
        <ServicesContainer id="contact">
            <ServicesH1> Our Services</ServicesH1>
                <ServiceWrapper>
                    <ServiceCard>
                        <ServiceIcon src={Icon1}/>
                        <ServiceH2>Reduce Waste</ServiceH2>
                        <ServicesP>You can acess our platform online anywhere in the world.</ServicesP>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceIcon src={Icon2}/>
                        <ServiceH2>Provide A Meal</ServiceH2>
                        <ServicesP>You can rest happy knowing you helped feed someone in need.</ServicesP>
                    </ServiceCard>
                    <ServiceCard>
                        <ServiceIcon src={Icon3}/>
                        <ServiceH2>Become OG</ServiceH2>
                        <ServicesP>You can request a consult with our OG for unique designs.</ServicesP>
                    </ServiceCard>
                </ServiceWrapper>
            
        </ServicesContainer>
    )
}
