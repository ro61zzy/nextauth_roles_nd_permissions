//without a defining matcher, this one line applies next-auth to the entire project
export { default } from "next-auth/middleware"

//applies next-auth to only matching routes -- (it's like regex)
//https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/dashboard"] }