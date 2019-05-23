import React from 'react'

const TrainingComponent = ({number, onClick}) => {
  let addNumber = () => onClick(number + 1);
  return (
    <div>
      <p>There will be something in near future.</p>
      <button onClick={addNumber}>Add number</button> {number}
    </div>
  )
}

export default TrainingComponent