import { Button, Card, styled, SvgIcon, Typography } from '@mui/material';
import React from 'react'

const RootStyle = styled(Card)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    marginBottom: 20,
    color: "#4c5e91",
    boxShadow: '#ffff',
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(25),
    height: theme.spacing(15),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
    
}));


export const CardElement = ({svg, text}) => {
    console.log(svg)
    return (
        <Button disabled>
            <RootStyle>
                <IconWrapperStyle>
                    <SvgIcon>
                        {/* credit: cog icon from https://heroicons.com */}
                        {svg}
                    </SvgIcon>                
                </IconWrapperStyle>
                <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                    {text}
                </Typography>
            </RootStyle>
        </Button>
    )
}


