import { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { CircularProgress, Stack } from '@mui/material';
import { FormContainer, FormInputText, FormLink, FormSubmitButton, FormTitle, MainBoxContainer } from '../../styles/main';
import { Colors } from '../../layout/themeColors';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    return (
        <MainBoxContainer formWidth={'auto'}>
            <FormContainer>
                <FormTitle>
                    Login Smart
                    <span>Chat</span>
                </FormTitle>

                <form onSubmit={handleSubmit} style={{width:'100%'}}>
                    <Stack gap={1}>
                        <FormInputText 
                            fullWidth
                            label={'Username'} 
                            type='text'
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            size='small'
                            required
                            className='form-input'
                        />

                        <FormInputText 
                            fullWidth
                            label={'Password'} 
                            type='password'
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            size='small'
                            required
                            className='form-input'
                        />
                        
                        <FormSubmitButton type='submit' disabled={loading} sx={{margin:'20px 0 10px 0'}}>
                            { loading ? <CircularProgress size="30px" sx={{color: `${Colors.light} !important`}} /> : 'Login' }
                        </FormSubmitButton>

                    <FormLink to='/signup'>Dont have an account?</FormLink>
                    </Stack>
                </form>
            </FormContainer>
        </MainBoxContainer>
    )
}

export default Login;