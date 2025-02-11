
'use client'
import { AppBar, Box, Button, Container, Stack, Typography } from '@mui/material';
import { redirect, usePathname } from 'next/navigation'
import * as React from 'react';


const AppBarPage = ()=> {
  const searchParams = usePathname()

  const logout= ()=>{
    localStorage.removeItem("token");
    redirect('/')
    

  }

  return (
    <AppBar position="static">
      <Container fixed>
        <Box sx={{ flexGrow: 1,}}>
          <Stack direction='row' spacing={2} sx={{justifyContent: "space-around",alignItems: "center"}} >
            <Typography variant='h5'> Bienvenido a la tienda Online de papeleria Moya</Typography>
            <Button style={{color:'white'}} onClick={logout}>Cerrar Sesion</Button>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
}

export default AppBarPage;
