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
    bookId: String!
authors:[String] # array
description:String!
title: String!
image:String!
link:String!
}

type Auth {
token:String!
user:User!
}

input bookSubdoc {
authors:[String]
description:String!
bookId:String!
image:String
link:String
title:String!
}

type Query {
me:User!
}


type Mutation {
    login(email:String!,password:String!):Auth!
addUser(email:String!,username:String! password:String!):Auth!
saveBook(bookData:bookSubdoc!): User!
removeBook(bookId:String!):User!

}
`  */

