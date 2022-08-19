import React from "react";
import { FlatList } from "react-native";
import repos from "../data/repos.js";
import ItemRepo from "./ItemsRepo.jsx";

const ListRepos = () => {
  return (
    <FlatList 
      data={repos}
      renderItem={({ item:repo}) => (
        <ItemRepo {...repo}/>
      )}></FlatList>  
    )
}

export default ListRepos;