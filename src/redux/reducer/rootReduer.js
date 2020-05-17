const initalState = {
    hello : "world"
}

const rootReducer = (state=initalState , action) =>{
    const {type , payload} = action;
    switch(type){
        case 'string':
            return {hello:payload};
            break;
        default:
            return state;
            break;
    }
};


export default rootReducer;