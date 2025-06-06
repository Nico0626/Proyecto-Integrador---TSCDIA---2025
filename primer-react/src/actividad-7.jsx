function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img 
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
          alt="hero" 
          src="https://dummyimage.com/720x600" 
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Tu Título Aquí</h1>
          <p className="mb-8 leading-relaxed">Tu descripción aquí.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
