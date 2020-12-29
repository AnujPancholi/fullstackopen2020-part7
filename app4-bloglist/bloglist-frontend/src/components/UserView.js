import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getFeaturedUserPopulateActionAsync } from '../reducers/featuredUserReducer.js'



const UserView = () => {
  const user = useSelector((state) => {
    return state.featured_user
  })
  const dispatch = useDispatch()
  const urlParams = useParams()
  const userId = urlParams.userId

  useEffect(() => {
    dispatch(getFeaturedUserPopulateActionAsync(userId))
  },[])

  return user ? (<div>
    <h2>
      {user.name}
    </h2>
    <h3>
            Blogs:
    </h3>
    <ul>
      {user.blogs.map((blog) => (<li key={blog.id}>
        {blog.title}
      </li>))}
    </ul>
  </div>) : (<div>
            User not found
  </div>)
}

export default UserView