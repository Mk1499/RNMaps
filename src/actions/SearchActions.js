export const viewRecommended = text => ( {
    type : 'viewRecommended',
    payload: text
})
export const emptyRecommended = () => ({
    type:'emptyRecommended',
})