import React, { useRef } from 'react';
import leftimg from './leftarrow.svg';
import topRight from './top-right.png';
import topLeft from './top-left.png';
import bottomLeft from './bottom-left.png';

const Latest = ({ data }) => {
  const scrollContainer = useRef(null);

  const left = () => {
    const newScrollPosition = scrollContainer.current.scrollLeft - 300;
    smoothScroll(scrollContainer.current, newScrollPosition, 600);
  };

  const right = () => {
    const newScrollPosition = scrollContainer.current.scrollLeft + 300;
    smoothScroll(scrollContainer.current, newScrollPosition, 600);
  };

  const smoothScroll = (element, to, duration) => {
    if (duration <= 0) return;
    const difference = to - element.scrollLeft;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scrollLeft = element.scrollLeft + perTick;
      if (element.scrollLeft === to) return;
      smoothScroll(element, to, duration - 10);
    }, 10);
  };

  return (
    <div className='relative my-14 z-30 w-[100%] flex justify-center items-center'>
      {/* Decorative images */}
      <img className='absolute h-24 right-7 top-[-4vh] sm:h-36 sm:right-20 sm:top-[-7vh]' src={topRight} alt="" />
      <img className='absolute h-12 left-5 top-[-3vh] sm:h-20 sm:left-24 sm:top-[-7vh]' src={topLeft} alt="" />
      <img className='absolute h-16 left-4 top-[48vh] sm:h-32 sm:left-16 sm:top-96' src={bottomLeft} alt="" />

      <button onClick={left}>
        <img className='h-16 mx-1' src={leftimg} alt="" />
      </button>
      <div className='border-4 bg-[#FE3D4D] rounded-lg py-6 border-black w-[85%] h-[30rem]' style={{ boxShadow: '10px 10px 0px 0px black' }}>
        <div className='mb-2 syne-fon font-extrabold px-12 text-2xl sm:text-4xl border-white'>
          <span className='text-white'>Latest</span> posts
        </div>
        <div className='border-y-red-950 w-[100%] h-[88%]' style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', scrollBehavior: 'smooth' }} ref={scrollContainer}>
            {data.map((item, index) => (
              <a 
                href={item.blogLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index} 
                className='border-4 rounded-md border-black h-80 w-80 mx-4 my-6 inline-block align-middle'
              >
                <div className='h-full flex flex-col justify-end' style={{
                  backgroundImage: `url(${item.imageURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  <div className='bg-gradient-to-t from-black to-transparent h-full w-full flex items-end p-2'>
                    <h2 className='text-white text-lg bg-black bg-opacity-50 p-2'>{item.title}</h2>
                  </div>
                </div>
              </a>
            ))}
      </div>
      </div>
      <button onClick={right}>
        <img className='rotate-180 h-16 mx-3' src={leftimg} alt="" />
      </button>
    </div>
  );
};

export default Latest;
