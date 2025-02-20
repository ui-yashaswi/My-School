import React from "react";

function Description() {
  return (
    <div className="flex w-full h-full py-10  flex-col gap-6">
      {/* Product Description */}
      <div className="lg:w-[40vw]">
        <h1 className="text-xl font-semibold">Product Description</h1>
        <p className="text-zinc-600 text-lg pt-4">
          These Alphabet Train Learning Sticks make learning letters and words
          fun for kids. Designed like train carriages, each stick features a
          letter, helping children recognize alphabets and boost cognitive
          skills.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h1 className="text-xl font-semibold">Key Features</h1>
        <div className=" pt-4 text-lg text-zinc-600 flex flex-col gap-1">
          <p>✅ Bright & colorful design for interactive learning</p>
          <p>✅ Durable, child-safe material for long-lasting fun</p>
          <p>✅ Connectable train-style sticks for easy word-building</p>
          <p>✅ Ideal for early education, preschools, and home learning</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
