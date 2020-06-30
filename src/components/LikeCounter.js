import React, { useState } from "react" // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0
  const [numLikes, set_numLikes] = useState(initial_numLikes) // <- using state!

  console.log("what is numLikes?", numLikes)
  console.log("what is set_numlikes?", set_numLikes)

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes)
    set_numLikes(numLikes + 1)
  }

  const reset = () => {
    set_numLikes(0)
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
        <button onClick={reset}>reset</button>
      </p>
    </div>
  )
}
