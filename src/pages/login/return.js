import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import { loginApi } from '@/services/auth'
import { useDispatch } from 'react-redux'
import {
  Redirect,
} from 'react-router-dom'

const LoginReturnPage = ({ location }) => {
  const dispatch = useDispatch()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    const param = new URLSearchParams(hash)

    const token = {
      tokenType: param.get('token_type'),
      accessToken: param.get('access_token'),
      expiresIn: param.get('expires_in'),
    }

    dispatch({ type: 'SetToken', token })

    loginApi(token)
      .then((user) => {
        setDone(true)
        dispatch({ type: 'SetUser', user })
      })
  }, [])

  return (
    <>
      {done
        ? <Redirect to={{ pathname: '/', state: { from: location } }} />
        : null}
    </>
  )
}

LoginReturnPage.propTypes = {
  location: propTypes.shape({
    pathname: propTypes.string.isRequired,
  }).isRequired,
}

export default LoginReturnPage
