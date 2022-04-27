import React from 'react'

function ChooseLevel({id, onSelectLevel}) {
  return (
    <button className='chooseLevel__btn' id={id} onClick={onSelectLevel(id)}>{id}</button>
  )
}

export default ChooseLevel