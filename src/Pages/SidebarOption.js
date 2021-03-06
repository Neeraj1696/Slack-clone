import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = () => {
    const channelName = () => alert("Hello");

    if (channelName) {
      db.getChannel({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? <h3>{title}</h3> : <SidebarOptionChannel></SidebarOptionChannel>}

      {/* <span>#</span>
      {title} */}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 400;
  }
`;

const SidebarOptionChannel = styled.div``;
