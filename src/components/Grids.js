import React, { useContext } from 'react'
import * as d3 from 'd3'
import { GridContext } from "../App"

function Grids() {
  const { dimensions, attributes } = useContext(GridContext);
  const color = '#0000ff'
  const drawingWidth = dimensions.width + 2
  const drawingHeight = dimensions.height + 2

  const drawSquarePattern = ({svg, width = 960, height = 600, size}) => {
    const squareSize = size
    svg.append('defs')
       .append('pattern')
       .attr('id', 'grid')
       .attr('x', '0')
       .attr('y', '0')
       .attr('width', size)
       .attr('height', size)
       .attr('patternUnits', 'userSpaceOnUse')
       .append('rect')
       .attr('x', '0')
       .attr('y', '0')
       .attr('width', size)
       .attr('height', size)
       .attr('fill', 'none')
       .attr('stroke', color)
       .attr('stroke-width', '0.3px')
       svg.append('rect')
       .attr('fill', 'url(#grid)')
       .attr('stroke', color)
       .attr('width', width)
       .attr('height', height)
       .attr('x', '0px')
       .attr('y', '0px')
       .attr('transform', 'translate(0,0)')
  }
  const draw = ({svg, width = 960, height = 600, size = 10}) => {
    drawSquarePattern({svg : svg, width: width, height: height, size: size})
  }

  const D3Component = ({ render, height, width }) => {
    const ref = React.useRef(null)
    React.useEffect(() => {
      render(d3.select(ref.current));
    })
    return (
      <svg width={960} height={600}>
        <g ref={ref} transform={`translate(0, 0)`} />
      </svg>
      )
  }
  
  return (
    <D3Component render={svg => draw({svg: svg, width: drawingWidth, height: drawingHeight, size: attributes.size})} />
  )
}


export default Grids
/*    return (
    <nav>
      <div>
        Grid here of type {kind}
      </div>
    </nav>
  );
*/