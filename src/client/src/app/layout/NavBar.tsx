import { Group } from '@mui/icons-material'
import { AppBar, Box,  Button,  MenuItem, Toolbar, Typography } from '@mui/material'


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundImage:'linear-gradient(135deg, #182a73, #218aae 69%, #20a7ac 89%)'}}>
            <Toolbar sx = {{display: 'flex', justifyContent:'space-between'}}>
                <Box>
                    <MenuItem sx={{display: 'flex', gap:2}}>
                        <Group fontSize="large" />
                        <Typography variant='h4' fontWeight='bold'>Reactivities</Typography>
                    </MenuItem>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <MenuItem sx = {{
                        fontSize:'1.2em', textTransform: 'uppercase', fontWeight:'bold'                    
                        }}>
                            Activities
                    </MenuItem>
                    <MenuItem sx = {{
                        fontSize:'1.2em', textTransform: 'uppercase', fontWeight:'bold'                    
                        }}>
                            About
                    </MenuItem>
                    <MenuItem sx = {{
                        fontSize:'1.2em', textTransform: 'uppercase', fontWeight:'bold'                    
                        }}>
                            Contact
                    </MenuItem>
                </Box>
                <Button size='large' variant='contained' color='warning'>Create activity</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
