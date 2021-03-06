import React, {useCallback} from 'react';

import classNames from 'classnames'
import {useDispatch} from "react-redux";
import {setPizza} from "../redux/actions/Cart";
import Button from './Button'

const PizzaBlock = ({price, imageUrl, name, types, sizes, id, pizzasInCart}) => {
    console.log(pizzasInCart)
    const [activeType, setActiveType] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(sizes[0])
    const dispatch = useDispatch()
    const handleButtonClick = useCallback((name, id, price, activeType, activeSize, imageUrl) => {
        dispatch(setPizza({name, id, price, type: activeType === 0 ? 'тонокое' : 'традиционное', size : activeSize, imageUrl}))
        // eslint-disable-next-line
    },[])
    const availableTypes = ['тонкое' , 'традиционное']
    const availableSizes = [26 , 30, 40]
    const switchType = (i) =>{
        setActiveType(i)
    }
    const switchSize = (s) =>{
        setActiveSize(s)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypes.map((t, i) => <li key={t} className={classNames({
                        'active': i === activeType,
                        'disabled': !types.includes(i)
                    })} onClick={() =>{switchType(i)}}>{t}</li>)}
                </ul>
                <ul>
                    {availableSizes.map((s, i) => <li key={s}  className={classNames({
                        'active': s === activeSize,
                        'disabled': !sizes.includes(s)
                    })} onClick={() =>{switchSize(s)}}>{s} см.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onClick={() => handleButtonClick(name ,id, price, activeType, activeSize, imageUrl)}
                        className={classNames('button', 'button--outline',{
                           'button--add':pizzasInCart
                        })} >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span >Добавить</span>
                    <i>{pizzasInCart && pizzasInCart}</i>
                </Button>
            </div>
        </div>
    );
};

export default PizzaBlock;