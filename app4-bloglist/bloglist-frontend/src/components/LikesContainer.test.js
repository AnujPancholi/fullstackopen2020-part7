import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, act } from '@testing-library/react'


import LikesContainer from './LikesContainer.js'

import './css/Blog.css'


describe('Tests for LikesContainer component',() => {
  test('LikesContainer calls addLikes function passed in props',() => {
    const NUMBER_OF_BUTTON_CLICKS = 2

    const addLike = jest.fn(() => Promise.resolve({
      isSuccessful: true
    }))

    const component = render(
      <LikesContainer likes={0} blogId={'id'} addLike={addLike} />
    )

    act(() => {
      const likeButton = component.getByText('Like')


      for(let i=0;i<NUMBER_OF_BUTTON_CLICKS;++i){
        fireEvent.click(likeButton)
      }
    })




    expect(addLike.mock.calls.length).toBe(NUMBER_OF_BUTTON_CLICKS)



  })
})