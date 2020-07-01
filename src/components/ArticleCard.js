import React from "react"

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <h2>{props.id}</h2>
      <h2>{props.cardTitle}</h2>
      <p>{props.content}</p>
    </div>
  )
}
