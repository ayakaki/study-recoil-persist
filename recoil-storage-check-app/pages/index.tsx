import { NextPage } from 'next';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  recoilPersistAtom,
  recoilPersistState,
} from '../store/recoilPersistState';
import { User } from '../models/user';
import { useRouter } from 'next/router';
import React from 'react';
import { recoilOnlyAtom, recoilOnlyState } from '../store/recoilOnlyState';

const Home: NextPage = () => {
  const recoilOnly = useRecoilValue(recoilOnlyState);
  const setRecoilOnly = useSetRecoilState(recoilOnlyAtom);

  const recoilPersist = useRecoilValue(recoilPersistState);
  const setRecoilPersist = useSetRecoilState(recoilPersistAtom);

  const router = useRouter();

  const afterUserValue: User = {
    name: '吾郎',
    from: '大阪',
    age: 23,
    favoriteFoods: ['お好み焼き', '餃子'],
  };

  const setAndJump = () => {
    setRecoilOnly(afterUserValue);
    setRecoilPersist(afterUserValue);
    router.push('/dist');
  };

  return (
    <>
      <h2>Recoilのみで定義</h2>
      <ul>
        <li>名前：{recoilOnly.name}</li>
        <li>出身：{recoilOnly.from}</li>
        <li>年齢：{recoilOnly.age}</li>
        <li>
          好きな食べ物：
          {recoilOnly.favoriteFoods.map((favoriteFood, index) => {
            return (
              <React.Fragment key={index}>{`${favoriteFood} `}</React.Fragment>
            );
          })}
        </li>
      </ul>
      <h2>RecoilPersistで定義</h2>
      <ul>
        <li>名前：{recoilPersist.name}</li>
        <li>出身：{recoilPersist.from}</li>
        <li>年齢：{recoilPersist.age}</li>
        <li>
          好きな食べ物：
          {recoilPersist.favoriteFoods.map((favoriteFood, index) => {
            return (
              <React.Fragment key={index}>{`${favoriteFood} `}</React.Fragment>
            );
          })}
        </li>
      </ul>
      <button onClick={setAndJump}>設定 & 遷移</button>
    </>
  );
};

export default Home;
