// const RegisterUser = async (formData) => {
//     const config = {
//         method: "post",
//         url: `https://faithful-garters-crab.cyclic.app/api/createuser`,
//         data:formData,
//         headers: {
//             "Content-Type": "application/json",
//             // Authorization: `Bearer ${typeof window !== "undefined" &&
//             //     JSON.parse(JSON.stringify(localStorage.getItem("token")))
//             //     }`,
//         },
//     };

//     try {
//         const res = await axios(config);
//         console.log("res", res);
//         return res.data;
//     } catch (error) {
//         console.log(error.response.data, "users");
//         return error.response.data;
//     }
// };