import _ from 'lodash'

import blogService from '../services/blogs.js'

const blogsInitialState = []

const blogsReducer = (state = blogsInitialState, action) => {
  switch (action.type) {
  case 'BLOGS_POPULATE':
    return Array.isArray(action.blogs) ? action.blogs : state
  case 'BLOGS_LIKE':
    return _.map(state,(blog) => _.merge(
      {},
      blog,
      blog.id===action.blogId ? {
        'likes': blog.likes+1
      } : {}
    )
    )
  default:
    return state
  }
}

//action creators for fetching all blogs
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
//---

//action creators for liking a blog
export const getBlogLikeAction = (id) => {
  return {
    type: 'BLOGS_LIKE',
    blogId: id
  }
}

export const getBlogLikeActionAsync = (id) => {
  return (async(dispatch) => {
    try{
      const blogLikeResult = await blogService.addLikeToBlog(id)
      dispatch(getBlogLikeAction(id))
    }catch(e){
      console.error('getBlogLikeActionAsync|ERROR',e)
    }
  })
}
//---

export default blogsReducer


