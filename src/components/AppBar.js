
'use client'
import { AppBar, Box, Button, Container, Stack } from '@mui/material';
import { usePathname } from 'next/navigation'
import * as React from 'react';


const AppBarPage = ()=> {
  const searchParams = usePathname()

  return (
    <AppBar position="static">
      <Container fixed>
        <Box sx={{ flexGrow: 1,}}>
          <Stack direction='row' spacing={2}>
            <Button style={{color:'white'}}>hola</Button>
            <Button style={{color:'white'}}>mundo</Button>
          </Stack>
        </Box>
      </Container>
    </AppBar>
  );
}

export default AppBarPage;
