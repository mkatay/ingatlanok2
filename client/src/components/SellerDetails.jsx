import React from 'react'
import { useQuery } from 'react-query'
import { getSeller } from './utils'
import {Card,CardBody,CardText,Button,CardTitle} from 'reactstrap'

export const SellerDetails=({id,setId})=> {
    console.log(id)
    const {data,status}=useQuery(['seller',id],getSeller)
    status=='success' && console.log(data.data[0])
  return (
    <div>
     {status=='success' && <Card style={{ width: '18rem' }} className="m-1 ">
        <img    alt={data.data[0].imageUrl}    src={data.data[0].imageUrl}  />
        <CardBody>
            <CardTitle>{data.data[0].name}</CardTitle>
            <CardText>{data.data[0].phone}</CardText>
            <CardText>{data.data[0].rooms}</CardText>
            <CardText>{data.data[0].area}</CardText>
            <Button onClick={()=>setId(0)}>vissza... </Button>
        </CardBody>
        </Card>}
    </div>
  )
}
