import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import { FormContainer, FormInputText, FormLink, FormSubmitButton, FormTitle, MainBoxContainer } from '../../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import { Colors } from '../../layout/themeColors';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <MainBoxContainer formWidth={'auto'}>
            <FormContainer>
                <FormTitle>
                    Signup Smart
                    <span>Chat</span>
                </FormTitle>
                <form onSubmit={handleSubmit} style={{width:'100%'}}>
                    <Stack gap={1}>
                        <FormInputText 
                            fullWidth
                            variant="outlined"
                            label={'Fullname'} 
                            type='text'
                            margin="normal"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})} 
                            size='small'
                            required
                            className='form-input'
                        />
                        <FormInputText 
                            fullWidth
                            variant="outlined"
                            label={'Username'} 
                            type='text'
                            margin="normal"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})} 
                            size='small'
                            required
                            className='form-input'
                        />

                        <FormInputText 
                            fullWidth
                            variant="outlined"
                            label={'Password'} 
                            type='password'
                            margin="normal"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})} 
                            size='small'
                            required
                            className='form-input'
                        />

                        <FormInputText 
                            fullWidth
                            variant="outlined"
                            label={'Confirm Password'} 
                            type='password'
                            margin="normal"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} 
                            size='small'
                            required
                            className='form-input'
                        />
                    </Stack>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <FormSubmitButton type='submit' disabled={loading} sx={{margin:'20px 0 10px 0'}}>
                        { loading ? <CircularProgress size="30px" sx={{color: `${Colors.light} !important`}} /> : 'Signup' }
                    </FormSubmitButton>

                    <FormLink to='/login'>Already have an account?</FormLink>
                </form>
            </FormContainer>
        </MainBoxContainer>
    )
}

export default Signup;