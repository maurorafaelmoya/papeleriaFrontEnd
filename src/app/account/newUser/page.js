'use client'
import { AxiosPapeleria } from '@/axios/ApiUsers'
import AppBarPage from '@/components/AppBar'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Button, Card, CardActions, CardContent, CardHeader, Container, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = "El correo es requerido";
        }

        if (!values.email) {
            errors.email = "El correo es requerido";
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'El correo es invalido';
        }

        if (!values.password) {
            errors.password = "La contraseña es requerida";
        }else if (!/^(?=.*\d)(?=.*[!@#$"%^&*.])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
            errors.password = 'La contraseña debe contener 8 caracteres y por lo menos una Mayuscula, una Minuscula, un numero y un caracter especial';
        }

        if (!values.repeatpassword) {
            errors.repeatpassword = "La contraseña es requerida";
        }else if(values.password !== values.repeatpassword ){
            errors.repeatpassword = "Las contraseñas no coinciden";
        } 



        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatpassword: "",
        },
        validate,
        onSubmit: (values) => {
            handleSend(values)
        },
    });

    const handleSend = async(values) =>{
        setSeverity('success')
        setMessage('Cuenta registrada correctamente');
        const response = await AxiosPapeleria.post('user', values );
      
        console.log(values)
        console.log(response)
    }

  return (
    <Container>
        {/* <AppBarPage/> */}
        <Card>
            {message === '' ? null : <Alert severity={severity}> {message} </Alert> }
            <CardHeader 
                title='Crear una nueva cuenta'
                subheader='favor de ingresar tus datos'
                />
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>
                        <TextField 
                            id="name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.name ? formik.errors.name : ""}
                            error={formik.touched.name && formik.errors.name}
                            label="Nombre"
                            />
                        <TextField 
                            id="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.email ? formik.errors.email : ""}
                            error={formik.touched.email && formik.errors.email}
                            label="Correo"
                            />
                        <TextField
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.password ? formik.errors.password : ""}
                            error={formik.touched.password && formik.errors.password}
                            label="Contraseña"
                            slotProps={{
                            input: {
                                endAdornment: (
                                    <Button onClick={()=> setShowPassword(!showPassword)}>
                                        {showPassword ?  <VisibilityOff/> :<Visibility/>  }
                                    </Button>
                                ),
                            },
                            }}
                        />
                        <TextField
                            id="repeatpassword"
                            type={showPassword ? "text" : "password"}
                            value={formik.values.repeatpassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.repeatpassword ? formik.errors.repeatpassword : ""}
                            error={formik.touched.repeatpassword && formik.errors.repeatpassword}
                            label="Repetir Contraseña"
                            slotProps={{
                            input: {
                                endAdornment: (
                                    <Button onClick={()=> setShowPassword(!showPassword)}>
                                        {showPassword ?  <VisibilityOff/> :<Visibility/>  }
                                    </Button>
                                ),
                            },
                            }}
                        />
                        <Button type='submit' variant='contained'>
                            Crear usuario
                        </Button>
                    </Stack>
                </form>
            </CardContent>
            <CardActions>
                <p> ¿Tienes cuenta? </p> <Link style={{color:'blue'}} href={'login'}> Iniciar Sesion </Link>
            </CardActions>
        </Card>
    </Container>
  )
}

export default page