import React from 'react'
import { FormButton, FormInput, FormLabel, Text, Container, FormWrap, Icon, FormContent, FormH1,Form} from './SigninElements'

const Signin = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">OG</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign In Here</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required></FormInput>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required></FormInput>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>      
        </Container>  
        </>
  )
}

export default Signin
