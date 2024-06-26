import dynamic from 'next/dynamic';
const DynamicAccordion = dynamic(() => import('./components/accordion'), { ssr: false });

export const metadata = {
  title: 'Joe Ward | Home',
  description: 'Read my thoughts on operational efficiency, business analytics, and more.',
};

export default function Page() {
  return (
    <section w-full>
      
      <h1 className="font-medium text-2xl tracking-tighter text-black dark:text-white">Hey 👋 I'm Joe Ward</h1>
      <div className='mt-3 mb-3 h-0.5 w-full  bg-gradient-to-r from-amber-200 to-white'> </div>

        <div className='flex my-8 md:my-14 flex-wrap place-content-center md:flex-nowrap '>
          <div className="flex-none w-32 h-32 ml-10 mr-10 rounded-full overflow-hidden border-black dark:border-white border-2">
            <img
              src='/prof.jpg'
              alt='prof'
              className="w-full h-full object-cover "
            />
          </div>

          <div className='mt-8 md:m-auto w-full'>
            <ul className="flex flex-nowrap w-full space-x-2 mb-3">
            <div className='cursor-none w-full h-10 text-center justify-center items-center flex flex-nowrap rounded border p-1 text-xs leading-4 border-neutral-700 text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800'>
                <div className=''><img
                    src='/lightbulb.png'
                    alt='prof'
                    className="w-auto h-6 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-4 inline-flex  items-center ">
                    Operational Excellence
                </p>
            </div>
            <div className='cursor-none w-full h-10 text-center  justify-center items-center flex flex-nowrap rounded border p-1 text-xs leading-4 border-neutral-700 text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800'>
                <div className=''><img
                  src='/growth.png'
                  alt='prof'
                  className="w-auto h-5 object-cover ml-2"
                /></div>
                <p className="w-full h-10 pl-4 inline-flex  items-center ">
                  Bus. Intelligence & Growth
                </p>
              </div>
            </ul>

            <ul className='w-full'>
                <p className="cursor-none w-full justify-center mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700  text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800">
                  People & Project Manager
                </p>
                <p className="cursor-none w-full justify-center  mb-3 inline-flex items-center rounded border  p-1 text-xs leading-4 border-neutral-700  text-neutral-100 no-underline bg-gradient-to-r from-neutral-800 via-black to-neutral-800">
                  Executive Partner
                </p>
            </ul>
          </div>
        </div>

        <div className='mb-5 md:mb-0 h-0.5 md:h-0 w-full  bg-gradient-to-r from-white to-amber-200'> </div>

      <div className='flex flex-nowrap h-auto'>
        <div className='mt-1 md:mr-3 md:w-2 dark:md:w-1 md:h-vh bg-gradient-to-b from-amber-200 to-neutral-100'> </div>
        <div className='flex flex-wrap'>
          <p className="prose prose-invert w-full text-black dark:text-white">
            I'm a detail-oriented business partner helping teams from small non-profits to the Fortune 500 to cutting-edge tech companies do what they can to get the most from what they have, and chart the path towards World Class. 
          </p>
          <div className='mx-auto my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
          <p className="prose prose-invert w-full text-black dark:text-white">
            Together we can establish ground-level ops (think identifying KPIs, process mapping, SOPs and enablement for core processes), or identify and tackle the more complex and tailored Operations improvements needed to hit ever-more challenging targets.
          </p>
          <div className='mx-auto my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
          <p className="prose prose-invert w-full text-black dark:text-white">
            My breadth of experience enables me to be a creative problem solver who can get their hands dirty in systems, with data, and also on more nuanced and qualitative issues that teams may face.
            I’m a shepherd for complex and cross-functional initiatives, who can pro-actively identify solutions, own functions long-term, and lead teams of effective contributors.    
          </p>
          <div className='mx-auto my-2 h-0.5 w-5 bg-gradient-to-b from-neutral-400 via-neutral-950 to-neutral-400'></div>
          <p className="prose prose-invert w-full text-black dark:text-white">
            Read more about my experiences below:
          </p>
        </div>
      </div>

      <div className="w-full mx-auto mt-8">
        <DynamicAccordion/>
      </div>

    </section>
  );
}
