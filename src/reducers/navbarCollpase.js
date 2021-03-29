const collapseReducer = (state = false,action)=>{
    switch(action.type)
    {
        case 'COLAPLSE':
            return action.collapse||!state;
        default:
            return state;
    }
}

export default collapseReducer;