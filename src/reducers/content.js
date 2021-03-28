const contentReducer = (state = null,action)=>{
    switch(action.type)
    {
        case 'DETAIL':
            return action.detail;
        default:
            return state;
    }
}

export default contentReducer;