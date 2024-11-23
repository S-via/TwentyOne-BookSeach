/* 
const typeDefs = 
`
type User {
_id: ID!
username: String!
email: String!
savedBook:[Book] # array of books
}

type Book {
authors:[String] # array
description:String!
bookId: String!
image:String!
link:String!
title: String!
}

type Query {
getSingleUser:(id:ID!,username:String): User
login(email:String, username:String, password:String!)
}

input bookSubdoc {
authors:[String]
description:String!
bookId:String!
image:String
link:String
title:String!
}

type Mutation {
createUser(email:String!,username:String! password:String!)
saveBook(bookSubdoc:bookSubdoc!): User
deleteBook(bookId:String!):User

}
`  */

