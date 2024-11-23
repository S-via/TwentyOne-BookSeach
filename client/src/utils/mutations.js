import {gql} from 'apollo/client';

export const ADD_USER = gql `
mutation addUser($email:String!,$username:String!,$password:String!){
    addUser(username:$username,email:$email,password:$password){
        user {
            _id 
            username
            email
        }
    }

}
`

export const SAVE_BOOK = gql `
mutation saveBook($bookData:bookSubdoc!){
    saveBook(bookData:$bookData){
        _id
        username
        email
        savedBooks{
        bookId
        title
        authors
        description
        image
        link
        }
    }
}
`
export const DELETE_BOOK = gql `
mutation deleteBook($bookId:String!) {
    deleteBook(bookID:$bookId){
        _id
        username
        email
        savedBooks{
        bookId
        title
        authors
        description
        image
        link
        }
    }
}
`