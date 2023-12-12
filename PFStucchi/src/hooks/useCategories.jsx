import dataList  from "../data/electroDomesticos";
export const uniqueCategories = [ ...new Set(dataList.map(item => item.category) )];
