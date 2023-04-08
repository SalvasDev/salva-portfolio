  export const handleScroll = () => {
    const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const distanceInPercentage = (distanceFromTop / totalHeight) * 100;

    if (distanceInPercentage >= 5 ) { // Cambia este valor para el porcentaje que desees

      setShowVerticalBtn(true)  
    } else {
      setShowVerticalBtn(false)
    }
};