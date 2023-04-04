import React from 'react';
import Item from './Componet/Item';
function WorkshopBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            <Item
              name="Workshop Arduino"
              description="Desde 2018"
              image="https://res.cloudinary.com/rsc/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/F7154081-01?pgw=1"
              onClick={() => console.log("Workshop Arduino")}
            />

            <Item
              name="3D Printing"
              description="Desde 2018"
              image="https://media.wired.com/photos/630805595d32e4cad34d6ea4/16:9/w_2399,h_1349,c_limit/3D-Printer-Tips-Gear-GettyImages-1043199056.jpg"
              onClick={() => console.log("Workshop Arduino")}
            />
            <Item
              name="Outro"
              description="descrição...."
              onClick={() => console.log("Workshop Arduino")}
            />


          </div>

        </div>
      </div>
    </section>
  );
}

export default WorkshopBlocks;
