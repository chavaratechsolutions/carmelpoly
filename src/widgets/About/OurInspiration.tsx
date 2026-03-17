import Titlebar from "@components/TitleBar";
import Image from "next/image";
import React from "react";

export default function OurInspiration() {
  return (
    <section className="px-[5vw] py-[2rem] bg-white">
      <Titlebar title="Our Inspiration" />
      <div className="mt-8 flex flex-col  items-center gap-10">
        <div className="flex-shrink-0">
          <Image
            src="/St.-Kuriakose-Elias-Chavara-003-T.webp"
            alt="St Kuriakose Elias Chavara"
            width={500}
            height={500}
            className="w-[20rem] h-[30rem] object-cover rounded-full border-4 border-gray-300"
            style={{ borderRadius: "50% / 40%" }} // makes it oval
          />
          <p className="mt-4 text-xl font-semibold text-center">
            St Kuriakose Elias Chavara
          </p>
        </div>
        <div className="text-justify text-gray-700 leading-relaxed ">
          <p className="mb-4">
            St. Kuriakose Elias Chavara was born on 10 February 1805 at
            Kainakary, Kerala. At the age of five, he began his studies in a
            village school called ‘Kalary’. When he was 13, he joined the
            seminary at Pallipuram for his priestly training. While he was in
            the seminary, his parents and his eldest brother died of an
            epidemic. On 29 November 1829, he became a priest.
          </p>
          <p className="mb-4">
            St. Chavara was instrumental in founding two Catholic Religious
            Congregations – one for men, Carmelites of Mary Immaculate (CMI),
            and the other for women, Congregation of Mother of Carmel (CMC),
            for the spiritual renewal and all-round development of the society.
          </p>
          <p className="mb-4">
            Starting seven ashrams and a convent in different parts of Kerala,
            Chavara initiated a spiritual movement among the people of Kerala.
            He set up the first Catholic Sanskrit School, a Major Seminary, and
            a printing & publishing house at Mannanam. He directed that every
            church should start a school attached to it and encouraged children
            from poorer sections to attend by supplying mid-day meals and
            clothing. He founded a “Home of Charity” to care for the destitute,
            the beggars, the uncared sick, and the old. He also organized the
            first voluntary charitable association in Kerala for self-help among
            the needy.
          </p>
          <p className="mb-4">
            Even amid such manifold activities, he found time to write several
            literary and spiritual books in prose and verse. Among them is
            <em> Anastasyaude Rakthasakshyam</em>, the first historical chronicle
            in Malayalam. He knew seven languages – Malayalam, Tamil, Sanskrit,
            Syrian, Latin, Italian, and Portuguese.
          </p>
          <p>
            Essentially, however, St. Chavara was a man of prayer and great
            charity. He lived for 65 years and died on 3 January 1871. His
            sanctity was officially recognized by the Church when Pope John Paul
            II declared him ‘Blessed’ on 8 February 1986. He was canonized by
            Pope Francis on 23 November 2014. St. Chavara is the heavenly patron
            of all CMI and CMC institutions. Let us pray to him to intercede
            before God for all our needs, especially for success in our studies.
          </p>
        </div>
      </div>
    </section>
  );
}
