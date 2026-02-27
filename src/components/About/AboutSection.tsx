export default function AboutSection() {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-8 min-h-[70vh]"
        id="standing"
      >
        <div className="p-4 col-span-1 ">
          <img
            src="./images/F1-Logo.png"
            alt="F1 Racing"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="p-4 col-span-1 md:col-span-2 ">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-red-600">
            Formula One
          </h2>
          <p className="text-lg text-gray-300 ">
            Formula One (F1) is the premier global motorsport competition and
            the highest class of single-seater auto racing sanctioned by the
            Fédération Internationale de l'Automobile (FIA). It represents the
            FIA Formula One World Championship, first contested in 1950, and is
            widely regarded as the pinnacle of motorsport technology,
            engineering, and driver skill.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            F1 2026 is the ultimate destination for Formula 1 fans. We provide
            comprehensive information about the teams, drivers, and the latest
            news in the world of Formula 1 racing. Whether you're a die-hard fan
            or just getting into the sport, F1 2026 has something for everyone.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 px-8 py-16">
        <div className="p-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-red-600">
            Global calendar and audience
          </h2>
          <p className="text-lg text-gray-300">
            A typical F1 season runs from February to December, featuring races
            in countries such as Bahrain, Italy, the United States, Japan, and
            Brazil. Events draw hundreds of millions of viewers globally,
            supported by extensive media coverage through broadcasters like ESPN
            and global streaming partners.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-red-600">
            Cultural and economic significance
          </h2>
          <p className="text-lg text-gray-300">
            Formula One influences automotive design, sustainability research,
            and global entertainment. It has produced legendary drivers like
            Michael Schumacher, Ayrton Senna, and Lewis Hamilton, while
            continuing to expand its reach through new venues and sustainability
            initiatives aimed at achieving net-zero carbon emissions by 2030
          </p>
        </div>
      </div>
    </>
  );
}
