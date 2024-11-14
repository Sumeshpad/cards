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

<section className="bg-black h-full  py-44">

    <div className="flex flex-wrap w-full justify-center py-16 gap-6">
      {slice.primary.card.map((card, index) => (
        <div
          key={index}
          className=" w-[300px]  bg-neutral-700 text-white shadow-lg  border   border-transparent p-10 md:max-w-full flex flex-col justify-center items-center relative group transition-all duration-100 hover:bg-gradient-to-b hover:from-neutral-700 hover:to-purple-700  hover:border hover:border-purple-700"
        >
          <div className="flex mb-4">
            <span className={`text-sm ${card.availability ? 'text-green-400' : 'text-red-400'}`}>
              {card.availability ? 'Available' : 'Unavailable'}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center">{card.cardheading}</h2>
          <div className="flex  mb-10  text-center">
          <div className="flex items-center gap-2 mx-4">
  <span className="text-2xl font-semibold ">{card.number_available_games}</span>
 
  <span className="text-sm max-w-[120px] leading-4">{card.games_available}</span>
</div>
<span className="h-[40px] w-[2px] bg-white "></span>
            <div className="flex items-center gap-2 mx-4">
              <span className="text-2xl font-semibold">{card.number_consoles}</span>
              <span className="text-sm max-w-[120px] leading-4 " >{card.consoles_available}</span>
            </div>
          </div>
          <PrismicNextLink field={card.button} className="w-full block">
            <button className="w-full bg-white text-black py-4 rounded-full transition-all duration-100 hover:bg-amber-200">{card.button.text}</button>
          </PrismicNextLink>
          <PrismicNextLink field={card.book_a_call} className="w-full block">
            <p className="text-center mt-4 text-gray-300 underline cursor-pointer">
              {card.book_a_call.text}
            </p>
          </PrismicNextLink>
          <div className="my-6 mb-0 relative">
            <PrismicNextImage field={card.controller_image} className="w-60 h-40  -mb-10 transform transition-transform duration-300 group-hover:-translate-y-2" />
          </div>
        </div>
      ))}
    </div>
  
</section>


     
    </section>
  );
};

export default Top;
