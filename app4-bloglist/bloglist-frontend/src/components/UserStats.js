import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserStatsPopulateActionAsync } from '../reducers/userStatsReducer.js'


const StatContainer = ({ userStatsObj }) => {
  return (<>
    <tr>
      <td>
        {userStatsObj.username}
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