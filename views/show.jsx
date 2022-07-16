const React = require('react')
const Default = require('./layouts/Default')
 function show ({bread}) {
    //confirm we are getting our data in the terminal
    //console.log(bread.name)
      return(
        <Default>
            <h2> show page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten
                    ? <span> does</span>
                    : <span> does not </span>
                }
                have gluten
            </p>
            <img src={bread.image} alt={bread.name} />
            <li><a href="/breads"> Go home</a></li>
        </Default>
      )
 }
 module.exports = show