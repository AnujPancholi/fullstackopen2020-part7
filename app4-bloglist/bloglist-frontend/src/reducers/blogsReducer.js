const blogsInitialState = []

const blogsReducer = (state = blogsInitialState, action) => {
  switch (action.type) {
  case 'BLOGS_POPULATE':
    return Array.isArray(action.blogs) ? action.blogs : state
  default:
    return state
  }
}


export const getBlogsPopulateAction = (blogs) => {
  return {
    type: 'BLOGS_POPULATE',
    blogs: blogs
  }
}


export default blogsReducer


