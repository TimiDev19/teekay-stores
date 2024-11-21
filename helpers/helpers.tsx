import image1 from '@/assets/newimg1.jpg';
import img2 from '@/assets/newimg2.jpg';
import img3 from '@/assets/newimg3.jpg';
import img4 from '@/assets/newimg4.jpg';
import img5 from '@/assets/newimg5.jpg';
import img6 from '@/assets/newimg6.jpg';
import img7 from '@/assets/newimg7.jpg';
import img8 from '@/assets/newimg8.jpg';
import img9 from '@/assets/newimg9.jpg';
import img10 from '@/assets/newimg10.jpg';
import img11 from '@/assets/newimg11.jpg';
import img12 from '@/assets/newimg12.jpg';
import img13 from '@/assets/newimg13.jpg';
import img14 from '@/assets/newimg14.jpg';
import img15 from '@/assets/newimg15.jpg';
import img16 from '@/assets/newimg16.jpg';
import img17 from '@/assets/newimg17.jpg';
import img18 from '@/assets/newimg18.jpg';
import img19 from '@/assets/newimg19.jpg';
import img20 from '@/assets/newimg20.jpg';
import img21 from '@/assets/newimg21.jpg';
import img22 from '@/assets/newimg22.jpg';
import img23 from '@/assets/newimg23.jpg';
import img24 from '@/assets/newimg24.jpg';
import img25 from '@/assets/newimg25.jpg';
import img26 from '@/assets/newimg26.jpg';
import img27 from '@/assets/newimg27.jpg';

export const products = [
  {
    id: 1,
    name: "Black Beaded Bag",
    price: 20.00,
    image: image1,
  },
  {
    id: 2,
    name: "Lavender Beaded Bag",
    price: 20.00,
    image: img2,
  },
  {
    id: 3,
    name: "Green Beaded Bag",
    price: 20.00,
    image: img3,
  },
  {
    id: 4,
    name: "Baby Pink Beaded Bag",
    price: 20.00,
    image: img4,
  },
  {
    id: 5,
    name: "Green Spiral Beaded Bag",
    price: 20.00,
    image: img5,
  },
  {
    id: 6,
    name: "Larisa Cocktail Bag 6",
    price: 20.00,
    image: img6,
  },
  {
    id: 7,
    name: "White Fluffy Bag",
    price: 20.00,
    image: img7,
  },
  {
    id: 8,
    name: "Baby Blue Bag",
    price: 20.00,
    image: img8,
  },
  {
    id: 9,
    name: "Gold Heart Bag",
    price: 20.00,
    image: img9,
  },
  // {
  //   id: 10,
  //   name: "Larisa Cocktail Bag 10",
  //   price: 20.00,
  //   image: img10,
  // },
  {
    id: 11,
    name: "White Cylinder Bag",
    price: 20.00,
    image: img11,
  },
  {
    id: 12,
    name: "Yellow Beaded Bag",
    price: 20.00,
    image: img12,
  },
  {
    id: 13,
    name: "White and Gold Beaded Bag",
    price: 20.00,
    image: img13,
  },
  // {
  //   id: 14,
  //   name: "Larisa Cocktail Bag 14",
  //   price: 20.00,
  //   image: img14,
  // },
  // {
  //   id: 15,
  //   name: "Larisa Cocktail Bag 15",
  //   price: 20.00,
  //   image: img15,
  // },
  {
    id: 16,
    name: "Larisa Cocktail Bag 16",
    price: 20.00,
    image: img16,
  },
  {
    id: 17,
    name: "Larisa Cocktail Bag 17",
    price: 20.00,
    image: img17,
  },
  {
    id: 18,
    name: "Larisa Cocktail Bag 18",
    price: 20.00,
    image: img18,
  },
  {
    id: 19,
    name: "Larisa Cocktail Bag 19",
    price: 20.00,
    image: img19,
  },
  {
    id: 20,
    name: "Larisa Cocktail Bag 20",
    price: 20.00,
    image: img20,
  },
  {
    id: 21,
    name: "Larisa Cocktail Bag 21",
    price: 20.00,
    image: img21,
  },
  {
    id: 22,
    name: "Larisa Cocktail Bag 22",
    price: 20.00,
    image: img22,
  },
  {
    id: 23,
    name: "Larisa Cocktail Bag 23",
    price: 20.00,
    image: img23,
  },
  {
    id: 24,
    name: "Larisa Cocktail Bag 24",
    price: 20.00,
    image: img24,
  },
  {
    id: 25,
    name: "Larisa Cocktail Bag 25",
    price: 20.00,
    image: img25,
  },
  {
    id: 26,
    name: "Larisa Cocktail Bag 26",
    price: 20.00,
    image: img26,
  },
  {
    id: 27,
    name: "Larisa Cocktail Bag 27",
    price: 20.00,
    image: img27,
  },
];

export default products;

export const getProductById = (id: number) => {
  return products.find((product) => (product.id) === id);
}

export function smoothScrollToSection(
  event: React.MouseEvent,
  sectionId: string,
  offset = 0,
) {
  if (window.location.pathname === '/') {
    event.preventDefault();
    const targetElement = document.getElementById(sectionId.toLowerCase());
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }
}
