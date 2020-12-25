import axios from 'axios'


const userAxios = axios.create({
  baseURL: '/api/users'
})

const getUsersStats = () => {
  return new Promise((resolve,reject) => {
    (async() => {
      try{
        const usersStatsAxiosResult = await userAxios({
          url: '/stats'
        })

        resolve(usersStatsAxiosResult.data)

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
    })

  })
}


export default {
  getUsersStats
}