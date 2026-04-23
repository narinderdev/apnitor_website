"use client";

import Image from "next/image";

const mobileCards = [
  {
    title: "Glowante",
    subtitle:
      "Premium skincare consultation and product recommendation engine.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCflAeh6uu2WCJwwsqHnNChpAvvhEB9JJ0ZtyLxaDbzXS-oVjuN9U1pGiEEXC02KE3fhHO23UMhAH9-up2VSQ8OO-I-E4Dh3yD6_4z03D1HIQb5B-lpKeRtv4zKPn24AEn3KACiC9-Pv39PkfHIbSpScTjjlq96zfzOGJz8sdof8lNsfP3Yhwhvw782a9fwkz2wcfM34gzLMau06Wxedsa7VtAzu0cWD2BP950QMcrD4UGamgxJ55G-CFvvkGDDGtbheQLOvb391mU",
    className: "lg:col-span-2",
    height: "h-[260px]",
    overlay: "from-[#8fd0dc]/10 via-transparent to-[#0b4aa6]/45",
    titleClass: "text-white",
    subtitleClass: "text-white/90",
    contentPosition: "bottom-8 left-8",
    textMax: "max-w-[380px]",
  },
  {
    title: "Fitness App",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKyIdQTa7_YNjj8zK64v_XsgXg1783iTkCo4fTzats_De-YzYHLwMouBXEXpObrx9Asyy1zD48vyp7QYESHvjKgT-V6VC6WfUqq8jH8wk_mn8aQZQlonGRVpZVaB3PqDcGSX6PDQv10w4Mu3kW1ExHnYlpJqknSYTIHn73-fWR6-m1aLWEsvPXFc9YQleA6vctcUr6H1l6l4KUZuoKmJzjPgCsUnn7D1XzxzJ2byWqWDPhzvzUYBjsERosv1qXJdY6IK1jpSVLH10",
    className: "lg:col-span-1",
    height: "h-[260px]",
    overlay: "from-transparent via-[#1c2340]/10 to-[#6c4fd3]/65",
    titleClass: "text-white",
    contentPosition: "bottom-8 left-8",
  },
  {
    title: "Golfer Caddie",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDy7kImqvDVwgnQW1yNdglhK9Aq1VR1j6o5wHAnV1n4W7V8lV0ItGzTptzbtlElAWN4soayLCknXmOpyNAx9fKXgN6cMlWIk8wKzBjZnvm6QQjga5D08DD9WdtpyCdxnJczfl9Kn_4W9qgLn4lsskdxI8SlUe8b5r5-oRRW3gBUoG_N5UvihfAgzwBvXslRGMAPEUzE3HbyREvhff7w_4P8eZ3ecWukm1MbiVlVPI0k0gwD6Nfw7u8P3ZdBZnFgPwYj0752uwfrI8",
    className: "lg:col-span-1",
    height: "h-[285px]",
    pill: true,
    violetOverlay: true,
  },
  {
    title: "Right Here",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcwsxKHa4ANMEScpQ2tXuDX79ouxtqf7PkVKpnQLeDAZW31vhLai6BNf86amkDd_IiUHsN2ZGE5WSIyAD0oL2CmBb9LQMl7TKXvp7b2DFicGP6wA3UVvGN8o3gFvs1MayUKtZmHF0w-sFLb7AllxfoZDew8mxONOJo7iCVazoIDSyoueGjr1AyY9QlO-yYqm9eEbnZbjCWyhTTHHHJkruTYForGLQku_6Ib4-U-12lZa1ADEpdK3iuMOmDlaUxTFL8WOWFJ2gBDjI",
    className: "lg:col-span-1",
    height: "h-[285px]",
    overlay: "from-[#002032]/25 via-transparent to-[#001c2a]/65",
    titleClass: "text-white",
    contentPosition: "bottom-7 left-8",
  },
  {
    title: "UnitTurn Pro",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8dn7LjwAO_noHtIWS2s7PEnD3jg1A-P5JFH7p9KFvQpIHddnTkPwfXI2SAtR9fT03gin_kPGQo4HTxgCWkGobx9J0wtHDryI0FwdZ90r49QhFCCDwT5bbeeUPRVilcYo_ovJRgRLfU9uTn0lDTRspLh5mvjXqFR0_cWKCXxNvwX0evZMh0AhYPeBTuJzHDnhedfViFYUqrvhgXyKzPCkfoVcRqDZEYOBIIjzidkXRkrj8u8ZPeaB8wEav8c-B-XlFYoQnWz0o430",
    className: "lg:col-span-1",
    height: "h-[285px]",
    labelCard: true,
  },
  {
    title: "Pool Builder",
    subtitle: "3D Visualizer & Quote Engine",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrZ6-6oK-4YERMqUkLeqwKNHzHxaO9K_bFBtTR_q48kaAJ64G_J2QrnLzvU4ieSFG5CE2bDj9WpZsEBVO9jXnvz9JrMQ8LP9fJ34tOVHCI_h5S74l_Artrv0q3GutH_5It6qPlorwdpwZ0jGMjn44zNTyGqwR2grzhq7eAe0hnAQaDYxzML5eVuHjmk9PUk237qd7I0vP4Z6ScJS-UwnQQ6Pz8USmagkEg9cl6lX3HkLoOXHAZukH8rgnSaWKYYlX8N3YzcFey7nQ",
    className: "lg:col-span-3",
    height: "h-[260px]",
    frosted: true,
  },
];

