// Fake localStorage implementation.
// Mimics localStorage, including events.
// It will work just like localStorage, except for the persistant storage part.
console.log('LocalStorageUtils')
const fakeLocalStorage = function () {
  let fakeLocalStorage = {}
  let storage

  // If Storage exists we modify it to write to our fakeLocalStorage object instead.
  // If Storage does not exist we create an empty object.
  if (window.Storage && window.localStorage) {
    storage = window.Storage.prototype
  } else {
    // We don't bother implementing a fake Storage object
    window.localStorage = {}
    storage = window.localStorage
  }

  // For older IE
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }

  const dispatchStorageEvent = (key, newValue) => {
    const oldValue = (key == null) ? null : storage.getItem(key) // `==` to match both null and undefined
    const url = window.location.href.substr(window.location.origin.length)
    const storageEvent = document.createEvent('StorageEvent') // For IE, http://stackoverflow.com/a/25514935/1214183

    storageEvent.initStorageEvent('storage', false, false, key, oldValue, newValue, url, null)
    window.dispatchEvent(storageEvent)
  }

  storage.key = (i) => {
    const key = Object.keys(fakeLocalStorage)[i]
    return typeof key === 'string' ? key : null
  }

  storage.getItem = (key) => {
    return typeof fakeLocalStorage[key] === 'string' ? fakeLocalStorage[key] : null
  }

  storage.setItem = (key, value) => {
    dispatchStorageEvent(key, value)
    fakeLocalStorage[key] = String(value)
  }

  storage.removeItem = (key) => {
    dispatchStorageEvent(key, null)
    delete fakeLocalStorage[key]
  }

  storage.clear = () => {
    dispatchStorageEvent(null, null)
    fakeLocalStorage = {}
  }
}

// Example of how to use it
if (typeof window.localStorage === 'object') {
  // Safari will throw a fit if we try to use localStorage.setItem in private browsing mode.
  try {
    localStorage.setItem('localStorageTest', 1)
    localStorage.removeItem('localStorageTest')
    console.log('LocalStorage is available')
  } catch (e) {
    console.log('LocalStorage not available. Faking it...')
    fakeLocalStorage()
  }
} else {
  // Use fake localStorage for any browser that does not support it.
  fakeLocalStorage()
}

const isAvailable = (function isAvailableIffe () {
  const test = 'test'
  try {
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }

}())

const util = {
  get(key) {
    if (isAvailable) {
      return localStorage.getItem(key)
    }
    return null
  },

  set(key, value) {
    if (isAvailable) {
      return localStorage.setItem(key, value)
    }

    return null
  },

  remove(key) {
    if (isAvailable) {
      return localStorage.removeItem(key)
    }

    return null
  }
}

export default util