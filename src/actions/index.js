export const detail = (detail) => {
    return{
        type: 'DETAIL',
        detail:detail
    };
}

export const collapse = (isCollapse) => {
    return{
        type: 'COLAPLSE',
        collapse:isCollapse
    };
}