import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default  withPageAuthRequired (function About({ user }){
    return (
        <div>Hello {user.name}</div>
    )
    })