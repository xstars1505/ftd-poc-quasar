import { authState } from "@/store/auth";
import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

jest.mock("axios", () => ({
  post: () => {
    return new Promise(resolve => {
      resolve(true);
    });
  }
}));

describe("getters", () => {
  let store;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(authState);
  });

  it("logon", () => {
    expect(store.getters.logon).toBe(false);
    store.commit("authenticate");
    expect(store.getters.logon).toBe(true);
  });

  it("authenticated", () => {
    expect(store.getters.authenticated).toBe(false);
    store.commit("authenticated");
    expect(store.getters.authenticated).toBe(true);
  });

  it("account", () => {
    expect(store.getters.account).toBe(undefined);
    store.commit("authenticated", { name: "aaa" });
    expect(store.getters.account.name).toBe("aaa");
  });
});

describe("mutations", () => {
  let store;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(authState);
  });

  it("authenticate", () => {
    expect(store.state.logon).toBe(false);
    store.commit("authenticate");
    expect(store.state.logon).toBe(true);
  });
});

describe("actions", () => {
  let store;
  let logoutMock;

  beforeEach(() => {
    logoutMock = jest.fn();
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(authState);
  });
  it("tests logout using a mock mutation", async () => {
    store.hotUpdate({
      mutations: { logout: logoutMock }
    });
    await store.dispatch("logout");
    expect(logoutMock).toHaveBeenCalled();
  });
});
