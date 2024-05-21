import React from "react";
import GroupList from "../components/homepage/grouplist/GroupList";
import Friends from "../components/homepage/friends/Friends";
import UserList from "../components/homepage/userList/UserList";
import FriendRequest from "../components/homepage/friendRequest/FriendRequest";
import MyGroups from "../components/homepage/mygroups/MyGroups";
import BlockedUser from "../components/homepage/blockedUser/BlockedUser";

const HomepageContent = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-y-5  ">
        <GroupList />
        <Friends />
        <UserList />
        <FriendRequest />
        <MyGroups />
        <BlockedUser />
      </div>
    </>
  );
};

export default HomepageContent;
