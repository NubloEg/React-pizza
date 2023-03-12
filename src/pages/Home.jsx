import React from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas";
import {addPizzaToCart} from "../redux/action/cart";

const categoryName=['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortName=['популярности','цена','алфавиту']
const Home = () => {
    const dispatch=useDispatch()
    const items=useSelector(({pizzas})=>pizzas.items)
    const cartItems=useSelector(({cart})=>cart.items)
    const isLoaded=useSelector(({pizzas})=>pizzas.isLoaded)
    const {category,sortBy}=useSelector(({filters})=>filters)


    React.useEffect(()=>{
        dispatch(fetchPizzas(sortBy,category))
    },[category,sortBy,dispatch])
    const onSelectCategory=React.useCallback((index)=>{
        dispatch(setCategory(index));
    },[dispatch])

    const onClickSortType=React.useCallback((index)=>{
        dispatch(setSortBy(index));

    },[dispatch])

    const handleAddPizzaToCart=obj=>{
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryName}/>
                <SortPopup activeSortType={sortBy} items={sortName} onClickSortType={onClickSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((el)=>{return <PizzaBlock addedCount={cartItems[el.id]&&cartItems[el.id].items.length} onClickAddPizza={handleAddPizzaToCart} key={el.id}  {...el}/>} ):Array(10).fill(0).map((_,i)=><PizzaLoadingBlock key={i}/>)}

            </div>
        </div>
    );
};

export default Home;