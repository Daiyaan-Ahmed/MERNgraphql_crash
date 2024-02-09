const express=require('express')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const schema=require('./schema')
const port=process.env.PORT || 5000
const app=express()


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})

// const projectType= new GraphQLObjectType({
//     name:"Project",
//     fields: ()=>({
//         name:{type: GraphQLString},
//         client:{type: ClientType},
//         description:{type:GraphQLString},
//         status:{type:GraphQLString}

//     })
// })