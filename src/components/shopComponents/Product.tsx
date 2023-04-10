import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import {
  PRODUCT_BG,
  CATEGORY_COL,
} from './ProductStyles'

type ProductProps = {
 id:number,
 image:any,
 name: String,
 price: String;
 category1: String;
 category2?: String;
 category3?: String;
}

export const Product = (props : ProductProps ) => {
  return (
    <Col className='col-md-3'>
      <Card className='border-0'>
        <div className="card-img-top">
          <div style={PRODUCT_BG as React.CSSProperties} className="justify-content-center align-items-center d-flex rounded-top">
            <Image src={props.image} className="p-3 img-fluid w-auto h-75" />
          </div>
        </div>
        <div className="card-body pt-2 ps-1 pe-0">
          <h3 className='card-title fs-5'>{props.name}</h3>
          <Row className='ms-auto'> 
            <Col style={CATEGORY_COL as React.CSSProperties} className='col-auto fs-6 border rounded m-1'> {props.category1} </Col>
            <Col style={CATEGORY_COL as React.CSSProperties} className='col-auto fs-6 text-wrap border rounded m-1'> {props.category2} </Col>
          </Row>
          <div className="d-flex flex-row-reverse">
            <p className="text-body-secondary">alkaen {props.price}</p>
          </div>
        </div>
      </Card>
    </Col>
  )
}
