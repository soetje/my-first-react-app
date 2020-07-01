import React, { useState, useEffect } from "react"
import ArticleCard from "./ArticleCard"
import Timeout from "await-timeout"
import axios from "axios"

export default function ArticleList() {
  const [articles, set_articles] = useState()

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!")

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      )
      await Timeout.set(2000)
      console.log("Got back:", res)
      set_articles(res.data)
    }

    doSomeDataFetching()
  }, [])

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      <button
        onClick={() => {
          set_articles([])
        }}
      >
        clear notifications
      </button>

      {articles
        ? articles.map((article) => (
            <ArticleCard
              key={article.id}
              cardTitle={article.title}
              content={article.body}
            />
          ))
        : "loading..."}
    </div>
  )
}
