import React from 'react';
import Feature from './feature/featuredpost';
import Categories from './feature/categories';

function Part1({ featuredBlog }) {
  return (
    <div className='bg-[#FEB5B5] mt-10 mb-20 lg:grid  md:grid-cols-2'>
      <div className='flex justify-center'>
        <Feature blog={featuredBlog} />
      </div>
      <div className='flex justify-center items-center  h-[110vh]'>
        <Categories />
      </div>
    </div>
  );
}

export default Part1;
