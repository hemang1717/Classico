import { ADD_TODO, SET_BLOG, SET_CARD, SET_SEARCH_BLOG, SET_SORT_DATA } from "./constants";

export const blogReducer=(state=[],action)=>{
    switch(action.type){
        case SET_BLOG:
            return [...action.data];
        case SET_SEARCH_BLOG:
            return [...action.data];
        case SET_SORT_DATA:
            return [...action.data];
        default:
            return state;
    }
}
export const cardReducer=(state=[],action)=>{
    switch(action.type){
        case SET_CARD:
            return [...action.data];
        default:
            return state;
    }
}
export const todoReducer=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...state,action.data];
        default:
            return state;
    }
}