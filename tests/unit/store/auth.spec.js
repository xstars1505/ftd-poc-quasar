import { authState } from '@/store/auth';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';

jest.mock('axios', () => ({
  post: () => {
    return new Promise(resolve => {
      resolve(true);
    });
  }
}));

describe('getters', () => {
  let store;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep(authState));
  });

  it('authenticated', () => {
    expect(store.getters.authenticated).toBe(false);
    store.commit('authenticate');
    expect(store.getters.authenticated).toBe(true);
  });

  it('account', () => {
    expect(store.getters.account).toBe(null);
    store.commit('authenticate', { name: 'aaa' });
    expect(store.getters.account.name).toBe('aaa');
  });
});

describe('mutations', () => {
  it('authenticate', () => {
    let store;

    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep(authState));
    expect(store.state.authenticated).toBe(false);
    store.commit('authenticate');
    expect(store.state.authenticated).toBe(true);
  });
});

describe('actions', () => {
  let store;
  let logoutMock;

  beforeEach(() => {
    logoutMock = jest.fn();
    const localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep(authState));
  });
  it('tests logout using a mock mutation', async () => {
    store.hotUpdate({
      mutations: { logout: logoutMock }
    });
    await store.dispatch('logout');
    expect(logoutMock).toHaveBeenCalled();
  });
});
