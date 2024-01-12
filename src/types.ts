export type Post = {
    id?: number,
    author: string,
    title: string,
    content: string,
    publishedOn: Date }

export type Submission = {
    id?: number,
    title: string,
    name: string,
    email: string,
    content: string,
    submitOn: Date }
