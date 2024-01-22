import Background from '../assets/images/library.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-20 bg-white bg-opacity-80 text-black rounded'>Welcome To The Library</h3>
        </div>
    </div>
  )
}

export default Home