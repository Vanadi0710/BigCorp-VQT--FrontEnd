export function billDetail(devices = []) {
  let result = [];
  let tempArr = devices.map((item, index) => {
    return {
      id: item.split("-")[1],
      productName: item.split("-")[2],
    };
  });

  let counts = tempArr.reduce((total, item) => {
    var productName = item.productName;
    if (!total.hasOwnProperty(productName)) {
      total[productName] = 0;
    }
    total[productName]++;
    return total;
  }, {});

  for (const key in counts) {
    result.push({
      productName: key,
      quantity: counts[key],
    });
  }

  return result;
}

export function countProduct(instances) {
  let counts = instances.reduce((total, instance) => {
    var productName = instance.product.productName;
    if (!total.hasOwnProperty(productName)) {
      total[productName] = 0;
    }
    total[productName]++;
    return total;
  }, {});

  let result = [];
  for (const key in counts) {
    result.push({
      productName: key,
      quantity: counts[key],
    });
  }
  return result;
}
