import crudSlice from '@/shared/crudSlice';

export const { actions, reducer } = crudSlice({
  name: 'users',
});

export default reducer;
