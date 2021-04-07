import React from "react"
import { Link } from "gatsby"
import Counter from "../components/counter"
import Layout from "../components/layout"

export default function Home() {
  
  return <div style={{ color: 'tomato' }}>
    <Counter></Counter>
    <Layout>
      <h1>Amazing Birds Eating Things</h1>
      <div>
        <img
          src="http://vireo.ansp.org/bird_academy/bird_food_images/American%20Robin%20n09-2-006.jpg"
          alt="Bird eating things"
        />
      </div>
    </Layout>
    </div>
}
