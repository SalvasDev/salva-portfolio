  //  Solo es una muestra por si se requiere   
   
   const getStays = async () => {


        if (busqueda === '') return;

              const response = await fetch("stays.json");
              const resultado = await response.json();
              
              
              if ( busqueda.length === 0) {
                  guardarStays(resultado); 
                  return;
              } else {
                const filtStays = resultado.filter(resultado => (resultado.city === busqueda) && (resultado.maxGuests >= nguests));
                guardarStays(filtStays);
              }     

          } 
          getStays(); 