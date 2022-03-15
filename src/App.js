import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHttp } from './hooks/http.hook';
import { piclist } from './redux/actions/piclist';
import Header from './components/Header';
import MainCategories from './components/MainCategories';
import InnerBlocks from './components/InnerBlocks';
import CategoryModal from './modals/CategoryModal';
import ItemModal from './modals/ItemModal';

function App() {

  const isEditItemModalVisible = useSelector(state => state.piclist.isEditItemModalVisible)

  const dispatch = useDispatch();
  const { loading, request } = useHttp();

  const fetchPiclist = React.useCallback(async () => {
    console.log("FEEEEEEEETCH!!!!!!")
    try {
      const fetched = await request('http://localhost:3001/PickList', 'GET', null, {});
      dispatch(piclist(fetched));
    } catch (e) {
      console.log('FetchProductsFromAPI ERROR >>>', e);
    }
  }, [request, piclist]);

  useEffect(() => {
    fetchPiclist();
  }, []);

  return (
    <div className="App">
      <Header />
      <MainCategories />
      <Routes>
        <Route path="/" >
          <Route path=":Id" element={<InnerBlocks fetchPiclist={fetchPiclist} />} />
        </Route>
      </Routes>
      {/* <CategoryModal /> */}
      {isEditItemModalVisible ? <ItemModal /> : ''}
      
    </div>
  );
}

export default App;
