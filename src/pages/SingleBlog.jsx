import React from "react";

const SingleBlog = () => {
  const data = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1681487464375-7cde580bf4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      heading: "Boze Coin Trading",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium eaque, ut odio sequi fugit itaque molestias officiis ad hic similique doloribus repellat quaerat sapiente quis vel praesentium. Quas harum libero ex minima, blanditiis voluptatem in temporibus itaque, eum aut cum adipisci commodi ad sint? Assumenda ullam impedit molestiae excepturi molestias ea, sequi enim nam inventore alias adipisci repellendus similique, temporibus eligendi illo vitae. Reprehenderit impedit itaque omnis earum molestias dolorem id veniam enim ex. Eveniet, qui! Aliquam impedit, dolorem provident minus odit, at vero recusandae vitae facere consequuntur veritatis voluptate consequatur est ipsum quaerat dolore doloremque, quae veniam in? Voluptates dignissimos dolor amet dolorum blanditiis nihil itaque pariatur, labore in nobis maiores dolorem, minus laudantium eius voluptatum. Delectus, ratione! Ut veritatis dicta neque recusandae deserunt ducimus in, eaque eligendi! Quibusdam, hic! Corporis placeat minus sed alias molestias nesciunt natus tempore tenetur quis dolorum nobis sequi inventore beatae esse optio error asperiores nisi voluptatum deserunt obcaecati est, ut officia fugit dolore? Enim, eaque. Doloribus, nam! Atque quisquam ipsam recusandae fuga soluta odio culpa eius expedita similique. Eligendi doloribus in modi animi at sunt architecto repudiandae rem nostrum, quasi veniam tempora eaque dolorum maxime cupiditate enim voluptates deserunt, laudantium error! Atque aliquid modi voluptates deleniti pariatur et hic repudiandae, dignissimos sapiente iusto eaque quasi illum fuga, quidem molestiae beatae officia eius quia. Est facere explicabo officia, dignissimos itaque recusandae placeat, dolorum ducimus minus, doloremque porro ullam eligendi. Pariatur placeat suscipit, cupiditate ipsum doloremque ea vero aperiam rerum molestiae quidem doloribus culpa, minus quo officia consequatur illo ut veritatis hic error quaerat, nihil cumque nisi inventore libero. Harum illum error ea, eum laboriosam earum exercitationem vitae, soluta dolorem quod illo dolores labore facere alias ullam nulla sequi, aliquam in officiis facilis unde. Ducimus est molestias odio tempora! Cumque porro fugit nostrum temporibus.",
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col  max-lg:px-[clamp(30px,6.7vw,100px)]  gap-[clamp(30px,12.2vw,150px)] pt-[100px] justify-center items-center bg-black">
      {data &&
        data.map((val) => (
          // /blogs/:id
          <div key={val.id} className="w-[70%] max-lg:w-full flex flex-col gap-[30px] ">
            <div
              
              className="w-full h-[500px] max-lg:h-auto   rounded-2xl overflow-hidden"
            >
              <img
                src={val.img}
                alt={val.img}
                className=" w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
              
                {" "}
                <h1 className="text-white text-[clamp(20px,5.2vw,50px)] mb-10">{val.heading}</h1>
              
              <div className="w-full h-1 bg-white rounded-xl max-lg:mt-0 mt-auto"></div>
            </div>
            <div className="w-full flex flex-col gap-10 text-[16px] text-white/50" >
              <p>{val.para}</p>
              <p>{val.para}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SingleBlog;
