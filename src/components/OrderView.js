// This component displays the current order by rendering the value of the order prop that is passed down from the parent component.
import React from 'react'


export default function OrderView(props) {
  return <div>{props.order}</div>;
}
