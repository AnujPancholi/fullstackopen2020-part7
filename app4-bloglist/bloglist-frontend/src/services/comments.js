import axios from 'axios'


const baseUrl = '/api/comments'

const commentsAxios = axios.create({
  baseURL: baseUrl
})


const getCommentsForBlog = (__blogId) => {
  return new Promise((resolve,reject) => {
    (async() => {
      try{
        const commentsAxiosResult = await commentsAxios({
          method: 'GET',
          url: `/get-by-blog/${__blogId}`
        })
        resolve(commentsAxiosResult.data)
      }catch(e){
        if(e.response){
          reject(e.response.data)
        } else if(e.request){
          reject({
            message: 'NO RESPONSE FROM SERVER'
          })
        } else {
          reject({
            message: 'AN ERROR OCCURRED'
          })
        }
      }
    })()
  })
}

const addComment = (__comment, __user) => {
  return new Promise((resolve,reject) => {
    (async() => {

      try{
        const commentAdditionAxiosResult = await commentsAxios({
          method: 'POST',
          url: '/',
          headers: {
            'Authorization': `Bearer ${__user.token}`
          },
          data: __comment
        })

        if(!commentAdditionAxiosResult.data || !commentAdditionAxiosResult.data.comment){
          throw new Error('COMMENT NOT FOUND IN RESPONSE')
        }

        resolve(commentAdditionAxiosResult.data.comment)

      } catch(e) {
        if(e.response){
          reject(e.response.data)
        } else if(e.request){
          reject({
            message: 'NO RESPONSE FROM SERVER'
          })
        } else {
          reject({
            message: 'AN ERROR OCCURRED'
          })
        }
      }
    })()
  })
}


export default {
  getCommentsForBlog,
  addComment
}