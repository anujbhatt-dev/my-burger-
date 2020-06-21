import React from "react";
const buildControl = props =>{
  return <div className="buildControl">
      <div className="label">{props.label}</div>
      <button className="less" onClick={props.removed} disabled={props.disabled}>less</button>
      <button className="more" onClick={props.added}>more</button>
  </div>
};
export default buildControl;
