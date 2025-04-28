import React from "react";

const references = [
  {
    id: 1,
    name: "Client 1",
    logo: "https://img.freepik.com/vecteurs-libre/vecteur-conception-degrade-colore-oiseau_343694-2506.jpg",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/024/553/534/small_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "https://www.logoai.com/oss/icons/2021/12/02/EoLJeYhT6YPfd26.png",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "https://media.istockphoto.com/id/1713737536/fr/vectoriel/ic%C3%B4ne-du-logo-american-factory-avec-combinaison-du-drapeau-am%C3%A9ricain-et-du-mod%C3%A8le.jpg?s=612x612&w=0&k=20&c=wN4DHUsAIwifI_qr8ZuboLpB4uze0Y-xcIGecdQ3Vzs=",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "https://seeklogo.com/images/H/Huawei-logo-A8C7CBCAA8-seeklogo.com.png",
  },
];

const References = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-optimum-black text-center mb-12">
          Ils nous font confiance
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex w-max animate-scroll space-x-8">
            {[...references, ...references, ...references].map((ref, index) => (
              <div
                key={`${ref.id}-${index}`}
                className="flex-none w-[150px] h-[80px] bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={ref.logo}
                  alt={ref.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
