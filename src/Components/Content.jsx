import React from 'react'

const Content = () => {
  return (
    <div className='absolute w-[100%] h-[100vh] bg-slate-50 top-[10vh] flex justify-center '>
        <div className='w-[800px] shadow-md bg-slate-100 justify-center flex mt-[32px] rounded-xl flex-col relative '>
            <div className='absolute shadow-lg bg-slate-200 h-[45%] top-[0%] w-[95%] ml-4 mr-4 mt-5  rounded-xl flex'>
            <div className='w-[40%]'>
                <img src='https://images.pexels.com/photos/12461870/pexels-photo-12461870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='img' className='sm:w-[150px] sm:h-[150px] p-4 rounded-full ml-6 mt-6 w-[60px] h-[60px]'/>
            </div>
            <div className='sm:mt-14 sm:ml-4 sm:h-max mt-9 ml-3'>
              <span className='text-blue-500 font-bold text-2xl'>SHIVAM KUMAR</span>
              <p>Venture Partner</p>
              <br></br>
              <p className='font-light'>Najafgarh, New Delhi, Delhi</p>
              <hr className=''></hr>
              <p className='font-bold'>Bio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum provident quia eligendi dolores odio natus possimus velit, reiciendis dolorem!</p>
            </div>
            </div>
            <div className='mt-16 mb-8 pt-6 flex justify-center'>
                <span className='text-blue-500 font-bold text-xl ' >Portfolio</span>
            </div>
            <div className='flex justify-center mt-16'>
              <table className=' sm:w-[450px] w-[300px] bg-gray-200 rounded-md'>
                <tr className='p-[10px] border-blue-200'>
                  <th className='pt-[5px] text-left'>sr.no</th>
                  <th className='pt-[5px] text-left'>company name</th>
                  <th className='pt-[5px]'>website</th>
                </tr>
                <tr>
                  <th className='pt-[5px] text-left'>1</th>
                  <th className='pt-[5px] text-left'>name 1</th>
                  <th className='pt-[5px]'>Link 1</th>
                </tr>
                <tr>
                  <th className='pt-[5px] text-left'>2</th>
                  <th className='pt-[5px] text-left'>name 2</th>
                  <th className='pt-[5px]'>Link 2</th>
                </tr>
                <tr>
                  <th className='pt-[5px] text-left'>3</th>
                  <th className='pt-[5px] text-left'>name 3</th>
                  <th className='pt-[5px]'>Link 3</th>
                </tr>
                <tr>
                  <th className='pt-[5px] text-left'>4</th>
                  <th className='pt-[5px] text-left'>name 4</th>
                  <th className='pt-[5px]'>Link 4</th>
                </tr>
              </table>
             
            </div>
            <button className='sm:absolute sm:bottom-[10%] sm:left-[45%] bg-blue-500 rounded-2xl p-2 text-white absolute bottom-[15%] left-[40%]'>Submit Pitch</button>
        </div>
       
    </div>
  )
}

export default Content