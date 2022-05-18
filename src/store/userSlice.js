// import { createSlice } from "@reduxjs/toolkit"

// const userReducer = createSlice({
//   name: "user",
//   initialState: {
//      user: {
//         registerName: "",
//         socialName: "",
//         password:"",
//         phone: {
//             countryCode: "",
//             number:""
//         },
//         address: {
//           zipCode: "",
//           addressLine: "",
//           buildingNumber: "",
//           complement: "",
//           neighborhood: "",
//           city: "",
//           state:"",
//           country:""
//         },
//         birthDate: "",
//         motherName: "",
//         email: "",
//         isPoliticallyExposedPerson: false,
//         documentNumber:""
//      },
//   },
//   reducers: {
//       getUser(state, action) {
//         state.user = action.type
//       }
//   }

// })
// export const { getUser } = userReducer.actions
// export default userReducer.reducer

const initialState = {
  user: {
    registerName: "",
    socialName: "",
    password: "",
    phone: {
      countryCode: "",
      number: "",
    },
    address: {
      zipCode: "",
      addressLine: "",
      buildingNumber: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      country: "",
    },
    birthDate: "",
    motherName: "",
    email: "",
    isPoliticallyExposedPerson: false,
    documentNumber: "",
  },
};

function userReducer(state = initialState, action) {
    if (action.type === 'FETCH_DATA') {
        return {
            ...state, 
            
        }
    }
}
