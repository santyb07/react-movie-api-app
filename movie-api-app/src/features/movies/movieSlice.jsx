import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi.jsx'
import {APIKey} from "../../common/apis/MovieApiKey"

export const fetchAsyncMovies = createAsyncThunk('movie/createAsyncMovies',
async (term)=>{

        const response = await 
        movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
        .catch((err)=>{
          console.log('something went wrong',err);
        })
        // console.log(response.data)
        return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movie/createAsyncShows',
async (term)=>{

        const response = await 
        movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
        return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movie/fetchAsyncMovieOrShowDetail',
async (id)=>{
        const response = await 
        movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
});


const initialState={
    movies:{},
    shows:{},
    selectedMovieOrShow:{},
    loader:'',
}

export const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow={};
        } 
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:(state)=>{
            console.log('pending');
            return {...state,loader:true}

        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log('fetched succesfully.');
            return {...state,movies:payload,loader:false};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('Rejected.');
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log('fetched succesfully.');
            return {...state,shows:payload,loader:false};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log('fetched succesfully.');
            return {...state,selectedMovieOrShow:payload,loader:false};
        },


    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies=(state)=> state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getSelectedMovieOrShow=(state)=>state.movies.selectedMovieOrShow;


export default movieSlice.reducer;