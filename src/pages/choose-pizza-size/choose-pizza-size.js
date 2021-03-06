import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import styled from 'styled-components'
import { Grid, Divider as MaterialDivider, Typography, Paper } from '@material-ui/core'
import pizzaSizes from '../../fake-data/pizzas-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)
  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h3'>
          O que vai ser hoje, {userInfo.user.firstName} ?
        </Title>
        <Title variant='h4'>
          Escolha o tamanho da pizza:
        </Title>
      </Grid>

      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <PaperPizza>
              <Pizza>
                <PizzaText>{pizza.size} cm </PizzaText>
              </Pizza>
              <Divider />
              <Typography variant='h5'>{pizza.name}</Typography>
              <Typography>
                {pizza.slices} fatias, {' '}
                {pizza.flavours} {' '}
                {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
              </Typography>
            </PaperPizza>
          </Grid>
        ))}
      </PizzasGrid>
    </>

  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const Divider = styled(MaterialDivider)`
    margin: 20px 0;
    width: 100%;
  `
const Title = styled(Typography).attrs({
  gutterBottom: true,
  aling: 'center'
})``
const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 10
})`
   padding: 20px;
   `
const Pizza = styled.div`
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    height: 200px;
    justify-content: center;
    position: relative;
    width: 200px;
  &::Before,
  &::after{
    background: #ccc;
    content: '';
    position:absolute;
    transform: rotate(45deg);
  }
  &::before{
    height:1px;
    width:160px;
  }
  &::after{
    height:160px;
    width: 1px;
  }
  `
const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
    align-items: center;
    background: #fff;
    border-radius: 50%;
    display: flex;
    height:80px;
    justify-content: center;
    position: relative;
    width:80px;
    z-index: 1;
  
  `
const PaperPizza = styled(Paper)`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-width: 250px;
    padding: 20px 0;
  `

export default ChoosePizzaSize
