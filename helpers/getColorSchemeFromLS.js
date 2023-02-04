  const localSchemeLSKey = 'mp--color-scheme'

   export function getColorSchemeFromLS() {
      try {
       return window.localStorage.getItem(localSchemeLSKey)
      } catch  {
        console.log('Error en local storage')
      }          
    }
