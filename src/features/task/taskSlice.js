import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        increment: (state) => {

        }
    }
})

export default taskSlice.reducer