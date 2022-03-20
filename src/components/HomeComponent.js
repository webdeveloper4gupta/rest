import React from 'react';
// here i import compoents from reactstrap
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
// this i write in the single page exercise
function RenderCard({item}) {

  return(
      <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {/* this below is the jaavdscript inside the jsx */}
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
  );

}
export default function Home(props) {
  return (
    <div className='container'>
      {/* // this i write in the single page exercise */}
        <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                  {/* rendrcars is the function  */}
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
    </div>
  )
}
