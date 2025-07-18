import React from 'react'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                < a href="/" className='text-neutral-400 fonts-bold text-xl hover:text-white transition-colors' >
                  Pratikshit
                </a>

                <button>
                  <img src={"/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                </button>
                <h1 className="bg-black/90 text-white p-4">Test Background</h1>


            </div>

        </div>
    </header>
  )
}

export default Navbar;