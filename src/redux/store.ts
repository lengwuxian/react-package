import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice'
import menuSlice from './slice/menuSlice'

const store = configureStore({
    reducer: {
        menu: menuSlice,
        counter: counterSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store