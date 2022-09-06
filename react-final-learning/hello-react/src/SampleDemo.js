import React from 'react'

import ClassDemo from './ClassDemo';
export default function SampleDemo() {
    const hobbies = [{
        "name":'Suraj',
        "likesTo":'Code'
    }]
  return (
    <ClassDemo hobbies={hobbies}/>
  )
}
