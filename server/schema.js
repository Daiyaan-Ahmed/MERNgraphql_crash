const {projects, clients} = require('./sampleData')
const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema} = require('graphql')

//Client Type
const ClientType = new GraphQLObjectType({
    name:'Client',
    fields: ()=>({
        id: {type:GraphQLID},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        phone: {type:GraphQLString}
    })
})

const RootQueryType= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        client:{
            type: ClientType,
            args:{id: {type: GraphQLID}},
            resolve(parent, args){
                return clients.find((cleint)=> client.id===args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQueryType
})