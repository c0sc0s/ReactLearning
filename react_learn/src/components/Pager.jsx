import React from 'react';
import "./Pager.css"

export default function Pager(props) {
  return (
    <>
      <span className={`item ${props.cur === 1 ? "disabled" : ""}`} > 首页</span>
      <span className={`item ${props.cur === 1 ? "disabled" : ""}`} > 上一页</span>
    </>
  )
}
