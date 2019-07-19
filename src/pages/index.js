import React from "react"

import Layout from "../components/layout"
import List from "../components/list"

import "../global-styles.css"

export default () => (
  <Layout>
    <div className="h-screen flex flex-wrap flex-col content-between">
      <div className="flex-50 p-4">top-left</div>
      <div className="p-4">
        <List items={[
          "Facebook",
          "Instagram",
          "Twitter",]}/>
      </div>
      <div className="flex-50 text-right p-4">
        <List items={[
          "All Project",
          "Architecture",
          "Industrial Design",
          "Interior",]}/>
      </div>
      <div className="text-right p-4">
        <List items={[
          "Press",
          "About Studio",
          "Awards",
          "Contact",]}/>
      </div>
    </div>
  </Layout>
)
