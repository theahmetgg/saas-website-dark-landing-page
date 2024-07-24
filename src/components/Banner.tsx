import React from "react";

const Banner = () => {
  return (
    <div
      className="py-3 text-center"
      style={{
        background:
          "linear-gradient(to right, rgb(252, 214, 255), rgb(41, 216, 255), rgb(255, 253, 128), rgb(248, 154, 191), rgb(252, 214, 255))",
      }}
    >
      <div className="container">
        <p className="font-medium">
          <span className="hidden sm:inline">
            Introducing a completely redesigned interface -{" "}
          </span>
          <a href="#" className="underline underline-offset-4 ">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
