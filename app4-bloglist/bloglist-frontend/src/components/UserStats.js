import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserStatsPopulateActionAsync } from '../reducers/userStatsReducer.js'


const StatContainer = ({ userStatsObj }) => {
  return (<div>
        Username: {userStatsObj.username}
    <br />
        Number of Blogs: {userStatsObj.blogs_count}
  </div>)
}

const UserStats = () => {
  const userStats = useSelector((state) => state.user_stats)
  const dispatch = useDispatch()

  const refreshUserStats = () => {
    dispatch(getUserStatsPopulateActionAsync())
  }

  useEffect(() => {
    refreshUserStats()
  },[])

  return (<div>
    {userStats ? userStats.map(userStatsObj => (
      <StatContainer key={userStatsObj.id} userStatsObj={userStatsObj} />
    )) : <div>NA</div>}
  </div>)

}


export default UserStats