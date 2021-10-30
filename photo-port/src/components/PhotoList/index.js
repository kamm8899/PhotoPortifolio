import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) =>{
    const [photos] = useState([
        {
          name: 'Drachen Schloss',
          category: 'commercial',
          description: 'Dragon Castle in Cologne, Germany',
        },
        {
          name: 'Colorado Welcome sign ',
          category: 'commercial',
          description: 'Welcome Sign for Colorado on the Wyoming border',
        },
        {
          name: 'Stowe ',
          category: 'commercial',
          description: 'Stowe Cider Brewery',
        },
        {
          name: 'Stowe 2 ',
          category: 'commercial',
          description: 'Stowe Mountain ',
        },
        {
          name: 'Structure',
          category: 'commercial',
          description: 'Detroit Structure thinking hands',
        },
        {
          name: 'Vail',
          category: 'commercial',
          description: 'Downtown Vail, picture',
        },
        {
          name: 'Bruno',
          category: 'portraits',
          description: 'Bruno and me portrait',
        },
        {
          name: 'Dog1',
          category: 'portraits',
          description: 'A photo of my beautiful bernese mountain dog',
        },
        {
          name: 'Harry Potter ',
          category: 'portraits',
          description: 'Harry Potter Portrait ',
        },
        {
          name: 'Ice',
          category: 'portraits',
          description: 'Breckenridge Ice sculpture Portrait',
        },
        {
          name: 'Pizza',
          category: 'food',
          description: 'Margherita Pizza in Euskirchen Germany',
        },
        {
          name: 'Tiramisu',
          category: 'food',
          description: 'Tiramsu food in Germany',
        },
        {
          name: 'Molten Lava Cake',
          category: 'food',
          description: 'Molten Lava Cake',
        },
        {
          name: 'Pizza',
          category: 'food',
          description: 'Seabright Pizza',
        },
        {
          name: 'Lapland',
          category: 'landscape',
          description: 'Aerial Photo of Lapland ',
        },
        {
          name: 'Iceland',
          category: 'landscape',
          description: 'Great Wall in Iceland, where Games of Thrones was filmed',
        },
        {
          name: 'Panoramic Mountains',
          category: 'landscape',
          description: 'Panaromic Mountain View',
        },
      ]);

      const currentPhotos = photos.filter((photo) => photo.category === category);
  return (
    <div>
        <div className = "flex-row">
            {photos.map((image, i ) =>(
                <img
                src={require (`../../assets/small/${category}/${i}.jpeg`)}
                alt ={image.name}
                className= "img-thumbnail mx-1"
                key={image.name}
                />
            ))}
        </div>
    </div>
  );
}

export default PhotoList;