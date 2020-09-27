const express = require('express')
const routes = express.Router()
const axios =  require('axios')
const { serialize } = require('v8')

routes.get("/", (req,res)=> {

  
    res.render("index")

})

routes.get ("/livros", async(req,res)=>{
    
  
    const {search} = req.query

    if(search == undefined) {
        return res.render ("search-page")
    }

    try {

        const {data} = await axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=partial&maxResults=40&key=AIzaSyDxQaXZs_zptpW3VxvoQ4HaC2wOGzHspfs`)

    let {items} = data
        
    return res.render ("search-page", {items, search})
        
    } catch (error) {
        console.error(error)
    }

})

module.exports = routes