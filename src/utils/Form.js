import React from 'react'
import { Message } from 'semantic-ui-react'
import isNil from 'lodash/isNil'
import keys from 'lodash/keys'
import flatten from 'flat'
import { animateScroll, scroller } from 'react-scroll'
import { axiosUpdateLettre } from '../actions/action_lettre'
import { logException } from './Utils'

export const renderError = ({meta: {touched, error, warning}}) => (
  touched && (error || warning)
    ? (
    <Message error visible={!!((touched && (error || warning)))}>
      {error || warning}
    </Message>
  )
    : false
)

export const getArrayOfFieldErrors = (errors) => {
  return keys(flatten(errors))
}

export const required = (value, allValues, props, message) => {
  //console.log('required : ', value)
  //console.log('required allValues : ', allValues)

  return (!isNil(value) && value !== '' ) ? undefined : message ? message : 'Ce champ est indispensable'

}

export const requiredSubField = (field, value, allValues, props, message) => {
  //console.log('requiredSubField : ', value)
  //console.log('required allValues : ', allValues)
  return ( !value || isNil(value[field]) || value[field] === '' ) ? message ? message : 'Ce champ est indispensable' : undefined
}

export const requiredConfirmation = (value, allValues) => {
  //console.log('requiredConfirmation : ', value)
  //console.log('allValues.demarche.nextStep : ', allValues.demarche.nextStep)
  //console.log('allValues.demarche.totalStep : ', allValues.demarche.totalStep)
  if ((allValues.demarche.nextStep === allValues.demarche.totalStep || allValues.demarche.nextStep === 'next') && value !== 'true') {
    return 'N\'oubliez pas d\'accepter et de confirmer !'
  }
  else {
    return undefined
  }
}

export const handleSubmitFail = (errors) => {
  console.log('handleSubmitFail  : ', errors)
  const errorFields = getArrayOfFieldErrors(errors)
  //console.log('errorFields : ', errorFields);
  for (let i = 0; i < errorFields.length; i++) {
    let fieldName = `position-${errorFields[i]}`
    if (document.querySelectorAll(`[id="${fieldName}"]`).length) {
      console.log('scrollTo : ', fieldName)
      scroller.scrollTo(fieldName, {smooth: true, offset: -200})
      break
    }
  }

}

export const handleSubmit = (values, dispatch) => {

  return new Promise((resolve, reject) => {
    return dispatch(axiosUpdateLettre(values.lettre._id, values.lettre))
      .then(response => {
        if (response.status === 200) {
          animateScroll.scrollToTop()
          return resolve(response)
        }
      })
      .catch(err => {
        logException(err)
        return reject(err)
      })
  })
}


