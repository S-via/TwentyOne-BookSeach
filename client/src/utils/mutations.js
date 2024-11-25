import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user {
            _id
            email
        }
    }
    }
    `


/* ADD LOGIC AND ATTACH IT TO SERVER.JS WITH APOLLO SERVER */

export const ADD_USER = gql`
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

export const SAVE_BOOK = gql`
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
export const REMOVE_BOOK = gql`
mutation removeBook($bookId:String!) {
    removeBook(bookID:$bookId){
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