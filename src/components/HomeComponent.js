import React from 'react';
// here i import compoents from reactstrap
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
  // this i will import inthunk exercise
  import { Loading } from './LoadingComponent';
  // import { baseUrl } from '../shared/baseUrl';
// this i write in the single page exercise

// function RenderCard({item}) {

//   return(
//       <Card>
//           <CardImg src={item.image} alt={item.name} />
//           <CardBody>
//           <CardTitle>{item.name}</CardTitle>
//           {/* this below is the jaavdscript inside the jsx */}
//           {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
//           <CardText>{item.description}</CardText>
//           </CardBody>
//       </Card>
//   );


// }

// i make modification inthe thunk exercise

function RenderCard({item, isLoading, errMess}) {
    
  if (isLoading) {
      return(
              <Loading />
      );
  }
  else if (errMess) {
      return(
              <h4>{errMess}</h4>
      );
  }
  else 
      return(
          <Card>
              <CardImg src={item.image} alt={item.name} />
              {/* i make changes in the fetch api */}
              
              {/* <CardImg src={baseUrl + item.image} alt={item.name} /> */}
              <CardBody>
              <CardTitle>{item.name}</CardTitle>
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
                    {/* <RenderCard item={props.dish} /> */}
{/* i make here  modificrtion in the thunk execise */}
<RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}  />
{/* i make changes in the fetch api */}
{/* <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} /> */}
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
