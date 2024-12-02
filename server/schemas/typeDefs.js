
const typeDefs =
    `
type User {
_id: ID!
username: String!
email: String!
savedBooks:[Book]
}

type Book {
bookId: ID!
authors: [String]
description: String!
title: String!
image: String!
link: String!
}

type Auth {
token:ID!
user:User
}

input BookSubdoc {
authors: [String]
description: String!
bookId: String!
image: String
link: String
title: String!
}

type Query {
me: User
}


type Mutation {
login(email:String!,password:String!):Auth!
addUser(email:String!,username:String!, password:String!):Auth!
saveBook(bookData: BookSubdoc!): User
removeBook(bookId: ID!):User

}
`

module.exports = typeDefs;