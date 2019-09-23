const monk = require('monk')

const DbPassword = process.env.DbPassword
const DbName = process.env.DbName
const OtherDbName = process.env.OtherDbName
const exampleDbPassword = process.env.exampleDbPassword

// const dbUrl = `mongodb+srv://jmullen:${DbPassword}@cluster0-onieb.mongodb.net/${DbName}?retryWrites=true&w=majority`
// const dbUrl = `mongodb://jmullen:${DbPassword}@cluster0-shard-00-00-onieb.mongodb.net:27017,cluster0-shard-00-01-onieb.mongodb.net:27017,cluster0-shard-00-02-onieb.mongodb.net:27017/${DbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
const dbUrl = `mongodb://jmullen:${DbPassword}@cluster0-shard-00-00-onieb.mongodb.net:27017,cluster0-shard-00-01-onieb.mongodb.net:27017,cluster0-shard-00-02-onieb.mongodb.net:27017/${DbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`
const exampleDbUrl = `mongodb://Jmullen:${exampleDbPassword}@myclustername-shard-00-00-cnet8.mongodb.net:27017,myclustername-shard-00-01-cnet8.mongodb.net:27017,myclustername-shard-00-02-cnet8.mongodb.net:27017/${OtherDbName}?ssl=true&replicaSet=MyClusterName-shard-0&authSource=admin&retryWrites=true&w=majority`
const firstDbRequest = monk(dbUrl)
const exampleDbRequset = monk(exampleDbUrl)

// request by the Collection's Name
const data = firstDbRequest.get('Numbers')
const other = exampleDbRequset.get('Strings')

module.exports = {
    data,
    other
};