import React from "react"
import rgba  from "../__lib__/unit_to_rgba"
import transformPath from "./transformPath"

export default props => <path {...{
    d:           transformPath(props.Geometry, props.Matrix),
    stroke:      rgba(props.StrokeColor),
    strokeWidth: props.StrokeThickness,
    fill:        rgba(props.FillColor),
    // the transform here has been removed as we
    // apply it directly to the path definition
  }}/>
