

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-amber-900 to-amber-600 bg-clip text text-transparent">Get in Touch</span>

        </h1>

        <p className="text-center text-lg font-semibold text-amber-500">
          Want to connect? Send me an email via this button and I will respond to you as soon as I can.
        </p>

        <a href="mailto:malavikasajith5@gmail.com" className="text-nowrap rounded-lg border border-amber-800 bg-amber-400 px-5 py-3 text-lg font-bold text-white shadow-lg shadow-amber-600 transition-all duration-300 hover: -translate-y-2 hover:shadow-xl hover:shadow-amber-600">Contact Me</a>


      </div>
    </div>
  )
}

export default Contact