import tw from "tailwind-styled-components";

import { useEffect } from "react";
import React from "react";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Sonam Agarwal</Name>
            <UserImage src="data:image/jpeg;base64,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" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col  h-screen`;
const ActionItems = tw.div`
 flex-1 p-4`;
const Header = tw.div`flex justify-between items-center`;
const UberLogo = tw.img`h-28`;
const Profile = tw.div` flex items-center `;
const Name = tw.div`mr-4 w-20 text-small`;
const UserImage = tw.img` h-12 w-12 rounded-full border border-gray-200 p-px`;
const ActionButtons = tw.div` flex `;
const ActionButton = tw.div`flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`;
const ActionButtonImage = tw.img` h-3/5`;
const InputButton = tw.div`h-10 bg-gray-200 text-2xl p-4 flex items-center mt-8`;
