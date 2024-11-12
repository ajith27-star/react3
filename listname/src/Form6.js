import React, { useState } from "react";
export default function Sns() {
  const [formdata, setFromdata] = useState({});
  const [array, setArray] = useState([]);

  const newchage = (i) => {
    setFromdata(() => ({ ...formdata, [i.target.id]: i.target.value }));
  };