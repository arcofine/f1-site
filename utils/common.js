export const isRealValue = (obj) => {
       return obj && obj !== "null" && obj !== "undefined";
};

export const GET_TABLE_CONTENT = (data) => {
       if (isRealValue(data)) {
              return Object.values(data);
       } else {
              return null;
       }
};
