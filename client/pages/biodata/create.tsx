import React, { useState } from "react";
import axios from "axios";
import Default from "../../Layouts/Default.layout";
import BiodataForm from "../../components/Biodata/create";
import BioBrief from "../../components/BioBrif";
import { layoutPayload } from "../../types/global.type";

const Biodata = ({ data, userId }:{data:object, userId:object}) => {
  const [user, setUser] = useState<object | null>(userId);

  const handlePpSubmit = (e) => {
    e.preventDefault();
    const res = axios.post(
      `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/upload`
    );
  };

  const payload: layoutPayload = [
    {
      id: "sam-registration",
      name: "sam-registration",
      className: "",
      type: "fixed",
      rows: [
        {
          cols: [
            {
              span: 4,
              components: <BioBrief user={user} />,
            },
            {
              span: 8,
              components: <BiodataForm bio={data} userId={userId} />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="ex-page ex-page-registration">
      <Default layoutPayload={payload} />
    </div>
  );
};

export default Biodata;

export async function getServerSideProps(req, res) {
  const { data } = await axios.get(
    `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/user/biodata`,
    { params: req.query }
  );
  return {
    props: {
      data,
      userId: req.query.user,
    },
  };
}
