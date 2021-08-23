import React from 'react';

const Categories = ({items}) => {
    const [activeItem, setActiveItem] = React.useState(0)
    const onLiClick = index =>{
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                {items && items.map((categ, index) => <li onClick={ () => onLiClick(index)}
                                                          className={activeItem === index ? 'active' : ''}
                                                          key={categ}>{categ}</li> )}
            </ul>
        </div>
    );
};

export default Categories;