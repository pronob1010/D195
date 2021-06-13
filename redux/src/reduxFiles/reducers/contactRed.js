import ContactDATA from "./../../component/data/contactData";

const initialState = {
  contact: ContactDATA,
};

console.log(ContactDATA);

const conntactRED = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_VALUS":
      let passedData = action.payload;
      passedData.id = state.contact.length;
      console.log(passedData);
      
      return {
          ...state,
          contact: state.contact.concat(passedData) };

    default:return state;
  }
};

export default conntactRED;
