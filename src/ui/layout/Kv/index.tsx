import React from 'react'

const Kv: React.FC = () => {
  return (
    <div className="relative w-full h-[40rem]">
      <div className="relative z-10 h-full w-full justify-center flex items-center">
        <h1 className="font-mono font-bold text-[3rem] text-white">STAY</h1>
      </div>
      <div className="absolute top-0 left-0 h-full w-full">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="./assets/images/kv.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Kv
