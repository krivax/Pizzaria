import React, { useState, useContext } from 'react'
import { AppBar, Toolbar as MaterialToolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { AuthContext } from '../../contexts/auth'
import { ReactComponent as MainLogo } from '../../images/logo.svg'
import styled from 'styled-components'

const Header = () => {
  const [anchorElement, setAncorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)

  const handleOpenMenu = (e) => {
    setAncorElement(e.target)
  }
  const handleClose = () => {
    setAncorElement(null)
  }
  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography color='inherit'> Olá {userInfo.user.firstName} =)</Typography>

        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={Boolean(anchorElement)}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>

  )
}
const LogoContainer = styled.div`
  flex-grow: 1;
`
const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px; 

  & path{
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }
`
const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width:100%;
`
export default Header
