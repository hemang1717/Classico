import { ADD_TODO, GET_BLOG, GET_CARD, SEARCH_BLOG, SORT_DATA } from "./constants"

export const getBlog=()=>{
    return({
        type:GET_BLOG 
    })
}
export const getCard=()=>{
    return(
        {
            type:GET_CARD
        }
    )
}
export const addTodo=(data)=>{
    console.log('data of todo',data)
    return({
        type:ADD_TODO,
        data
    })
}
export const searchBlog=(data)=>{
    return({
        type:SEARCH_BLOG,
        data
    })
}
export const sortData=(data)=>{
    return({
        type:SORT_DATA,
        data
    })
}