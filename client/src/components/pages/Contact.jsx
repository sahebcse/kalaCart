import React from 'react'


function Contact() {
    return (
        <div className=" bg-cover bg-center " style={{
            height: '100vh',
            backgroundImage: `url("http://squareone.blog/wp-content/uploads/2018/04/Renzo-Piano.jpg")`
          }} >
             
            <div className=" h-screen   md:pl-80 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 ">
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <form class="w-full max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                    <p className=" text-gray-700 text-lg font-bold mb-2">Let me know what you think about me!. I'll take a look and see if this could be shared with visitors on my website.Thank you !</p>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          
                       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-300 rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your Name"/>
                                 
    </div>
                            <div class="w-full md:w-1/2 px-3">
                                
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-300 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Your Email"/>
    </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-300 rounded py-1 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Your Title or Profession"/>
    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">
                                    <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-red-300 rounded py-4 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Your Comment"></textarea>
                                    </div>
                                </div>
                                <div class="md:flex md:items-center  ">
                                <div class="md:w-1/3"></div>
                                    <div class="md:w-1/3  " >
                                        <button class="shadow bg-green-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  " type="button"  >
                                            Send Message
                                        </button>
                                    </div>
                                    <div class="md:w-1/3"></div>
                                </div>
</form>

                            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        </div>
                    </div>
                    )
}



                    export default Contact
