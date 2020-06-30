import React, { useState } from "react"

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  const changeLike = () => {
    setIsLiked(!isLiked)
  }


  return (
    <div>
      <button onClick={changeLike}>
      {isLiked === false ? 'Like this' : 'You have liked this. Click to unlike'}
      </button>
    </div>
  )
}

