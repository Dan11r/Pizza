import React from 'react';
import {useDispatch} from "react-redux";
import {setСategory} from '../redux/actions/Filter'


const Categories = React.memo(({items, activeItem}) => {
    const dispatch = useDispatch()
    const onLiClick = index =>{
        dispatch(setСategory(index))
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={ () => onLiClick(null)}
                     className={activeItem === null ? 'active' : ''}
                     >все</li>

                {items && items.map((categ, index) => <li onClick={ () => onLiClick(index)}
                                                          className={activeItem === index ? 'active' : ''}
                                                          key={categ + index}>{categ}</li> )}
            </ul>
        </div>
    );
})

export default Categories;