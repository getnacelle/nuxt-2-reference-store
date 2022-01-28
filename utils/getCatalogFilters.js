export const getCatalogFilters = ({ catalog }) => {
  return catalog.reduce((acc, item) => {
    const filterValue = item.productType;
    const filterIndex = acc.findIndex((filterItem) => {
      return filterItem.type === 'productType';
    });
    if (filterValue) {
      if (filterIndex < 0) {
        acc.push({
          type: 'productType',
          name: 'Product Type',
          values: [filterValue]
        });
      } else if (!acc[filterIndex].values.includes(filterValue)) {
        acc[filterIndex].values.push(filterValue);
      }
    }
    return acc;
  }, []);
};
