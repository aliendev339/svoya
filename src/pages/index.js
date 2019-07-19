import React from "react"

import Layout from "../components/layout"

import "../global-styles.css"

export default () => (
  <Layout>
    <div className="h-screen flex flex-wrap flex-col content-between">
      <div className="flex-50 p-4">top-left</div>
      <div className="p-4">bottom-left</div>
      <div className="flex-50 text-right p-4">top-right</div>
      <div className="text-right p-4">bottom-right</div>
    </div>
  </Layout>
)
