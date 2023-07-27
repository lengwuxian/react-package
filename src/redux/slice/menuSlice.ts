import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface MenuState {
    name: string,
    memo: string,
    link: string
}

// Define the initial state using that type
const initialState: MenuState[] = []

export const menuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        retrieve: (state, action) => {
            state.length = 0
            state.push(...action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { retrieve } = menuSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMenu = (state: RootState) => state.menu

export default menuSlice.reducer