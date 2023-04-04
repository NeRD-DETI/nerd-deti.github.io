import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
export default function Item(props){
    return(
        // <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]" >
        //       <img //className="w-32 h-24 mb-4" 
        //         src={props.image} alt={props.name} /> 
        //       <h4 className="h4 mb-2">{props.name}</h4>
        //       <p className="text-lg text-gray-400 text-center">{props.description}</p>
        // </div>
      <Card className="w-96">
        <CardHeader color="blue" className="relative h-56">
          <img
            src={props.image}
            alt={props.name}
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
          {props.name}
          </Typography>
          <Typography>
          {props.description}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">Saber mais</Typography>
        </CardFooter>
        </Card>
    );
}