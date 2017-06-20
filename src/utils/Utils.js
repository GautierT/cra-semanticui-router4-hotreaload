import moment from 'moment'
import Raven from 'raven-js'
import numeral from 'numeral'
import findIndex from 'lodash/findIndex'

numeral.locale('fr')

export const formatDate = (value, format = 'DD/MM/YYYY') => {
  console.log('moment(value, format) : ', moment(value, format))
  return moment(value, format)
}

export const logException = (ex, context) => {
  Raven.captureException(ex, {
    extra: context
  })
  /*eslint no-console:0*/
  window.console && console.error && console.error(ex)
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, {type: contentType})
}


export const getFormatedPrice = (price, multiplier = 1) => {
  return numeral(price * multiplier).format('0,0[.]00 $')
}


export const isFirstCourrier = (courriers, type) => {
  return findIndex(courriers, {type: type}) === 0
}

export const isLastCourrier = (courriers, type) => {
  console.log('courriers.length : ', courriers.length);
  return findIndex(courriers, {type: type}) === 0
}