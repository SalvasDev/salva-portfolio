    const localSchemeLSKey = 'mp--color-scheme'
   
    export function setColorSchemeToLS(value) {
      try {
        window.localStorage.setItem(localSchemeLSKey, value)
      } catch  {
        console.log('Error en local storage')
      }
    } 