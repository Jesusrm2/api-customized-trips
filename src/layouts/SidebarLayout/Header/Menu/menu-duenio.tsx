import {
    Box,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem
  } from '@mui/material';

  import { useRef, useState } from 'react';
  import { NavLink } from 'react-router-dom';

  import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { ListWrapper } from '..';
  
  
  
  function HeaderMenuDuenio() {
    const ref = useRef<any>(null);
    const [isOpen, setOpen] = useState<boolean>(false);
  
    const handleOpen = (): void => {
      setOpen(true);
    };
  
    const handleClose = (): void => {
      setOpen(false);
    };
  
    return (
      <>
        <ListWrapper
          sx={{
            display: {
              xs: 'none',
              md: 'block'
            }
          }}
        >
          <List disablePadding component={Box} display="flex">
            <ListItem
              classes={{ root: 'MuiListItem-indicators' }}
              button
              component={NavLink}
              to="/perfil/request"
            >
              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                primary="Solicitar registro"
              />
            </ListItem>
            <ListItem
              classes={{ root: 'MuiListItem-indicators' }}
              button
              component={NavLink}
              to="/perfil/solicitudes"
            >
              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                primary="Estado"
              />
            </ListItem>
            <ListItem
              classes={{ root: 'MuiListItem-indicators' }}
              button
              component={NavLink}
              to="/perfil/profile-duenio"
            >
              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                primary="Perfil"
              />
            </ListItem>
            <ListItem
              classes={{ root: 'MuiListItem-indicators' }}
              button
              ref={ref}
              onClick={handleOpen}
            >
              <ListItemText
                primaryTypographyProps={{ noWrap: true }}
                primary={
                  <Box display="flex" alignItems="center">
                    Others
                    <Box display="flex" alignItems="center" pl={0.3}>
                      <ExpandMoreTwoToneIcon fontSize="small" />
                    </Box>
                  </Box>
                }
              />
            </ListItem>
          </List>
        </ListWrapper>
        <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
          <MenuItem sx={{ px: 3 }} component={NavLink} to="/overview">
            Overview
          </MenuItem>
          <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
            Tabs
          </MenuItem>
          <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
            Cards
          </MenuItem>
          <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
            Modals
          </MenuItem>
        </Menu>
      </>
    );
  }
  
  export default HeaderMenuDuenio;
  