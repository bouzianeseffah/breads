const React = require('react')
const bread = require('../models/bread')
 const Default = require('./layouts/Default')

 function Index({breads}) {
    return (
        <Default>
            <h2>Index page</h2>
           {/* <p>i have {breads[0].name} bread!</p>*/}
           <ul>
            {
                breads.map((bread, index) => {
                    return(<li key={index}>
                        <a href={`/breads/${index}`}> 
                        {bread.name}
                        </a> 
                    </li>
                    )
                })
            }
           </ul>
        </Default>
    )
 }
 module.exports = Index