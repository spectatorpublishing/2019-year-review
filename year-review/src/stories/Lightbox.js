import React from "react";
import { storiesOf } from '@storybook/react';

// Test Lightbox
import Lightbox from '../components/Lightbox/Lightbox';
import { MemoryRouter } from 'react-router';

let sampleMedia = [
  {
    front_image: "https://images.unsplash.com/photo-1543444949-0b251f30a4e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    description: "Gran Vía (literally 'Great Way') is a street located in central Madrid, Spain. The street, sometimes referred to as the 'Spanish Broadway', is one of the city's most important shopping areas, with a large number of hotels and large movie theatres; however, in recent years, many of these theatres have been replaced by shopping centres. The Gran Vía serves as showcase of early 20th-century revival architecture, with architectural styles ranging from Vienna Secession style, Plateresque, Neo-Mudéjar, Art Deco, and others.",
    link: "https://unsplash.com/photos/TAW3H-7NV5k",
    author: "Alev Takil"
  },
  {
    front_image: "https://images.unsplash.com/photo-1551899892-56314e56f2c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80",
    title: "The Metropolis Building or Edificio Metrópolis on Gran Vía (Madrid)",
    link: "https://unsplash.com/photos/bviR09mlwoU",
    author: "Alberto Robledano"
  },
  {
    front_image: "https://images.unsplash.com/photo-1509845350455-fb0c36048db1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "The Plaza Mayor (English: Main Square) is a major public space in the heart of Madrid, the capital of Spain. It was once the centre of Old Madrid. It was first built (1580–1619) during the Habsburg period of Philip III's reign. Only a few Spanish blocks away is another famous plaza, the Puerta del Sol. The Plaza Mayor is for the people of Madrid and tourists to shop, walk around, eat, and enjoy the outdoors.",
    link: "https://unsplash.com/photos/OO0_7yJa-s0",
    author: "Victor Garcia"
  }
];

let fakeOnClose = () => console.log("Trigger Close");

storiesOf('Lightbox', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      {story()}
    </MemoryRouter>
  ))
  .add('Lightbox', () => <Lightbox 
      index={0} 
      media={sampleMedia} 
      authorLabel="photographer"
      onClose={fakeOnClose}
    />
  );
  