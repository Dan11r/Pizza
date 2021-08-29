import React, {useCallback} from 'react';
import {Categories, PizzaBlock, SortPopup, LoaderPizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setPizza} from '../redux/actions/Cart'

const availableCategories = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const availableSorts = [{type:'rating', name:'популярности', order:'desc'},{type:'price', name:'цене', order:'desc'},{type:'name', name:'алфавиту', order:'asc'}]

const Home = React.memo(() => {

    const [pizzasItems, pizzasIsLoading, category, sortBy, items] = useSelector((state) =>
        [state.pizzas.pizzasItems, state.pizzas.isLoading, state.filter.category, state.filter.sortBy, state.cart.items])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={availableCategories} activeItem={category}/>
                <SortPopup items={availableSorts} activeItem={sortBy}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzasIsLoading
                    ? Array(10).fill(0).map((LoaderPizza, index) => <LoaderPizzaBlock key={index}/> )
                    : pizzasItems && pizzasItems.map(p => <PizzaBlock  pizzasInCart={items && items[p.id]} key={p.id} {...p}/>)
                }
            </div>
        </div>
    );
})

export default Home;