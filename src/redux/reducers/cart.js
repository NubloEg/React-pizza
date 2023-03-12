

const initialState={
    items: {},
    totalPrice:0,
    itemsCount:0,
}

const getTotalPrice=arr=>arr.reduce((sum,obj)=>obj.price+sum,0);

const _get=(obj,path)=>{
    const [firstKey,...keys]=path.split('.');
    return keys.reduce((val,key)=>{
        return val[key];
        },obj[firstKey]);
};

const getTotalSum=(obj,path)=>{
    return Object.values(obj).reduce((sum,obj)=>{
            const value=_get(obj,path);
            return sum+value
        }, 0);
};

const cart=(state=initialState,action)=>{

    switch(action.type) {
        case 'ADD_PIZZA_CART' :{
            const currentPizzaItems=!state.items[action.payload.id]
                ?[action.payload]
                :[...state.items[action.payload.id].items,action.payload];
            const newItem={ ...state.items,
                [action.payload.id]:{
                items:currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                },

            }

            const itemsCount=getTotalSum(newItem,'items.length')

            const totalPrice=getTotalSum(newItem,'totalPrice')



            return{
                ...state,
                items:newItem,
                itemsCount,
                totalPrice: totalPrice


        }}
        case 'CLEAR_CART':
        return {totalPrice: 0,itemsCount: 0,items:{}}

        case 'REMOVE_CART_ITEM':{
            const newItem={
                ...state.items
            }
            const currentTotalPrice=newItem[action.payload].totalPrice
            const currentItemsCount=newItem[action.payload].items.length
            delete newItem[action.payload]

            return {
                ...state,
                items: newItem,
                totalPrice: state.totalPrice-currentTotalPrice,
                itemsCount: state.itemsCount-currentItemsCount
            }

        }

        case 'PLUS_CART_ITEM':
            const newObjectItems=[
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]
            const newItems={
                ...state.items,
                [action.payload]:{
                    items:newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems),
                },
            }
            const itemsCount=getTotalSum(newItems,'items.length')
            const totalPrice=getTotalSum(newItems,'totalPrice')

            return {
                ...state,
                items:newItems,
                itemsCount,
                totalPrice,
            }

        case 'MINUS_CART_ITEM':{
            const oldItems =state.items[action.payload].items;
            const newObjectItems=oldItems.length>1?state.items[action.payload].items.slice(1):oldItems;
            const newItems={
                ...state.items,
                [action.payload]:{
                    items:newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems),
                },
            }
            const itemsCount=getTotalSum(newItems,'items.length')
            const totalPrice=getTotalSum(newItems,'totalPrice')
            return {
                ...state,
                items:newItems,
                itemsCount,
                totalPrice
            }
        }






        default:
            return {...state}
    }

}

export default cart