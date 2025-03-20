import React, { useEffect, useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserServices";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");

  const mutation = useMutationHooks((id, data) =>
    UserService.updateUser(id, data)
  );
  const { data, isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success("Cập nhật thành công");
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error("Cập nhật thất bại");
    }
  }, [isSuccess, isError]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(UserService.updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnChangeName = (value) => {
    setName(value);
  };
  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePhone = (value) => {
    setPhone(value);
  };
  const handleOnChangeAddress = (value) => {
    setAddress(value);
  };
  const handleOnChangeAvatar = (value) => {
    setAvatar(value);
  };

  const handleUpdate = () => {
    mutation.mutate(user?.id, {
      name,
      email,
      phone,
      address,
      avatar,
    });
  };
  return (
    <div style={{ width: "1270px ", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      <Loading isLoading={isPending}>
        <WrapperContentProfile>
          <WrapperInput>
            <WrapperLabel htmlFor="name">Name</WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              value={name}
              id={name}
              onChange={handleOnChangeName}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                height: "30px",
                width: "fit-content",
                borderRadius: "4px",
                border: "1px solid rgb(11, 116, 229)",
                margin: "26px 0 10px",
                padding: "4px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "rgb(11, 116, 229)",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="email">Email</WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              value={email}
              id={email}
              onChange={handleOnChangeEmail}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                height: "30px",
                width: "fit-content",
                borderRadius: "4px",
                border: "1px solid rgb(11, 116, 229)",
                margin: "26px 0 10px",
                padding: "4px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "rgb(11, 116, 229)",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              value={phone}
              id={phone}
              onChange={handleOnChangePhone}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                height: "30px",
                width: "fit-content",
                borderRadius: "4px",
                border: "1px solid rgb(11, 116, 229)",
                margin: "26px 0 10px",
                padding: "4px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "rgb(11, 116, 229)",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="address">Address</WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              value={address}
              id={address}
              onChange={handleOnChangeAddress}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                height: "30px",
                width: "fit-content",
                borderRadius: "4px",
                border: "1px solid rgb(11, 116, 229)",
                margin: "26px 0 10px",
                padding: "4px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "rgb(11, 116, 229)",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              value={avatar}
              id={avatar}
              onChange={handleOnChangeAvatar}
            />
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                height: "30px",
                width: "fit-content",
                borderRadius: "4px",
                border: "1px solid rgb(11, 116, 229)",
                margin: "26px 0 10px",
                padding: "4px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleTextButton={{
                color: "rgb(11, 116, 229)",
                fontSize: "15px",
                fontWeight: "700",
              }}
            ></ButtonComponent>
          </WrapperInput>
        </WrapperContentProfile>
      </Loading>
    </div>
  );
};

export default ProfilePage;
