import axios, { AxiosError, AxiosResponse } from "axios";
import { URL } from "./url";
import * as endpoint from "./constants/accountEndpoints";
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "react-query";

interface Login {
    userID: string;
    password: string;
}

interface Register {
    userID: string;
    email: string;
    nickname: string;
    password: string;
}

interface FindID {
    email: string;
    code: string;
}

interface ChangePwd {
    password: string;
}

async function loginUser(userData: Login) {
    return await axios.post(URL + endpoint.ACCOUNT_LOGIN, userData);
}

async function getUser() {
    return await axios.get(URL + endpoint.ACCOUNT_GET, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            Refreshtoken: sessionStorage.getItem("refreshToken"),
        },
    });
}

async function registerUser(userData: Register) {
    return await axios.post(URL + endpoint.ACCOUNT_REGISTER, userData);
}

async function findID(userData: FindID) {
    return await axios.post(URL + endpoint.ACCOUNT_FIND_ID, userData);
}

async function changePwd(userData: ChangePwd) {
    return await axios.put(URL + endpoint.ACCOUNT_CHANGE_PASSWORD, userData, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            Refreshtoken: sessionStorage.getItem("refreshToken"),
        },
    });
}

async function logoutUser() {
    return await axios.delete(URL + endpoint.ACCOUNT_LOGOUT, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            Refreshtoken: sessionStorage.getItem("refreshToken"),
        },
    });
}

export const useFetchUser = (
    key: string | string[],
    options?: UseQueryOptions<AxiosResponse, AxiosError, AxiosResponse, string | string[]>
) => useQuery(key, getUser, options);

export const useRequestLogin = (
    userData: Login,
    options?: UseMutationOptions<AxiosResponse, AxiosError>
) => useMutation(() => loginUser(userData), options);

export const useRequestRegisterUser = (
    userData: Register,
    options?: UseMutationOptions<AxiosResponse, AxiosError>
) => useMutation(() => registerUser(userData), options);

export const useRequestFindID = (
    userData: FindID,
    options?: UseMutationOptions<AxiosResponse, AxiosError>
) => useMutation(() => findID(userData), options);

export const useRequestChangePwd = (
    userData: ChangePwd,
    options?: UseMutationOptions<AxiosResponse, AxiosError>
) => useMutation(() => changePwd(userData), options);

export const useRequestLogout = (options?: UseMutationOptions<AxiosResponse, AxiosError>) =>
    useMutation(() => logoutUser(), options);
