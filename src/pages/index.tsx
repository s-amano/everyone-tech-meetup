import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import { GET_USERS } from '@/queries/queries'
import { GetUsersQuery } from '@/types/graphqlSchema'

const Home: NextPage = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS)
  return (
    <>
      <div className='text-red-500'>
        {data?.users.map((user) => (
          <div key={user.user_id}>{user.name}</div>
        ))}
      </div>
    </>
  )
}

export default Home
