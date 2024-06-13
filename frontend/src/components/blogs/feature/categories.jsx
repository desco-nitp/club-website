import React from 'react'

const Items=({title,width})=>{
       
        // console.log(width)
    return (
        <div className={`w-${width} h-14 lg:hover:scale-[107%] hover:duration-400  lg:scale-[110%] md:scale-[120%] xl:scale-[100%] border-2 border-black bg-white rounded-xl flex justify-center items-center text-sm font-medium`}>
            {title}
        </div>
    
);
}
function Categories() {
    const category=["Arts and Crafts (5)", "Grocery, Food and Produce (15)", "Sport, Health and Fitness (21)", "Electrical and Computers (5)", "Motor Service and Parts (5)", "Business and Professional (29)", "Gifts (21)"];
    const width=["32","52",`56`,"64","56","52","32"];
  
    return (
    <>
        <div className='h-full sm:h-[90%] xl:h-full w-[80%] md:w-[45%] z-20 rounded-[100%] bg-[#FE3D4D] flex flex-col items-center  border-[2.5px] border-black' style={{boxShadow:"-10px -10px  black inset"}}>
            <div className='mt-10 w-80 ml-5 h-14 py-1 pb-2 rounded-2xl -rotate-6 absolute bg-black flex justify-center items-center '>
                <p className='text-[3.1rem] text-white font-extrabold'>CATEGORIES</p>
            </div>
            <div className='h-full flex flex-col pt-10 gap-10 md:gap-[2.8rem] xl:gap-5 justify-center items-center '>
                {category.map((text,ind)=>{
                    return (
                        <Items 
                            title={text}
                            key={ind}
                            
                            width={width[ind]}
                        />
                    );
                })}
            </div>
        </div>
    </>
  )
}

export default Categories