function Card(props) {
  const {
    title,
    subtitle,
    image,
    height,
    className,
    overlay,
    titleClass,
    subtitleClass,
    contentPosition,
    textMax,
    pill,
    labelCard,
    frosted,
    violetOverlay,
  } = props;

  return (
    <div className={className}>
      <div
        className={`group relative overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${height}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />

        {overlay && (
          <div className={`absolute inset-0 bg-gradient-to-b ${overlay}`} />
        )}

        {violetOverlay && (
          <div className="absolute inset-0 bg-[#7c5ce6]/28 transition duration-500 ease-out group-hover:bg-[#7c5ce6]/0" />
        )}

        {pill && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-full bg-white px-8 py-4 shadow-lg">
              <h3 className="text-[18px] font-semibold text-[#0b4aa6]">
                {title}
              </h3>
            </div>
          </div>
        )}

        {labelCard && (
          <div className="absolute bottom-8 left-8">
            <div className="rounded-[12px] bg-white px-6 py-4 shadow-md">
              <h3 className="text-[18px] font-semibold">{title}</h3>
            </div>
          </div>
        )}

        {frosted && (
          <div className="absolute bottom-8 left-8 right-8">
            <div className="rounded-[16px] bg-white/70 px-6 py-6 backdrop-blur-md">
              <h3 className="text-[20px] font-semibold text-[#0b4aa6]">
                {title}
              </h3>
              <p className="mt-2 text-[16px] text-[#475569]">{subtitle}</p>
            </div>
          </div>
        )}

        {!pill && !labelCard && !frosted && (
          <div className={`absolute ${contentPosition} ${textMax || ""}`}>
            <h3 className={`text-[20px] font-semibold ${titleClass || ""}`}>
              {title}
            </h3>
            {subtitle && (
              <p className={`mt-2 text-[16px] ${subtitleClass || ""}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function MobileSpecializedSection() {
  return (
    <section className="bg-[#eef0f3] px-6 py-20 md:px-10 lg:px-16 xl:px-26">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center">
          <h2 className="text-[42px] font-semibold md:text-[52px]">
            Mobile & Specialized
          </h2>
          <p className="mt-4 text-[20px] italic text-[#475569]">
            Niche applications engineered with user-centric obsession.
          </p>
        </div>

        {/* Row 1 */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Card {...mobileCards[0]} />
          <Card {...mobileCards[1]} />
        </div>

        {/* Row 2 */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <Card {...mobileCards[2]} />
          <Card {...mobileCards[3]} />
          <Card {...mobileCards[4]} />
        </div>

        {/* Row 3 */}
        <div className="mt-6">
          <Card {...mobileCards[5]} />
        </div>
      </div>
    </section>
  );
}
