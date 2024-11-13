/**
 * @typedef {import("@prismicio/client").Content.TopSlice} TopSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopSlice>} TopProps
 * @param {TopProps}
 */
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
const Top = ({ slice }) => {
  
  console.log(slice.primary);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>

<section className="bg-black py-8">
  <div className="container mx-auto px-24 md:px-24 lg:px-24">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {slice.primary.card.map((card, index) => (
        <div
          key={index}
          className=" max-w-full bg-neutral-700 text-white shadow-lg  p-6 md:max-w-full flex flex-col justify-center items-center"
        >
          <div className="flex mb-4">
            <span className={`text-sm ${card.availability ? 'text-green-400' : 'text-red-400'}`}>
              {card.availability ? 'Available' : 'Unavailable'}
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-center">{card.cardheading}</h2>
          <div className="flex justify-between mb-4">
            <div>
              <span className="text-2xl font-semibold">{card.number_available_games}</span>
              <span className="text-sm">{card.games_available}</span>
            </div>
            <div>
              <span className="text-2xl font-semibold">{card.number_consoles}</span>
              <span className="text-sm">{card.consoles_available}</span>
            </div>
          </div>
          <PrismicNextLink field={card.button} className="w-full block">
            <button className="w-full bg-white text-black py-2 rounded-full">{card.button.text}</button>
          </PrismicNextLink>
          <PrismicNextLink field={card.book_a_call} className="w-full block">
            <p className="text-center mt-4 text-gray-300 underline cursor-pointer">
              {card.book_a_call.text}
            </p>
          </PrismicNextLink>
          <div className="mt-4">
            <PrismicNextImage field={card.controller_image} className="w-full object-contain h-40 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     
    </section>
  );
};

export default Top;
