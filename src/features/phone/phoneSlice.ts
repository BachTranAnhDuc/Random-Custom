import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPhoneState {
  logo: string;
  heading: string;
  name: string;
  paragraph: string;
  color: string;
}

const initialState: IPhoneState = {
  logo: "Default Logo",
  heading: "Default Heading",
  name: "Default Name",
  paragraph: "Default Paragraph",
  color: "#ffffff",
};

export const phoneSlice = createSlice({
  name: "phone",

  initialState,

  reducers: {
    handleChangePhone: (
      state,
      action: PayloadAction<{
        logo: string;
        heading: string;
        name: string;
        paragraph: string;
        color: string;
      }>,
    ) => {
      const { logo, heading, name, paragraph, color } = action.payload;

      state.logo = logo;
      state.heading = heading;
      state.name = name;
      state.paragraph = paragraph;
      state.color = color;
    },
  },
});

export const { handleChangePhone } = phoneSlice.actions;

export default phoneSlice.reducer;
