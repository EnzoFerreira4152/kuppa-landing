const KuppaIMG = ({ src = '/mascot.png', alt = 'Kuppa', width = 320, height = 320 }) => {
   const handleImageContextMenu = (e) => e.preventDefault();

   return (
      <div className='flex justify-center'>
         <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            draggable={false}
            onContextMenu={handleImageContextMenu}
         />
      </div>
   );
};

export default KuppaIMG;
