import blogService from '../services/blogs.js'

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

export const getBlogsPopulateActionAsync = () => {
  return (async(dispatch) => {
    try{
      const blogs = await blogService.getAll()
      dispatch(getBlogsPopulateAction(blogs))
    }catch(e){
      dispatch(getBlogsPopulateAction([]))
    }
  })
}

export default blogsReducer


