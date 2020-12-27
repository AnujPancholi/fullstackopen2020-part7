import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const BlogView = () => {

  const urlParams = useParams()
  const blogId = urlParams.blogId
  const blog = useSelector((state) => {
    return state.blogs.find(blog => blog.id===blogId)
  })


  return blog ? (<div>
    <h2>
      {blog.title}
    </h2>

    <span>
            View it here:
      <a href={blog.url}>
        {blog.url}
      </a>
    </span>

    <span>
            By: {blog.author}
    </span>


  </div>) : (<div>
        No such blog found.
  </div>)

}


export default BlogView