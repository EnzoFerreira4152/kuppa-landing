import logo from '/mascot.png';

const KuppaMascot = () =>{
   const handleImageContextMenu = (e) => e.preventDefault();

   return(
      <div className='flex justify-center'>
      <img 
         src={logo}
         alt="Kuppa"
         width={320}
         height={320}
         draggable={false}
         onContextMenu={handleImageContextMenu}
      />
      </div>
   )
}

export default KuppaMascot;