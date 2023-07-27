
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { retrieve, selectMenu } from '../../redux/slice/menuSlice'
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Link } from 'react-router-dom'

const menuData = [
  { name: '列表', memo: '列表例子', link: '/list' },
  { name: '表格', memo: '表格例子', link: '/table/test' },
]

export function Menu() {
  const menu = useSelector(selectMenu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(retrieve(menuData))
  }, [dispatch])

  return (
    <Container >
      <h1>菜单</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menu.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.memo}</TableCell>
                <TableCell align="right"><Link to={row.link}>{row.name}</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}