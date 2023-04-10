import React, { useContext, useEffect } from 'react'
import IndexContext from '../context/IndexContext'
import Link  from 'next/link'


export default function IndexBarDetail  ({ ind })  {

  const { selected, setSelected } = useContext(IndexContext)
  var { selec, indexSelected } = selected    

useEffect(()=> {

    ///// Observer Start //////
    const observerStart = new IntersectionObserver( function(entries) {
      if ( entries[0].isIntersecting ) {
        const actualIndex = {
        selec : true,
        indexSelected : 'Inicio'      
      }    
     localStorage.setItem('indexSelected', actualIndex.indexSelected);
      setSelected( actualIndex )

      } else {
        return      
      }
    })

    // Element to observe
    observerStart.observe(document.querySelector('#start'));

  return () => {
      observerStart.disconnect(); // función de limpieza para eliminar el observador
  };    

  },[])


  useEffect(()=> {

    ///// Observer Skills //////
    const observer1 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {
  
        var contMenu = document.querySelector('.skills__section')
        contMenu.classList.add('animate__fadeInUp')

        const actualIndex = {
        selec : true,
        indexSelected : '01'      
      }    
      localStorage.setItem('indexSelected', actualIndex.indexSelected);
      setSelected( actualIndex )

      } else {
        return
        
      }
    })


    // Element to observe
  observer1.observe(document.querySelector('#ind__one'));
    
  return () => {
      observer1.disconnect(); // función de limpieza para eliminar el observador
  };

  },[])


  useEffect(()=> {

    ///// Observer Projects //////
    const observer2 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {

        var contMenu = document.querySelector('.projects__section')
        contMenu.classList.add('animate__fadeInUp')

        const actualIndex = {
        selec : true,
        indexSelected : '02'      
      }    

      localStorage.setItem('indexSelected', actualIndex.indexSelected);
      setSelected( actualIndex )


      } else {
        return
        
      }
    })

    // Element to observe
    observer2.observe(document.querySelector('#ind__two'));
    return () => {
      observer2.disconnect(); // función de limpieza para eliminar el observador
    };


  },[])


  useEffect(()=> {

    ///// Observer Us ///// 
    const observer3 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {

        var contMenu = document.querySelector('.about__section')
        contMenu.classList.add('animate__fadeInUp')
      
        const actualIndex = {
        selec : true,
        indexSelected : '03'      
      }    
      localStorage.setItem('indexSelected', actualIndex.indexSelected);
      setSelected( actualIndex )

      } else {
        return
        
      }
    })
    // Element to observe
    observer3.observe(document.querySelector('#ind__three'));
    return () => {
      observer3.disconnect(); // función de limpieza para eliminar el observador
     };

  },[])




  useEffect(()=> {

    ///// Observer Contact //////
    const observer4 = new IntersectionObserver( function(entries) {

      if ( entries[0].isIntersecting ) {

        var contMenu = document.querySelector('.contact__section')
        contMenu.classList.add('animate__fadeInUp')

        const actualIndex = {
        selec : true,
        indexSelected : '04'      
      }    
      localStorage.setItem('indexSelected', actualIndex.indexSelected);
      setSelected( actualIndex )
      
      } else {
        return
        
      }
    })

    // Element to observe
    observer4.observe(document.querySelector('#ind__four'));
    return () => {
      observer4.disconnect(); // función de limpieza para eliminar el observador
    };

  },[])


  var newInd = 
      ind === 'Inicio' ? 'start' 
      : ind === '01' ? 'ind__one' 
      : ind === '02' ? 'ind__two' 
      : ind === '03' ? 'ind__three' 
      : ind === '04' ? 'ind__four' 
      : null

  var identi = '#' + newInd  
 
  var btnSelected = selec && (indexSelected === ind)  ? 'index__item selected' : 'index__item'  
  
  return (
    <a href={identi} className={ btnSelected } prefetch={true} scroll={false}>{ ind } </a>
  )
}











