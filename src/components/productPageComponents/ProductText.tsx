import Col from 'react-bootstrap/Col';
const lorem ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus pretium congue venenatis. donec a ante interdum, mattis felis sed, sagittis nisi. nam congue vulputate ex, quis tincidunt urna pharetra eget. nam lobortis diam dapibus dapibus lacinia. vivamus at viverra justo. nunc auctor felis fringilla, placerat ante ac, fermentum erat. praesent bibendum lectus ut nunc fringilla rhoncus. sed porttitor, lectus ac lacinia mattis, tellus nunc accumsan velit, vel sollicitudin elit est nec elit. aenean quis dui tincidunt, porttitor sem semper, aliquam nulla. morbi tincidunt, velit id lacinia euismod, diam est auctor sapien, vel pellentesque neque dolor eget tellus. aenean varius magna eget neque lacinia venenatis. '

export const ProductText = (props : {}) => {
  return (
    <Col className='col-7 px-4 my-4'>
      <h2 className='border-bottom text-center'>Title</h2> 
      <p>{lorem}</p>
      <p>{lorem}</p>
    </Col>
  )
}
