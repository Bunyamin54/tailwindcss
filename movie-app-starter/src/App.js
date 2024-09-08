import React from 'react';

const App = () => {
  return (
    <div className="bg-fuchsia-300 h-screen p-[20px]">

      <h1 className='text-6xl bg-[#ededed]'>TailwindCss Kurulum</h1>

      <h1 className="text-3xl font-bold  text-center underline">
        Hello world!
      </h1>

     <div className=' flex flex-col sm:flex-row  gap-3 mt-4'>
     <div className='flex flex-col justify-between items-center bg-slate-500 rounded-xl w-3/12 h-[250px]'>

      
     <img src="https://www.themoviedb.org/t/p/w1280/37p95Lpe7mfVX86ZcVr7TisAHPn.jpg" alt="" className="rounded-xl h-[200px] animate-pulse"    />

     <p className='line-clamp-1 hover:line-clamp-none'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque expedita laborum officiis exercitationem repudiandae id dolor.</p>
      
     
       </div>
       <div className= "card">

        <img src="https://www.themoviedb.org/t/p/w1280/37p95Lpe7mfVX86ZcVr7TisAHPn.jpg" alt="" className="rounded-xl h-[200px] animate-pulse"   />
        <p className='line-clamp-1 hover:line-clamp-none'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque expedita laborum officiis exercitationem repudiandae id dolor.</p>
       </div>

     </div>
       
    </div>
  );
};

export default App;
