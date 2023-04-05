import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Item(props) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={props.image}
          alt={props.name}
          style={{alignSelf: "center"}} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {props.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Typography color="blue" className="font-medium" textGradient>
          Saber mais
        </Typography>
      </CardFooter>
    </Card>
  );
}