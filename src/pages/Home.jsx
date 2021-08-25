import React from 'react';
import {Categories, PizzaBlock, SortPopup} from "../components";
import {useDispatch, useSelector} from "react-redux";


const availableCategories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const availableSorts = ['популярности','цене','алфавиту']

const Home = React.memo(() => {
    const [PizzasItems, PizzasIsLoading] = useSelector((state) => [state.PizzasItems, state.isLoading])

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={availableCategories}/>
                <SortPopup items={availableSorts}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {PizzasItems && PizzasItems.map(p => <PizzaBlock key={p.id} {...p}/>)}
            </div>
        </div>
    );
})

export default Home;