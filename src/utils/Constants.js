const api_url = function () {
  console.log('ENV : ', process.env.REACT_APP_NODE_ENV)
  let api_url = ''
  if (process.env.REACT_APP_NODE_ENV === 'development') {
    if (!process.env.REACT_APP_BASE_URL) {
      api_url = 'http://localhost:8080/api'
    }
    else {
      api_url = process.env.REACT_APP_BASE_URL + '/api'
    }
  }
  else if (process.env.REACT_APP_NODE_ENV === 'production') {
    api_url = 'https://EXEMPLE.com/api'
  }
  else {
    api_url = 'http://192.168.43.109:8080/api'
  }

  return api_url
}

export const API_URL = api_url()

const stripe_key = () => {

  if (process.env.REACT_APP_NODE_ENV === 'production') {
    return 'STRIPE_KEY'
  }
  else {
    return 'STRIPE_KEY'
  }
}

export const STRIPE_KEY = stripe_key()


export const variables = {
  facebook_url : 'https://www.facebook.com/Lifebot.fr/',
  twitter_url : 'https://twitter.com/lifebot_fr',
  email : '',
  help_url : 'https://aide.lifebot.fr'
}