import React from 'react'

//serve para comunicacao de dados entre componentes
const PropsExemple = ({nome, idade}) => {
  return (

    <div>
        {/* maneira de passar dados */}
      <h1>Olá {nome}</h1>
      <h2> eu tenho {idade} anos</h2>
    </div>
  )
}

export default PropsExemple
