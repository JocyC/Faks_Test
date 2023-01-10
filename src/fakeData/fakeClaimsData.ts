import { Claim } from "../interfaces";

const claimsList: Claim[] = [
  {
    id: 1,
    pharmacy: {
      id: 1,
      name: "Pharmacie 1",
      address_city: "Paris",
      address_country: "France",
      address_line_1: "10 rue de Belleville",
      address_zip_code: "01020",
      cip: "46372111072",
      user_id: 6,
    },
    lab: {
      id: 1,
      name: "Labo 1",
      logo_url:
        "http://127.0.0.1:3000/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNM0pxYm5ZeGQzZGxjVEpxTm5KMU4ycHZaVEIwWm05dlptMWlNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpJdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN5TG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIyLTEyLTEzVDE2OjM5OjM0LjM2MVoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--0ea24733b11b555d6e53167fc1f58835dbb12a18/2.jpg",
    },
  },
  {
    id: 2,
    pharmacy: {
      id: 1,
      name: "Pharmacie 1",
      address_city: "Paris",
      address_country: "France",
      address_line_1: "10 rue de Belleville",
      address_zip_code: "01020",
      cip: "46372111072",
      user_id: 6,
    },
    lab: {
      id: 1,
      name: "Labo 1",
      logo_url:
        "http://127.0.0.1:3000/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNM0pxYm5ZeGQzZGxjVEpxTm5KMU4ycHZaVEIwWm05dlptMWlNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpJdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN5TG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIyLTEyLTEzVDE2OjM5OjM0LjM2M1oiLCJwdXIiOiJibG9iX2tleSJ9fQ==--cb9b7b1cb1bfae4e00acc2fb8dad1c20602e5761/2.jpg",
    },
  },
];

export default claimsList;
