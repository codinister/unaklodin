'use client'

import { useParams } from "next/navigation"

const Policies = () => {

  const {id} = useParams()



  return (
    <div>{id}</div>
  )
}

export default Policies