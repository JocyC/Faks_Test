// Claim
export interface Claim {
  id: Number;
  pharmacy: PharmacyInClaim;
  lab: LabInClaim;
}

// pharmacy in claim
export interface PharmacyInClaim {
  id: number;
  name: string;
  address_city: string;
  address_country: string;
  address_line_1: string;
  address_zip_code: string;
  cip: string;
  user_id: number;
}

// lab in claim
export interface LabInClaim {
  id: number;
  name: string;
  logo_url: string;
}

// user data
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string | null;
  kind: string;
  pharmacy_id: number | null;
  lab_id: number | null;
  created_at: string;
  updated_at: string;
}

// msg list
export interface Message {
  id: number;
  content: string;
  file_url: string | null;
  claim_id: number;
  user: User;
}

// All the response format
export interface ClaimsResponse {
  claims: Array<Claim>;
  meta: object;
}
export interface SingleClaimResponse {
  id: number;
  pharmacy: PharmacyInClaim;
  lab: LabInClaim;
}
export interface SingleLabResponse {
  id: number;
  name: string;
  logo_url: string;
  user: User;
}
export interface MessagesResponse {
  messages: Array<Message>;
  meta: object;
}

// All the post body
export interface MsgBody {
  message: {
    content: string;
    user_id: number;
    claim_id: number | null;
    file: string | null;
  };
}
export interface ClaimBody {
  claim: {
    pharmacy_id: number;
    lab_id: number;
    messages_attributes: [
      {
        user_id: number;
        content: string;
        file: string | null;
      }
    ];
  };
}
