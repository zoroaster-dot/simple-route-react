import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../config';
import axios from 'axios';



const UserDetailPages = () => {
  const [user, setUsers] = useState(null)
  const params = useParams()
  useEffect( () => {
    const getUsers = async () => {
      setUsers(null)
      try {
        const { data } = await axios.get(`${API}users/${params?.id}`)
        setTimeout(() => {
          setUsers(data)
        }, 2000);
      } catch (e) {
        // 
      }
    }
    getUsers()
  }, [])
  return (
    <div>
      <h1>
        UserDetailPages {params.id}
      </h1>
        <>
          <div>
            Nama: {user?.name}
          </div>
          <div>
            Username: {user?.username}
          </div>
          <div>
            Id: {user?.id}
          </div>
          <div>
            Email: {user?.email}
          </div>
        </>
    </div>
  )
}

export default UserDetailPages;
