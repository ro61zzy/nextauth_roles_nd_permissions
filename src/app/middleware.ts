//without a defining matcher, this one line applies next-auth to the entire project
export { default } from "next-auth/middleware"

//applies next-auth to only matching routes -- (it's like regex)
export const config = { matcher: ["/extra", "/dashboard"] }