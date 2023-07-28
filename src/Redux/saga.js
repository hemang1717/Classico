import { GET_BLOG, SET_BLOG, GET_CARD,SET_CARD, SEARCH_BLOG, SET_SEARCH_BLOG, SORT_DATA } from "./constants";
import { takeEvery, put } from 'redux-saga/effects'
function* getBlogs(){
    let data=yield fetch('http://localhost:3500/blogs');
    data=yield data.json();
    yield put({type:SET_BLOG,data})
}
function* setCards(){
    let res=yield fetch('http://localhost:3600/cards');
    res=yield res.json();
    yield put({type:SET_CARD,data:res})
}
function* searchBlogss(data){
    // console.log('search data',data.data)
    let res=yield fetch(`http://localhost:3500/blogs?q=${data.data}`)
    res=yield res.json();
    yield put({type:SET_SEARCH_BLOG,data:res})
}
function* sortTheData(data){
    // console.log('sort data is ',data)
    let res=yield fetch(`http://localhost:3500/blogs?_sort=${data.data}&_order=asc`)
    res=yield res.json();
    yield put({type:SET_SEARCH_BLOG,data:res})
}
function* blogs(){
    yield takeEvery(GET_BLOG,getBlogs);
    yield takeEvery(GET_CARD,setCards);
    yield takeEvery(SEARCH_BLOG,searchBlogss)
    yield takeEvery(SORT_DATA,sortTheData);
}
export default blogs