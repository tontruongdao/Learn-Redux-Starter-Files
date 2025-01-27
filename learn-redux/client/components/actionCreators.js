export const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index: index
    }
}

export const addComment = (postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
} 

export const removeComment= (postId, i) =>  {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}