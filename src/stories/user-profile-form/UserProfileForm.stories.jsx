import React from "react";
import "./styles.scss";
import { rootFolder } from "../../folders";
import UserProfileForm from "../../components/user-profile-form/UserProfileForm";

const defaultForm = {
  title: `${rootFolder}/UserProfileForm`,
  component: UserProfileForm,
};

export default defaultForm;

const Template = (args) => (
  <div className="userProfileForm">
    <UserProfileForm {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
