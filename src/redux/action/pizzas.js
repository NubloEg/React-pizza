import axios from "axios";


export const setLoaded=(payload)=>({
    type:'SET_LOADED',
    payload,
})

export const fetchPizzas=(sortBy,category)=>(dispatch)=>{
    const sortMap=new Map([
        ["популярности","rating"],
        ["цена","price"],
        ["алфавиту","name"],

    ])

    dispatch(setLoaded(false))
    axios.get(`/pizzas?${category===null?"":`category=${category}`}&_sort=${sortMap.get(sortBy)}&_order=desc`)
        .then(({data})=>dispatch(setPizzas(data)))
}


export const setPizzas=(items)=>({
    type:'SET_PIZZAS',
    payload:items,
})



