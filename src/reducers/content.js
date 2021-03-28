const contentReducer = (state = {},action)=>{
    switch(action.type)
    {
        case 'DETAIL':
            return action.detail;
        default:
            return null;
    }
}

export default contentReducer;