import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserStatsPopulateActionAsync } from '../reducers/userStatsReducer.js'
import './css/UserStats.css'


const StatContainer = ({ userStatsObj }) => {
  return (<>
    <tr>
      <td>
        <Link to={`/users/fetch/${userStatsObj.id}`}>{userStatsObj.username}</Link>
      </td>
      <td>
        {userStatsObj.blogs_count}
      </td>
    </tr>
  </>)
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
    <h2>User Stats:</h2>
    {userStats ? (<>
      <table>
        <tr>
          <th>Username</th>
          <th>Number of Blogs</th>
        </tr>
        {userStats.map(userStatsObj => (
          <StatContainer key={userStatsObj.id} userStatsObj={userStatsObj} />
        ))}
      </table>
    </>) : <div>NA</div>}
  </div>)

}


export default UserStats