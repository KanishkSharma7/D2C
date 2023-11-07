import { create as ipfsHttpClient } from "ipfs-http-client";
// import { Base64 } from "js-base64";
import { Buffer } from 'buffer';

const projectId = "2L2lbQB198gnr0skXaUg66mmm0L";
const projectSecret = "048c14051c6667db2b0fff8c1b2edc11";

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
// const auth = 'Basic ' + Base64.encode(projectId + ':' + projectSecret);

export const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});
