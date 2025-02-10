"use client";
import AppBarPage from '@/components/AppBar'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardHeader, Container, Stack, TextField } from '@mui/material';
import { useFormik }  from 'formik';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { Router } from 'next/router';
import { useState } from 'react';

const Login = () => {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const validate = (values) => {
    let errors = {};


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
    

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      handleSend(values);
    },
  });

  const handleShowPassword =()=>{
    setShowPassword(!showPassword)
  }

  const handleSend =(values) =>{
    console.log(values)
    router.push('/dashboard')
    
  }

  return (
    <Container>
      <Card>
        <CardHeader title='Inicia Sesion' subheader='ingresa tu correo y contraseña'/>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2} >
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
                      <Button onClick={handleShowPassword}>
                        {showPassword ?  <VisibilityOff/> :<Visibility/>  }
                      </Button>
                    ),
                  },
                }}
              />
              <Button variant='contained' type="submit"> 
                Iniciar
              </Button>
            </Stack>
          </form>
        </CardContent>
        <CardActions>
          <p> ¿No tienes cuenta? </p> <Link style={{color:'blue'}} href={'newUser'}> Registrate ahora </Link>
        </CardActions>
      </Card>
      
    </Container>
  )
}


export default Login;