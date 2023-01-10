import { Claim, SingleLabResponse, MessagesResponse } from "../interfaces";

export const singleLab: SingleLabResponse = {
  id: 1,
  name: "Labo 1",
  logo_url:
    "http://127.0.0.1:3000/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNM0pxYm5ZeGQzZGxjVEpxTm5KMU4ycHZaVEIwWm05dlptMWlNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpJdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN5TG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIyLTEyLTEzVDE2OjU5OjE4LjE5OVoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--4896e10eb7c6b7756577b05eb05cc0aba6988117/2.jpg",
  user: {
    id: 1,
    first_name: "Lab user N° 1",
    last_name: "Lab N° 1",
    email: null,
    kind: "lab",
    pharmacy_id: null,
    lab_id: 1,
    created_at: "2022-12-13T15:33:00.805Z",
    updated_at: "2022-12-13T15:33:00.805Z",
  },
};

export const singleClaim: Claim = {
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
};

export const messagesList: MessagesResponse = {
  messages: [
    {
      id: 1,
      content: "Message 1",
      file_url: null,
      claim_id: 1,
      user: {
        id: 1,
        first_name: "Firstname",
        last_name: "Lastname",
        email: null,
        kind: "pharmacy",
        pharmacy_id: null,
        lab_id: 1,
        created_at: "2022-12-13T15:33:00.805Z",
        updated_at: "2022-12-13T15:33:00.805Z",
      },
    },
    {
      id: 2,
      content: "Message 2",
      file_url: null,
      claim_id: 2,
      user: {
        id: 1,
        first_name: "Firstname",
        last_name: "Lastname",
        email: null,
        kind: "lab",
        pharmacy_id: null,
        lab_id: 1,
        created_at: "2022-12-13T15:33:00.805Z",
        updated_at: "2022-12-13T15:33:00.805Z",
      },
    },
  ],
  meta: {
    current_page: 1,
    objects_count: 20,
    total_pages: 2,
    total_count: 31,
  },
};
