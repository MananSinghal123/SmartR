import React, { useEffect, useState } from "react";
import "./Helper.css";
import Layout from "../Layout";
import CustomModal from "../components/CustomModal";

function Helper() {
  const [open, setOpen] = useState(true);

  return (
    <Layout>
      <CustomModal endpoint="user-details" open={open} setOpen={setOpen} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
      consequatur sed esse autem sint amet unde corrupti hic, ducimus itaque et
      quos dolorum. Aut tenetur eaque ipsa eum alias dolore! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Magnam consequatur sed esse autem
      sint amet unde corrupti hic, ducimus itaque et quos dolorum. Aut tenetur
      eaque ipsa eum alias dolore! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Magnam consequatur sed esse autem sint amet unde
      corrupti hic, ducimus itaque et quos dolorum. Aut tenetur eaque ipsa eum
      alias dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magnam consequatur sed esse autem sint amet unde corrupti hic, ducimus
      itaque et quos dolorum. Aut tenetur eaque ipsa eum alias dolore! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur sed
      esse autem sint amet unde corrupti hic, ducimus itaque et quos dolorum.
      Aut tenetur eaque ipsa eum alias dolore! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Magnam consequatur sed esse autem sint amet
      unde corrupti hic, ducimus itaque et quos dolorum. Aut tenetur eaque ipsa
      eum alias dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magnam consequatur sed esse autem sint amet unde corrupti hic, ducimus
      itaque et quos dolorum. Aut tenetur eaque ipsa eum alias dolore! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur sed
      esse autem sint amet unde corrupti hic, ducimus itaque et quos dolorum.
      Aut tenetur eaque ipsa eum alias dolore! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Magnam consequatur sed esse autem sint amet
      unde corrupti hic, ducimus itaque et quos dolorum. Aut tenetur eaque ipsa
      eum alias dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Magnam consequatur sed esse autem sint amet unde corrupti hic, ducimus
      itaque et quos dolorum. Aut tenetur eaque ipsa eum alias dolore! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur sed
      esse autem sint amet unde corrupti hic, ducimus itaque et quos dolorum.
      Aut tenetur eaque ipsa eum alias dolore!{" "}
    </Layout>
  );
}

export default Helper;
