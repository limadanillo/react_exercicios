import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './menber'

ReactDOM.render(
    <Family lastName="Lima" >
        <Member name="Danillo" />        
    </Family>
    ,
     document.getElementById('app'))
 