import React from 'react';
import PropTypes from "prop-types";



const Categories = React.memo(({activeCategory,items,onClickCategory}) => {



    return (
        <div className="categories">
            <ul>
                <li className={activeCategory===null?'active':''} onClick={()=>onClickCategory(null)} key={`Все_null`}>Все</li>
                {items && items.map((el,index)=>{return <li className={activeCategory===index?'active':''} onClick={()=>onClickCategory(index)} key={`${el}_${index}`}>{el}</li>})}
            </ul>
        </div>
    );
})

Categories.propTypes={
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory:PropTypes.func

}

Categories.defaultProps={activeCategory:null,items:[]}

export default Categories;